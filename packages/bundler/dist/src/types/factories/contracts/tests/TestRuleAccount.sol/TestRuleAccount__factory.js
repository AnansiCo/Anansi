"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRuleAccount__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldState",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newState",
                type: "uint256",
            },
        ],
        name: "State",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "entryPoint",
                type: "address",
            },
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum IPaymaster.PostOpMode",
                name: "",
                type: "uint8",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "postOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "rule",
                type: "string",
            },
        ],
        name: "runRule",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_state",
                type: "uint256",
            },
        ],
        name: "setState",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506107b0806100206000396000f3fe6080604052600436106100555760003560e01c8063107679041461005a57806319822f7c1461006f57806352b7512c146100a25780637c627b21146100d0578063a9e966b7146100f2578063cd330fb014610112575b600080fd5b61006d61006836600461044b565b610132565b005b34801561007b57600080fd5b5061008f61008a36600461047b565b610190565b6040519081526020015b60405180910390f35b3480156100ae57600080fd5b506100c26100bd36600461047b565b61023a565b60405161009992919061051f565b3480156100dc57600080fd5b5061006d6100eb366004610541565b5050505050565b3480156100fe57600080fd5b5061006d61010d3660046105d9565b6102bb565b34801561011e57600080fd5b5061008f61012d366004610608565b6102fc565b604051621cb65b60e51b8152600160048201526001600160a01b03821690630396cb609034906024016000604051808303818588803b15801561017457600080fd5b505af1158015610188573d6000803e3d6000fd5b505050505050565b600081156101e457604051600090339084908381818185875af1925050503d80600081146101da576040519150601f19603f3d011682016040523d82523d6000602084013e6101df565b606091505b505050505b61022f6101f56101008601866106b9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506102fc92505050565b506000949350505050565b606060008061024c60e08701876106b9565b61025a916034908290610707565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061029d92508391506102fc9050565b50506040805160208101909152600080825290969095509350505050565b60005460408051918252602082018390527fe56f542cbdb0e18291d73ec9fd0b443112d0b4f547479e1303ffbc1007cc4f0f910160405180910390a1600055565b6040805160208082019092526000908190528251918301919091207fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4700361034557506000919050565b6040805180820190915260028152616f6b60f01b6020918201528251908301207f14502d3ab34ae28d404da8f6ec0501c6f295f66caa41e122cfa9b1291bc0f9e80361039357506000919050565b60408051808201909152600481526319985a5b60e21b6020918201528251908301207f3b2564d7e0fe091d49b4c20f4632191e4ed6986bf993849879abfef9465def25036104145760405162461bcd60e51b81526020600482015260096024820152686661696c2072756c6560b81b60448201526064015b60405180910390fd5b816040516020016104259190610731565b60408051601f198184030181529082905262461bcd60e51b825261040b91600401610767565b60006020828403121561045d57600080fd5b81356001600160a01b038116811461047457600080fd5b9392505050565b60008060006060848603121561049057600080fd5b833567ffffffffffffffff8111156104a757600080fd5b840161012081870312156104ba57600080fd5b95602085013595506040909401359392505050565b60005b838110156104ea5781810151838201526020016104d2565b50506000910152565b6000815180845261050b8160208601602086016104cf565b601f01601f19169290920160200192915050565b60408152600061053260408301856104f3565b90508260208301529392505050565b60008060008060006080868803121561055957600080fd5b85356003811061056857600080fd5b9450602086013567ffffffffffffffff8082111561058557600080fd5b818801915088601f83011261059957600080fd5b8135818111156105a857600080fd5b8960208285010111156105ba57600080fd5b9699602092909201985095966040810135965060600135945092505050565b6000602082840312156105eb57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561061a57600080fd5b813567ffffffffffffffff8082111561063257600080fd5b818401915084601f83011261064657600080fd5b813581811115610658576106586105f2565b604051601f8201601f19908116603f01168101908382118183101715610680576106806105f2565b8160405282815287602084870101111561069957600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000808335601e198436030181126106d057600080fd5b83018035915067ffffffffffffffff8211156106eb57600080fd5b60200191503681900382131561070057600080fd5b9250929050565b6000808585111561071757600080fd5b8386111561072457600080fd5b5050820193919092039150565b6d03ab735b737bbb710393ab6329d160951b81526000825161075a81600e8501602087016104cf565b91909101600e0192915050565b60208152600061047460208301846104f356fea26469706673582212204743edbeb2cda8d81a39bfc39cd04395114e0ad23161dacf56e2bc5297861bf664736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class TestRuleAccount__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestRuleAccount__factory = TestRuleAccount__factory;
TestRuleAccount__factory.bytecode = _bytecode;
TestRuleAccount__factory.abi = _abi;
//# sourceMappingURL=TestRuleAccount__factory.js.map