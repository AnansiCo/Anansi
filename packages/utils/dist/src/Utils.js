"use strict";
// misc utilities for the various modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.runContractScript = exports.toBytes32 = exports.mergeStorageMap = exports.getAddr = exports.supportsRpcMethod = exports.waitFor = exports.sleep = exports.mapOf = exports.requireAddressAndFields = exports.requireCond = exports.tostr = exports.RpcError = exports.ValidationErrors = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
var ValidationErrors;
(function (ValidationErrors) {
    ValidationErrors[ValidationErrors["InvalidFields"] = -32602] = "InvalidFields";
    ValidationErrors[ValidationErrors["SimulateValidation"] = -32500] = "SimulateValidation";
    ValidationErrors[ValidationErrors["SimulatePaymasterValidation"] = -32501] = "SimulatePaymasterValidation";
    ValidationErrors[ValidationErrors["OpcodeValidation"] = -32502] = "OpcodeValidation";
    ValidationErrors[ValidationErrors["NotInTimeRange"] = -32503] = "NotInTimeRange";
    ValidationErrors[ValidationErrors["Reputation"] = -32504] = "Reputation";
    ValidationErrors[ValidationErrors["InsufficientStake"] = -32505] = "InsufficientStake";
    ValidationErrors[ValidationErrors["UnsupportedSignatureAggregator"] = -32506] = "UnsupportedSignatureAggregator";
    ValidationErrors[ValidationErrors["InvalidSignature"] = -32507] = "InvalidSignature";
    ValidationErrors[ValidationErrors["UserOperationReverted"] = -32521] = "UserOperationReverted";
})(ValidationErrors = exports.ValidationErrors || (exports.ValidationErrors = {}));
class RpcError extends Error {
    // error codes from: https://eips.ethereum.org/EIPS/eip-1474
    constructor(msg, code, data = undefined) {
        super(msg);
        this.code = code;
        this.data = data;
    }
}
exports.RpcError = RpcError;
function tostr(s) {
    return ethers_1.BigNumber.from(s).toString();
}
exports.tostr = tostr;
function requireCond(cond, msg, code, data = undefined) {
    if (!cond) {
        throw new RpcError(msg, code, data);
    }
}
exports.requireCond = requireCond;
// verify that either address field exist along with "mustFields",
// or address field is missing, and none of the must (or optional) field also exists
function requireAddressAndFields(userOp, addrField, mustFields, optionalFields = []) {
    const op = userOp;
    const addr = op[addrField];
    if (addr == null) {
        const unexpected = Object.entries(op)
            .filter(([name, value]) => value != null && (mustFields.includes(name) || optionalFields.includes(name)));
        requireCond(unexpected.length === 0, `no ${addrField} but got ${unexpected.join(',')}`, ValidationErrors.InvalidFields);
    }
    else {
        requireCond(addr.match(/^0x[a-f0-9]{10,40}$/i), `invalid ${addrField}`, ValidationErrors.InvalidFields);
        const missing = mustFields.filter(name => op[name] == null);
        requireCond(missing.length === 0, `got ${addrField} but missing ${missing.join(',')}`, ValidationErrors.InvalidFields);
    }
}
exports.requireAddressAndFields = requireAddressAndFields;
/**
 * create a dictionary object with given keys
 * @param keys the property names of the returned object
 * @param mapper mapper from key to property value
 * @param filter if exists, must return true to add keys
 */
function mapOf(keys, mapper, filter) {
    const ret = {};
    for (const key of keys) {
        if (filter == null || filter(key)) {
            ret[key] = mapper(key);
        }
    }
    return ret;
}
exports.mapOf = mapOf;
async function sleep(sleepTime) {
    await new Promise(resolve => setTimeout(resolve, sleepTime));
}
exports.sleep = sleep;
async function waitFor(func, timeout = 10000, interval = 500) {
    const endTime = Date.now() + timeout;
    while (true) {
        const ret = await func();
        if (ret != null) {
            return ret;
        }
        if (Date.now() > endTime) {
            throw new Error(`Timed out waiting for ${func}`);
        }
        await sleep(interval);
    }
}
exports.waitFor = waitFor;
async function supportsRpcMethod(provider, method, params) {
    var _a, _b;
    const ret = await provider.send(method, params).catch(e => e);
    const code = (_b = (_a = ret.error) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : ret.code;
    return code === -32602; // wrong params (meaning, method exists)
}
exports.supportsRpcMethod = supportsRpcMethod;
// extract address from initCode or paymasterAndData
function getAddr(data) {
    if (data == null) {
        return undefined;
    }
    const str = (0, utils_1.hexlify)(data);
    if (str.length >= 42) {
        return str.slice(0, 42);
    }
    return undefined;
}
exports.getAddr = getAddr;
/**
 * merge all validationStorageMap objects into merged map
 * - entry with "root" (string) is always preferred over entry with slot-map
 * - merge slot entries
 * NOTE: slot values are supposed to be the value before the transaction started.
 *  so same address/slot in different validations should carry the same value
 * @param mergedStorageMap
 * @param validationStorageMap
 */
function mergeStorageMap(mergedStorageMap, validationStorageMap) {
    Object.entries(validationStorageMap).forEach(([addr, validationEntry]) => {
        if (typeof validationEntry === 'string') {
            // it's a root. override specific slots, if any
            mergedStorageMap[addr] = validationEntry;
        }
        else if (typeof mergedStorageMap[addr] === 'string') {
            // merged address already contains a root. ignore specific slot values
        }
        else {
            let slots;
            if (mergedStorageMap[addr] == null) {
                slots = mergedStorageMap[addr] = {};
            }
            else {
                slots = mergedStorageMap[addr];
            }
            Object.entries(validationEntry).forEach(([slot, val]) => {
                slots[slot] = val;
            });
        }
    });
    return mergedStorageMap;
}
exports.mergeStorageMap = mergeStorageMap;
function toBytes32(b) {
    return (0, utils_1.hexZeroPad)((0, utils_1.hexlify)(b).toLowerCase(), 32);
}
exports.toBytes32 = toBytes32;
/**
 * run the constructor of the given type as a script: it is expected to revert with the script's return values.
 * @param provider provider to use fo rthe call
 * @param c - contract factory of the script class
 * @param ctrParams constructor parameters
 * @return an array of arguments of the error
 * example usasge:
 *     hashes = await runContractScript(provider, new GetUserOpHashes__factory(), [entryPoint.address, userOps]).then(ret => ret.userOpHashes)
 */
async function runContractScript(provider, c, ctrParams) {
    const tx = c.getDeployTransaction(...ctrParams);
    const ret = await provider.call(tx);
    const parsed = ethers_1.ContractFactory.getInterface(c.interface).parseError(ret);
    if (parsed == null)
        throw new Error('unable to parse script (error) response: ' + ret);
    return parsed.args;
}
exports.runContractScript = runContractScript;
//# sourceMappingURL=Utils.js.map