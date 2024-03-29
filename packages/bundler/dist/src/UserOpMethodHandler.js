"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOpMethodHandler = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("@account-abstraction/utils");
const sdk_1 = require("@account-abstraction/sdk");
const HEX_REGEX = /^0x[a-fA-F\d]*$/i;
class UserOpMethodHandler {
    constructor(execManager, provider, signer, config, entryPoint) {
        this.execManager = execManager;
        this.provider = provider;
        this.signer = signer;
        this.config = config;
        this.entryPoint = entryPoint;
    }
    async getSupportedEntryPoints() {
        return [this.config.entryPoint];
    }
    async selectBeneficiary() {
        const currentBalance = await this.provider.getBalance(this.signer.getAddress());
        let beneficiary = this.config.beneficiary;
        // below min-balance redeem to the signer, to keep it active.
        if (currentBalance.lte(this.config.minBalance)) {
            beneficiary = await this.signer.getAddress();
            console.log('low balance. using ', beneficiary, 'as beneficiary instead of ', this.config.beneficiary);
        }
        return beneficiary;
    }
    async _validateParameters(userOp1, entryPointInput, requireSignature = true, requireGasParams = true) {
        (0, utils_1.requireCond)(entryPointInput != null, 'No entryPoint param', -32602);
        if ((entryPointInput === null || entryPointInput === void 0 ? void 0 : entryPointInput.toString().toLowerCase()) !== this.config.entryPoint.toLowerCase()) {
            throw new Error(`The EntryPoint at "${entryPointInput}" is not supported. This bundler uses ${this.config.entryPoint}`);
        }
        // minimal sanity check: userOp exists, and all members are hex
        (0, utils_1.requireCond)(userOp1 != null, 'No UserOperation param');
        const userOp = userOp1;
        const fields = ['sender', 'nonce', 'callData'];
        if (requireSignature) {
            fields.push('signature');
        }
        if (requireGasParams) {
            fields.push('preVerificationGas', 'verificationGasLimit', 'callGasLimit', 'maxFeePerGas', 'maxPriorityFeePerGas');
        }
        fields.forEach(key => {
            (0, utils_1.requireCond)(userOp[key] != null, 'Missing userOp field: ' + key, -32602);
            const value = userOp[key].toString();
            (0, utils_1.requireCond)(value.match(HEX_REGEX) != null, `Invalid hex value for property ${key}:${value} in UserOp`, -32602);
        });
        (0, utils_1.requireAddressAndFields)(userOp, 'paymaster', ['paymasterPostOpGasLimit', 'paymasterVerificationGasLimit'], ['paymasterData']);
        (0, utils_1.requireAddressAndFields)(userOp, 'factory', ['factoryData']);
    }
    /**
     * eth_estimateUserOperationGas RPC api.
     * @param userOp1 input userOp (may have gas fields missing, so they can be estimated)
     * @param entryPointInput
     */
    async estimateUserOperationGas(userOp1, entryPointInput) {
        const userOp = Object.assign({ 
            // default values for missing fields.
            maxFeePerGas: 0, maxPriorityFeePerGas: 0, preVerificationGas: 0, verificationGasLimit: 10e6 }, userOp1);
        // todo: checks the existence of parameters, but since we hexlify the inputs, it fails to validate
        await this._validateParameters((0, utils_1.deepHexlify)(userOp), entryPointInput);
        // todo: validation manager duplicate?
        const provider = this.provider;
        const rpcParams = (0, utils_1.simulationRpcParams)('simulateHandleOp', this.entryPoint.address, userOp, [utils_1.AddressZero, '0x'], {
        // allow estimation when account's balance is zero.
        // todo: need a way to flag this, and not enable always.
        // [userOp.sender]: {
        //   balance: hexStripZeros(parseEther('1').toHexString())
        // }
        });
        const ret = await provider.send('eth_call', rpcParams)
            .catch((e) => { throw new utils_1.RpcError((0, utils_1.decodeRevertReason)(e), utils_1.ValidationErrors.SimulateValidation); });
        const returnInfo = (0, utils_1.decodeSimulateHandleOpResult)(ret);
        const { validAfter, validUntil } = (0, utils_1.mergeValidationDataValues)(returnInfo.accountValidationData, returnInfo.paymasterValidationData);
        const { preOpGas } = returnInfo;
        // todo: use simulateHandleOp for this too...
        const callGasLimit = await this.provider.estimateGas({
            from: this.entryPoint.address,
            to: userOp.sender,
            data: userOp.callData
        }).then(b => b.toNumber()).catch(err => {
            var _a, _b;
            const message = (_b = (_a = err.message.match(/reason="(.*?)"/)) === null || _a === void 0 ? void 0 : _a.at(1)) !== null && _b !== void 0 ? _b : 'execution reverted';
            throw new utils_1.RpcError(message, utils_1.ValidationErrors.UserOperationReverted);
        });
        const preVerificationGas = (0, sdk_1.calcPreVerificationGas)(userOp);
        const verificationGasLimit = ethers_1.BigNumber.from(preOpGas).toNumber();
        return {
            preVerificationGas,
            verificationGasLimit,
            validAfter,
            validUntil,
            callGasLimit
        };
    }
    async sendUserOperation(userOp, entryPointInput) {
        var _a;
        await this._validateParameters(userOp, entryPointInput);
        console.log(`UserOperation: Sender=${userOp.sender}  Nonce=${(0, utils_1.tostr)(userOp.nonce)} EntryPoint=${entryPointInput} Paymaster=${(_a = userOp.paymaster) !== null && _a !== void 0 ? _a : ''}`);
        await this.execManager.sendUserOperation(userOp, entryPointInput);
        return await this.entryPoint.getUserOpHash((0, utils_1.packUserOp)(userOp));
    }
    async _getUserOperationEvent(userOpHash) {
        // TODO: eth_getLogs is throttled. must be acceptable for finding a UserOperation by hash
        const event = await this.entryPoint.queryFilter(this.entryPoint.filters.UserOperationEvent(userOpHash));
        return event[0];
    }
    // filter full bundle logs, and leave only logs for the given userOpHash
    // @param userOpEvent - the event of our UserOp (known to exist in the logs)
    // @param logs - full bundle logs. after each group of logs there is a single UserOperationEvent with unique hash.
    _filterLogs(userOpEvent, logs) {
        let startIndex = -1;
        let endIndex = -1;
        const events = Object.values(this.entryPoint.interface.events);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const beforeExecutionTopic = this.entryPoint.interface.getEventTopic(events.find((e) => e.name === 'BeforeExecution'));
        logs.forEach((log, index) => {
            if ((log === null || log === void 0 ? void 0 : log.topics[0]) === beforeExecutionTopic) {
                // all UserOp execution events start after the "BeforeExecution" event.
                startIndex = endIndex = index;
            }
            else if ((log === null || log === void 0 ? void 0 : log.topics[0]) === userOpEvent.topics[0]) {
                // process UserOperationEvent
                if (log.topics[1] === userOpEvent.topics[1]) {
                    // it's our userOpHash. save as end of logs array
                    endIndex = index;
                }
                else {
                    // it's a different hash. remember it as beginning index, but only if we didn't find our end index yet.
                    if (endIndex === -1) {
                        startIndex = index;
                    }
                }
            }
        });
        if (endIndex === -1) {
            throw new Error('fatal: no UserOperationEvent in logs');
        }
        return logs.slice(startIndex + 1, endIndex);
    }
    async getUserOperationByHash(userOpHash) {
        var _a, _b, _c;
        (0, utils_1.requireCond)(((_a = userOpHash === null || userOpHash === void 0 ? void 0 : userOpHash.toString()) === null || _a === void 0 ? void 0 : _a.match(HEX_REGEX)) != null, 'Missing/invalid userOpHash', -32602);
        const event = await this._getUserOperationEvent(userOpHash);
        if (event == null) {
            return null;
        }
        const tx = await event.getTransaction();
        if (tx.to !== this.entryPoint.address) {
            throw new Error('unable to parse transaction');
        }
        const parsed = this.entryPoint.interface.parseTransaction(tx);
        const ops = parsed === null || parsed === void 0 ? void 0 : parsed.args.ops;
        if (ops == null) {
            throw new Error('failed to parse transaction');
        }
        const op = ops.find(op => op.sender === event.args.sender &&
            ethers_1.BigNumber.from(op.nonce).eq(event.args.nonce));
        if (op == null) {
            throw new Error('unable to find userOp in transaction');
        }
        return (0, utils_1.deepHexlify)({
            userOperation: (0, utils_1.unpackUserOp)(op),
            entryPoint: this.entryPoint.address,
            transactionHash: tx.hash,
            blockHash: (_b = tx.blockHash) !== null && _b !== void 0 ? _b : '',
            blockNumber: (_c = tx.blockNumber) !== null && _c !== void 0 ? _c : 0
        });
    }
    async getUserOperationReceipt(userOpHash) {
        var _a;
        (0, utils_1.requireCond)(((_a = userOpHash === null || userOpHash === void 0 ? void 0 : userOpHash.toString()) === null || _a === void 0 ? void 0 : _a.match(HEX_REGEX)) != null, 'Missing/invalid userOpHash', -32602);
        const event = await this._getUserOperationEvent(userOpHash);
        if (event == null) {
            return null;
        }
        const receipt = await event.getTransactionReceipt();
        const logs = this._filterLogs(event, receipt.logs);
        return (0, utils_1.deepHexlify)({
            userOpHash,
            sender: event.args.sender,
            nonce: event.args.nonce,
            actualGasCost: event.args.actualGasCost,
            actualGasUsed: event.args.actualGasUsed,
            success: event.args.success,
            logs,
            receipt
        });
    }
    clientVersion() {
        // eslint-disable-next-line
        return 'aa-bundler/' + utils_1.erc4337RuntimeVersion + (this.config.unsafe ? '/unsafe' : '');
    }
}
exports.UserOpMethodHandler = UserOpMethodHandler;
//# sourceMappingURL=UserOpMethodHandler.js.map