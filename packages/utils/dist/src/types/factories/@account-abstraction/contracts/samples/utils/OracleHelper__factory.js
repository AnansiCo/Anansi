"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleHelper__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "currentPrice",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "previousPrice",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "cachedPriceTimestamp",
                type: "uint256",
            },
        ],
        name: "TokenPriceUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "cachedPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cachedPriceTimestamp",
        outputs: [
            {
                internalType: "uint48",
                name: "",
                type: "uint48",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "force",
                type: "bool",
            },
        ],
        name: "updateCachedPrice",
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
class OracleHelper__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.OracleHelper__factory = OracleHelper__factory;
OracleHelper__factory.abi = _abi;
//# sourceMappingURL=OracleHelper__factory.js.map