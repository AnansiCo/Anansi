"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAggregator__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
                internalType: "struct PackedUserOperation[]",
                name: "userOps",
                type: "tuple[]",
            },
        ],
        name: "aggregateSignatures",
        outputs: [
            {
                internalType: "bytes",
                name: "aggregatedSignature",
                type: "bytes",
            },
        ],
        stateMutability: "view",
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
                internalType: "struct PackedUserOperation[]",
                name: "userOps",
                type: "tuple[]",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "validateSignatures",
        outputs: [],
        stateMutability: "view",
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
        ],
        name: "validateUserOpSignature",
        outputs: [
            {
                internalType: "bytes",
                name: "sigForUserOp",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IAggregator__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAggregator__factory = IAggregator__factory;
IAggregator__factory.abi = _abi;
//# sourceMappingURL=IAggregator__factory.js.map