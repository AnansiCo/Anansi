import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SimpleAccount, SimpleAccountInterface } from "../../../../@account-abstraction/contracts/samples/SimpleAccount";
type SimpleAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SimpleAccount__factory extends ContractFactory {
    constructor(...args: SimpleAccountConstructorParams);
    deploy(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SimpleAccount>;
    getDeployTransaction(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SimpleAccount;
    connect(signer: Signer): SimpleAccount__factory;
    static readonly bytecode = "0x60c0604052306080523480156200001557600080fd5b506040516200199f3803806200199f83398101604081905262000038916200010a565b6001600160a01b03811660a0526200004f62000056565b506200013c565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000a75760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001075780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6000602082840312156200011d57600080fd5b81516001600160a01b03811681146200013557600080fd5b9392505050565b60805160a0516117fe620001a1600039600081816102ad015281816105940152818161061c01528181610746015281816108ed0152818161092701528181610a950152610db5015260008181610be301528181610c0c0152610d5201526117fe6000f3fe6080604052600436106101025760003560e01c80638da5cb5b11610095578063bc197c8111610064578063bc197c81146102f1578063c399ec8814610320578063c4d66de814610335578063d087d28814610355578063f23a6e611461036a57600080fd5b80638da5cb5b14610228578063ad3cb1cc14610260578063b0d691fe1461029e578063b61d27f6146102d157600080fd5b80634a58db19116100d15780634a58db19146101d85780634d44560d146101e05780634f1ef2861461020057806352d1902d1461021357600080fd5b806301ffc9a71461010e578063150b7a021461014357806319822f7c1461018857806347e1da2a146101b657600080fd5b3661010957005b600080fd5b34801561011a57600080fd5b5061012e6101293660046111d3565b610397565b60405190151581526020015b60405180910390f35b34801561014f57600080fd5b5061016f61015e36600461125b565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200161013a565b34801561019457600080fd5b506101a86101a33660046112ce565b6103e9565b60405190815260200161013a565b3480156101c257600080fd5b506101d66101d1366004611367565b61040f565b005b6101d6610592565b3480156101ec57600080fd5b506101d66101fb366004611401565b610612565b6101d661020e366004611443565b61069b565b34801561021f57600080fd5b506101a86106ba565b34801561023457600080fd5b50600054610248906001600160a01b031681565b6040516001600160a01b03909116815260200161013a565b34801561026c57600080fd5b50610291604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161013a919061152b565b3480156102aa57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610248565b3480156102dd57600080fd5b506101d66102ec36600461155e565b6106d7565b3480156102fd57600080fd5b5061016f61030c3660046115ba565b63bc197c8160e01b98975050505050505050565b34801561032c57600080fd5b506101a8610726565b34801561034157600080fd5b506101d6610350366004611679565b6107b7565b34801561036157600080fd5b506101a86108c6565b34801561037657600080fd5b5061016f610385366004611696565b63f23a6e6160e01b9695505050505050565b60006001600160e01b03198216630a85bd0160e11b14806103c857506001600160e01b03198216630271189760e51b145b806103e357506001600160e01b031982166301ffc9a760e01b145b92915050565b60006103f361091c565b6103fd8484610996565b905061040882610a3d565b9392505050565b610417610a8a565b848114801561042d575082158061042d57508281145b6104745760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b60448201526064015b60405180910390fd5b60008390036105205760005b8581101561051a5761051287878381811061049d5761049d611700565b90506020020160208101906104b29190611679565b60008585858181106104c6576104c6611700565b90506020028101906104d89190611716565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b1792505050565b600101610480565b5061058a565b60005b858110156105885761058087878381811061054057610540611700565b90506020020160208101906105559190611679565b86868481811061056757610567611700565b905060200201358585858181106104c6576104c6611700565b600101610523565b505b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b1580156105f757600080fd5b505af115801561060b573d6000803e3d6000fd5b5050505050565b61061a610b87565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561068757600080fd5b505af115801561058a573d6000803e3d6000fd5b6106a3610bd8565b6106ac82610c7d565b6106b68282610c85565b5050565b60006106c4610d47565b506000805160206117a983398151915290565b6106df610a8a565b610720848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b1792505050565b50505050565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa15801561078e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b2919061175d565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156107fd5750825b905060008267ffffffffffffffff16600114801561081a5750303b155b905081158015610828575080155b156108465760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561087057845460ff60401b1916600160401b1785555b61087986610d90565b831561058a57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610771565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109945760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161046b565b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c8120610a11816109d7610100870187611716565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dff92505050565b6000546001600160a01b03908116911614610a305760019150506103e3565b5060009392505050565b50565b8015610a3a57604051600090339060001990849084818181858888f193505050503d806000811461060b576040519150601f19603f3d011682016040523d82523d6000602084013e61060b565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610acb57506000546001600160a01b031633145b6109945760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161046b565b600080846001600160a01b03168484604051610b339190611776565b60006040518083038185875af1925050503d8060008114610b70576040519150601f19603f3d011682016040523d82523d6000602084013e610b75565b606091505b50915091508161060b57805160208201fd5b6000546001600160a01b0316331480610b9f57503330145b6109945760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b604482015260640161046b565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610c5f57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c536000805160206117a9833981519152546001600160a01b031690565b6001600160a01b031614155b156109945760405163703e46dd60e11b815260040160405180910390fd5b610a3a610b87565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610cdf575060408051601f3d908101601f19168201909252610cdc9181019061175d565b60015b610d0757604051634c9c8ce360e01b81526001600160a01b038316600482015260240161046b565b6000805160206117a98339815191528114610d3857604051632a87526960e21b81526004810182905260240161046b565b610d428383610e29565b505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109945760405163703e46dd60e11b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b03838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b600080600080610e0f8686610e7f565b925092509250610e1f8282610ecc565b5090949350505050565b610e3282610f85565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115610e7757610d428282610fea565b6106b6611060565b60008060008351604103610eb95760208401516040850151606086015160001a610eab8882858561107f565b955095509550505050610ec5565b50508151600091506002905b9250925092565b6000826003811115610ee057610ee0611792565b03610ee9575050565b6001826003811115610efd57610efd611792565b03610f1b5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610f2f57610f2f611792565b03610f505760405163fce698f760e01b81526004810182905260240161046b565b6003826003811115610f6457610f64611792565b036106b6576040516335e2f38360e21b81526004810182905260240161046b565b806001600160a01b03163b600003610fbb57604051634c9c8ce360e01b81526001600160a01b038216600482015260240161046b565b6000805160206117a983398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516110079190611776565b600060405180830381855af49150503d8060008114611042576040519150601f19603f3d011682016040523d82523d6000602084013e611047565b606091505b509150915061105785838361114e565b95945050505050565b34156109945760405163b398979f60e01b815260040160405180910390fd5b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156110ba5750600091506003905082611144565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561110e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661113a57506000925060019150829050611144565b9250600091508190505b9450945094915050565b6060826111635761115e826111aa565b610408565b815115801561117a57506001600160a01b0384163b155b156111a357604051639996b31560e01b81526001600160a01b038516600482015260240161046b565b5080610408565b8051156111ba5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000602082840312156111e557600080fd5b81356001600160e01b03198116811461040857600080fd5b6001600160a01b0381168114610a3a57600080fd5b60008083601f84011261122457600080fd5b50813567ffffffffffffffff81111561123c57600080fd5b60208301915083602082850101111561125457600080fd5b9250929050565b60008060008060006080868803121561127357600080fd5b853561127e816111fd565b9450602086013561128e816111fd565b935060408601359250606086013567ffffffffffffffff8111156112b157600080fd5b6112bd88828901611212565b969995985093965092949392505050565b6000806000606084860312156112e357600080fd5b833567ffffffffffffffff8111156112fa57600080fd5b8401610120818703121561130d57600080fd5b95602085013595506040909401359392505050565b60008083601f84011261133457600080fd5b50813567ffffffffffffffff81111561134c57600080fd5b6020830191508360208260051b850101111561125457600080fd5b6000806000806000806060878903121561138057600080fd5b863567ffffffffffffffff8082111561139857600080fd5b6113a48a838b01611322565b909850965060208901359150808211156113bd57600080fd5b6113c98a838b01611322565b909650945060408901359150808211156113e257600080fd5b506113ef89828a01611322565b979a9699509497509295939492505050565b6000806040838503121561141457600080fd5b823561141f816111fd565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561145657600080fd5b8235611461816111fd565b9150602083013567ffffffffffffffff8082111561147e57600080fd5b818501915085601f83011261149257600080fd5b8135818111156114a4576114a461142d565b604051601f8201601f19908116603f011681019083821181831017156114cc576114cc61142d565b816040528281528860208487010111156114e557600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b8381101561152257818101518382015260200161150a565b50506000910152565b602081526000825180602084015261154a816040850160208701611507565b601f01601f19169190910160400192915050565b6000806000806060858703121561157457600080fd5b843561157f816111fd565b935060208501359250604085013567ffffffffffffffff8111156115a257600080fd5b6115ae87828801611212565b95989497509550505050565b60008060008060008060008060a0898b0312156115d657600080fd5b88356115e1816111fd565b975060208901356115f1816111fd565b9650604089013567ffffffffffffffff8082111561160e57600080fd5b61161a8c838d01611322565b909850965060608b013591508082111561163357600080fd5b61163f8c838d01611322565b909650945060808b013591508082111561165857600080fd5b506116658b828c01611212565b999c989b5096995094979396929594505050565b60006020828403121561168b57600080fd5b8135610408816111fd565b60008060008060008060a087890312156116af57600080fd5b86356116ba816111fd565b955060208701356116ca816111fd565b94506040870135935060608701359250608087013567ffffffffffffffff8111156116f457600080fd5b6113ef89828a01611212565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261172d57600080fd5b83018035915067ffffffffffffffff82111561174857600080fd5b60200191503681900382131561125457600080fd5b60006020828403121561176f57600080fd5b5051919050565b60008251611788818460208701611507565b9190910192915050565b634e487b7160e01b600052602160045260246000fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220c1481ef79be7830a0ca5b6b4ab3cdc9bcd9cf948bd5f87404c5ebd980eb63e2764736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "anEntryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ECDSAInvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "ECDSAInvalidSignatureLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "ECDSAInvalidSignatureS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "ERC1967InvalidImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC1967NonPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInitialization";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotInitializing";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UUPSUnauthorizedCallContext";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "slot";
            readonly type: "bytes32";
        }];
        readonly name: "UUPSUnsupportedProxiableUUID";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "version";
            readonly type: "uint64";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "SimpleAccountInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "UPGRADE_INTERFACE_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "addDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "dest";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "func";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "dest";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "value";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "func";
            readonly type: "bytes[]";
        }];
        readonly name: "executeBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "anOwner";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly internalType: "struct PackedUserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validateUserOp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "validationData";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawDepositTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SimpleAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SimpleAccount;
}
export {};
