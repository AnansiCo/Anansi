import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { GetUserOpHashes, GetUserOpHashesInterface, PackedUserOperationStruct } from "../../../contracts/BundlerHelper.sol/GetUserOpHashes";
type GetUserOpHashesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GetUserOpHashes__factory extends ContractFactory {
    constructor(...args: GetUserOpHashesConstructorParams);
    deploy(entryPoint: PromiseOrValue<string>, userOps: PackedUserOperationStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GetUserOpHashes>;
    getDeployTransaction(entryPoint: PromiseOrValue<string>, userOps: PackedUserOperationStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GetUserOpHashes;
    connect(signer: Signer): GetUserOpHashes__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620005fe380380620005fe8339810160408190526200003491620002b4565b62000040828262000064565b604051628f37ad60e51b81526004016200005b91906200048d565b60405180910390fd5b606081516001600160401b0381111562000082576200008262000193565b604051908082528060200260200182016040528015620000ac578160200160208202803683370190505b50905060005b82518110156200017357836001600160a01b03166322cdde4c848381518110620000e057620000e0620004d3565b60200260200101516040518263ffffffff1660e01b815260040162000106919062000517565b602060405180830381865afa15801562000124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014a9190620005e3565b8282815181106200015f576200015f620004d3565b6020908102919091010152600101620000b2565b5092915050565b6001600160a01b03811681146200019057600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715620001cf57620001cf62000193565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000200576200020062000193565b604052919050565b805162000215816200017a565b919050565b60005b83811015620002375781810151838201526020016200021d565b50506000910152565b600082601f8301126200025257600080fd5b81516001600160401b038111156200026e576200026e62000193565b62000283601f8201601f1916602001620001d5565b8181528460208386010111156200029957600080fd5b620002ac8260208301602087016200021a565b949350505050565b60008060408385031215620002c857600080fd5b8251620002d5816200017a565b602084810151919350906001600160401b0380821115620002f557600080fd5b818601915086601f8301126200030a57600080fd5b8151818111156200031f576200031f62000193565b8060051b62000330858201620001d5565b918252838101850191858101908a8411156200034b57600080fd5b86860192505b838310156200047c578251858111156200036a57600080fd5b8601610120818d03601f190112156200038257600080fd5b6200038c620001a9565b6200039989830162000208565b8152604082015189820152606082015187811115620003b757600080fd5b620003c78e8b8386010162000240565b604083015250608082015187811115620003e057600080fd5b620003f08e8b8386010162000240565b60608301525060a0820151608082015260c082015160a082015260e082015160c082015261010080830151888111156200042957600080fd5b620004398f8c8387010162000240565b60e084015250610120830151888111156200045357600080fd5b620004638f8c8387010162000240565b9183019190915250835250918601919086019062000351565b809750505050505050509250929050565b6020808252825182820181905260009190848201906040850190845b81811015620004c757835183529284019291840191600101620004a9565b50909695505050505050565b634e487b7160e01b600052603260045260246000fd5b60008151808452620005038160208601602086016200021a565b601f01601f19169290920160200192915050565b60208152620005326020820183516001600160a01b03169052565b60208201516040820152600060408301516101208060608501526200055c610140850183620004e9565b91506060850151601f19808685030160808701526200057c8483620004e9565b9350608087015160a087015260a087015160c087015260c087015160e087015260e08701519150610100818786030181880152620005bb8584620004e9565b908801518782039092018488015293509050620005d98382620004e9565b9695505050505050565b600060208284031215620005f657600080fd5b505191905056fe";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes32";
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "gasFees";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct PackedUserOperation[]";
            readonly name: "userOps";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "userOpHashes";
            readonly type: "bytes32[]";
        }];
        readonly name: "UserOpHashesResult";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes32";
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "gasFees";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct PackedUserOperation[]";
            readonly name: "userOps";
            readonly type: "tuple[]";
        }];
        readonly name: "getUserOpHashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "ret";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): GetUserOpHashesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GetUserOpHashes;
}
export {};
