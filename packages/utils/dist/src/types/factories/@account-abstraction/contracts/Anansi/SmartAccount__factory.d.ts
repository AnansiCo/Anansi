import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SmartAccount, SmartAccountInterface } from "../../../../@account-abstraction/contracts/Anansi/SmartAccount";
type SmartAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SmartAccount__factory extends ContractFactory {
    constructor(...args: SmartAccountConstructorParams);
    deploy(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SmartAccount>;
    getDeployTransaction(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SmartAccount;
    connect(signer: Signer): SmartAccount__factory;
    static readonly bytecode = "0x60c0604052306080523480156200001557600080fd5b5060405162001c8638038062001c8683398101604081905262000038916200010a565b6001600160a01b03811660a0526200004f62000056565b506200013c565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000a75760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001075780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6000602082840312156200011d57600080fd5b81516001600160a01b03811681146200013557600080fd5b9392505050565b60805160a051611ae5620001a16000396000818161032401528181610832015281816108ba015281816109e401528181610a7c01528181610ab601528181610c240152610d4b015260008181610df201528181610e1b0152610f610152611ae56000f3fe6080604052600436106101235760003560e01c8063820e93f5116100a0578063bc197c8111610064578063bc197c8114610368578063c399ec8814610397578063c45a0155146103ac578063d087d288146103cc578063f23a6e61146103e157600080fd5b8063820e93f5146102a15780638da5cb5b146102b7578063ad3cb1cc146102d7578063b0d691fe14610315578063b61d27f61461034857600080fd5b8063485cc955116100e7578063485cc955146102315780634a58db19146102515780634d44560d146102595780634f1ef2861461027957806352d1902d1461028c57600080fd5b806301ffc9a71461012f578063150b7a021461016457806319822f7c146101a95780631aa31647146101d757806347e1da2a1461020f57600080fd5b3661012a57005b600080fd5b34801561013b57600080fd5b5061014f61014a366004611373565b61040e565b60405190151581526020015b60405180910390f35b34801561017057600080fd5b5061019061017f3660046113fa565b630a85bd0160e11b95945050505050565b6040516001600160e01b0319909116815260200161015b565b3480156101b557600080fd5b506101c96101c436600461146c565b610460565b60405190815260200161015b565b3480156101e357600080fd5b506101f76101f2366004611589565b610486565b6040516001600160a01b03909116815260200161015b565b34801561021b57600080fd5b5061022f61022a3660046116a5565b61059e565b005b34801561023d57600080fd5b5061022f61024c36600461173e565b610721565b61022f610830565b34801561026557600080fd5b5061022f610274366004611777565b6108b0565b61022f6102873660046117a3565b610939565b34801561029857600080fd5b506101c9610958565b3480156102ad57600080fd5b506101c960015481565b3480156102c357600080fd5b506000546101f7906001600160a01b031681565b3480156102e357600080fd5b50610308604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161015b9190611816565b34801561032157600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101f7565b34801561035457600080fd5b5061022f610363366004611849565b610975565b34801561037457600080fd5b506101906103833660046118a4565b63bc197c8160e01b98975050505050505050565b3480156103a357600080fd5b506101c96109c4565b3480156103b857600080fd5b506002546101f7906001600160a01b031681565b3480156103d857600080fd5b506101c9610a55565b3480156103ed57600080fd5b506101906103fc366004611962565b63f23a6e6160e01b9695505050505050565b60006001600160e01b03198216630a85bd0160e11b148061043f57506001600160e01b03198216630271189760e51b145b8061045a57506001600160e01b031982166301ffc9a760e01b145b92915050565b600061046a610aab565b6104748484610b25565b905061047f82610bcc565b9392505050565b6002546000906001600160a01b031633146104b457604051631bb1b9eb60e31b815260040160405180910390fd5b604082015160015460148201516000546001600160a01b038083169116036105275760208086015180519101206001819055600080546040516001600160a01b03909116917f0f9ed33d6b47b06ac77ffbd124ae4820d7d2a0e285ac5666a181f5aca6a5751591a3506000949350505050565b846020015180519060200120820361059657600080546001600160a01b0319166001600160a01b038316908117825560015460405190927f0aa5c4053b511b550665f3b190a5584fdea2285bfd74b5d03deff5e5d7e70c6c91a350506000546001600160a01b03169392505050565b505050919050565b6105a6610c19565b84811480156105bc57508215806105bc57508281145b6106035760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b60448201526064015b60405180910390fd5b60008390036106af5760005b858110156106a9576106a187878381811061062c5761062c6119cb565b905060200201602081019061064191906119e1565b6000858585818110610655576106556119cb565b905060200281019061066791906119fe565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ca692505050565b60010161060f565b50610719565b60005b858110156107175761070f8787838181106106cf576106cf6119cb565b90506020020160208101906106e491906119e1565b8686848181106106f6576106f66119cb565b90506020020135858585818110610655576106556119cb565b6001016106b2565b505b505050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff1615906001600160401b03166000811580156107665750825b90506000826001600160401b031660011480156107825750303b155b905081158015610790575080155b156107ae5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156107d857845460ff60401b1916600160401b1785555b6107e28787610d16565b831561071757845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a150505050505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b5050505050565b6108b8610d96565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561092557600080fd5b505af1158015610719573d6000803e3d6000fd5b610941610de7565b61094a82610e8c565b6109548282610e94565b5050565b6000610962610f56565b50600080516020611a9083398151915290565b61097d610c19565b6109be848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ca692505050565b50505050565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610a2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a509190611a44565b905090565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610a0f565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b235760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016105fa565b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c8120610ba081610b666101008701876119fe565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f9f92505050565b6000546001600160a01b03908116911614610bbf57600191505061045a565b5060009392505050565b50565b8015610bc957604051600090339060001990849084818181858888f193505050503d80600081146108a9576040519150601f19603f3d011682016040523d82523d6000602084013e6108a9565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610c5a57506000546001600160a01b031633145b610b235760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016105fa565b600080846001600160a01b03168484604051610cc29190611a5d565b60006040518083038185875af1925050503d8060008114610cff576040519150601f19603f3d011682016040523d82523d6000602084013e610d04565b606091505b5091509150816108a957805160208201fd5b600080546001600160a01b038085166001600160a01b03199283168117845560028054868416941684179055604051929390927f0000000000000000000000000000000000000000000000000000000000000000909216917f7c910af0d5fd8019f1307793565067cd8c9667c05e01ad7cb1a38abfc4a4c45d9190a45050565b6000546001600160a01b0316331480610dae57503330145b610b235760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064016105fa565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610e6e57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e62600080516020611a90833981519152546001600160a01b031690565b6001600160a01b031614155b15610b235760405163703e46dd60e11b815260040160405180910390fd5b610bc9610d96565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610eee575060408051601f3d908101601f19168201909252610eeb91810190611a44565b60015b610f1657604051634c9c8ce360e01b81526001600160a01b03831660048201526024016105fa565b600080516020611a908339815191528114610f4757604051632a87526960e21b8152600481018290526024016105fa565b610f518383610fc9565b505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b235760405163703e46dd60e11b815260040160405180910390fd5b600080600080610faf868661101f565b925092509250610fbf828261106c565b5090949350505050565b610fd282611125565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561101757610f51828261118a565b610954611200565b600080600083516041036110595760208401516040850151606086015160001a61104b8882858561121f565b955095509550505050611065565b50508151600091506002905b9250925092565b600082600381111561108057611080611a79565b03611089575050565b600182600381111561109d5761109d611a79565b036110bb5760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156110cf576110cf611a79565b036110f05760405163fce698f760e01b8152600481018290526024016105fa565b600382600381111561110457611104611a79565b03610954576040516335e2f38360e21b8152600481018290526024016105fa565b806001600160a01b03163b60000361115b57604051634c9c8ce360e01b81526001600160a01b03821660048201526024016105fa565b600080516020611a9083398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516111a79190611a5d565b600060405180830381855af49150503d80600081146111e2576040519150601f19603f3d011682016040523d82523d6000602084013e6111e7565b606091505b50915091506111f78583836112ee565b95945050505050565b3415610b235760405163b398979f60e01b815260040160405180910390fd5b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561125a57506000915060039050826112e4565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156112ae573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112da575060009250600191508290506112e4565b9250600091508190505b9450945094915050565b606082611303576112fe8261134a565b61047f565b815115801561131a57506001600160a01b0384163b155b1561134357604051639996b31560e01b81526001600160a01b03851660048201526024016105fa565b508061047f565b80511561135a5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60006020828403121561138557600080fd5b81356001600160e01b03198116811461047f57600080fd5b6001600160a01b0381168114610bc957600080fd5b60008083601f8401126113c457600080fd5b5081356001600160401b038111156113db57600080fd5b6020830191508360208285010111156113f357600080fd5b9250929050565b60008060008060006080868803121561141257600080fd5b853561141d8161139d565b9450602086013561142d8161139d565b93506040860135925060608601356001600160401b0381111561144f57600080fd5b61145b888289016113b2565b969995985093965092949392505050565b60008060006060848603121561148157600080fd5b83356001600160401b0381111561149757600080fd5b840161012081870312156114aa57600080fd5b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156114f7576114f76114bf565b60405290565b600082601f83011261150e57600080fd5b81356001600160401b0380821115611528576115286114bf565b604051601f8301601f19908116603f01168101908282118183101715611550576115506114bf565b8160405283815286602085880101111561156957600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561159b57600080fd5b81356001600160401b03808211156115b257600080fd5b90830190608082860312156115c657600080fd5b6115ce6114d5565b8235828111156115dd57600080fd5b6115e9878286016114fd565b8252506020830135828111156115fe57600080fd5b61160a878286016114fd565b60208301525060408301358281111561162257600080fd5b61162e878286016114fd565b60408301525060608301358281111561164657600080fd5b611652878286016114fd565b60608301525095945050505050565b60008083601f84011261167357600080fd5b5081356001600160401b0381111561168a57600080fd5b6020830191508360208260051b85010111156113f357600080fd5b600080600080600080606087890312156116be57600080fd5b86356001600160401b03808211156116d557600080fd5b6116e18a838b01611661565b909850965060208901359150808211156116fa57600080fd5b6117068a838b01611661565b9096509450604089013591508082111561171f57600080fd5b5061172c89828a01611661565b979a9699509497509295939492505050565b6000806040838503121561175157600080fd5b823561175c8161139d565b9150602083013561176c8161139d565b809150509250929050565b6000806040838503121561178a57600080fd5b82356117958161139d565b946020939093013593505050565b600080604083850312156117b657600080fd5b82356117c18161139d565b915060208301356001600160401b038111156117dc57600080fd5b6117e8858286016114fd565b9150509250929050565b60005b8381101561180d5781810151838201526020016117f5565b50506000910152565b60208152600082518060208401526118358160408501602087016117f2565b601f01601f19169190910160400192915050565b6000806000806060858703121561185f57600080fd5b843561186a8161139d565b93506020850135925060408501356001600160401b0381111561188c57600080fd5b611898878288016113b2565b95989497509550505050565b60008060008060008060008060a0898b0312156118c057600080fd5b88356118cb8161139d565b975060208901356118db8161139d565b965060408901356001600160401b03808211156118f757600080fd5b6119038c838d01611661565b909850965060608b013591508082111561191c57600080fd5b6119288c838d01611661565b909650945060808b013591508082111561194157600080fd5b5061194e8b828c016113b2565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561197b57600080fd5b86356119868161139d565b955060208701356119968161139d565b9450604087013593506060870135925060808701356001600160401b038111156119bf57600080fd5b61172c89828a016113b2565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156119f357600080fd5b813561047f8161139d565b6000808335601e19843603018112611a1557600080fd5b8301803591506001600160401b03821115611a2f57600080fd5b6020019150368190038213156113f357600080fd5b600060208284031215611a5657600080fd5b5051919050565b60008251611a6f8184602087016117f2565b9190910192915050565b634e487b7160e01b600052602160045260246000fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca264697066735822122066798291fd6e616072d786db3fafc534a27e4e0692da9a36a5be23d9f85fd56464736f6c63430008170033";
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
        readonly name: "OnlyCallableByFactory";
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
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "email";
            readonly type: "bytes32";
        }];
        readonly name: "OwnerChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "email";
            readonly type: "bytes32";
        }];
        readonly name: "RecoveryEmailUpdates";
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
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "factory";
            readonly type: "address";
        }];
        readonly name: "SmartAccountInitialized";
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
        readonly name: "email";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
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
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "aud";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "email";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "nonce";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "kid";
                readonly type: "bytes";
            }];
            readonly internalType: "struct JwtTokenLib.Claims";
            readonly name: "_claims";
            readonly type: "tuple";
        }];
        readonly name: "fromFactory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
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
        }, {
            readonly internalType: "address";
            readonly name: "_factory";
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
    static createInterface(): SmartAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SmartAccount;
}
export {};
