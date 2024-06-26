"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationLib__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "PAYMASTER_DATA_OFFSET",
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
        name: "PAYMASTER_POSTOP_GAS_OFFSET",
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
        name: "PAYMASTER_VALIDATION_GAS_OFFSET",
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
];
const _bytecode = "0x60a9610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c806325093e1b14604c578063b29a8ff4146065578063ede3150214606c575b600080fd5b6053602481565b60405190815260200160405180910390f35b6053601481565b605360348156fea2646970667358221220da10ce14444097f012d04a4f82de7b5c991303ba177bf40cd1c4fa5d1ab3f13764736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class UserOperationLib__factory extends ethers_1.ContractFactory {
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
exports.UserOperationLib__factory = UserOperationLib__factory;
UserOperationLib__factory.bytecode = _bytecode;
UserOperationLib__factory.abi = _abi;
//# sourceMappingURL=UserOperationLib__factory.js.map