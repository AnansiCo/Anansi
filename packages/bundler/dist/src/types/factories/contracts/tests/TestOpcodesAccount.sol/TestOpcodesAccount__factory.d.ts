import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { TestOpcodesAccount, TestOpcodesAccountInterface } from "../../../../contracts/tests/TestOpcodesAccount.sol/TestOpcodesAccount";
type TestOpcodesAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestOpcodesAccount__factory extends ContractFactory {
    constructor(...args: TestOpcodesAccountConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestOpcodesAccount>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestOpcodesAccount;
    connect(signer: Signer): TestOpcodesAccount__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610a89806100206000396000f3fe6080604052600436106100705760003560e01c80637c627b211161004e5780637c627b21146100eb578063a9e966b71461010d578063c1d35c901461012d578063cd330fb01461014257600080fd5b8063107679041461007557806319822f7c1461008a57806352b7512c146100bd575b600080fd5b6100886100833660046106c8565b610162565b005b34801561009657600080fd5b506100aa6100a53660046106f8565b6101c0565b6040519081526020015b60405180910390f35b3480156100c957600080fd5b506100dd6100d83660046106f8565b61026a565b6040516100b492919061079c565b3480156100f757600080fd5b506100886101063660046107be565b5050505050565b34801561011957600080fd5b50610088610128366004610856565b6102eb565b34801561013957600080fd5b5061008861032c565b34801561014e57600080fd5b506100aa61015d366004610885565b610357565b604051621cb65b60e51b8152600160048201526001600160a01b03821690630396cb609034906024016000604051808303818588803b1580156101a457600080fd5b505af11580156101b8573d6000803e3d6000fd5b505050505050565b6000811561021457604051600090339084908381818185875af1925050503d806000811461020a576040519150601f19603f3d011682016040523d82523d6000602084013e61020f565b606091505b505050505b61025f610225610100860186610936565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061035792505050565b506000949350505050565b606060008061027c60e0870187610936565b61028a916034908290610984565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506102cd92508391506103579050565b50506040805160208101909152600080825290969095509350505050565b60005460408051918252602082018390527fe56f542cbdb0e18291d73ec9fd0b443112d0b4f547479e1303ffbc1007cc4f0f910160405180910390a1600055565b6040517f5c020e03e3e9cb70af6fda922fb5583a032cfd7aede10d070761815871502ca590600090a1565b604080518082019091526006815265373ab6b132b960d11b6020918201528151908201206000907ff648814c67221440671fd7c2de979db4020a9320fb7985ff79ca8e7dced277f8036103ab575043919050565b604080518082019091526008815267636f696e6261736560c01b6020918201528251908301207f76ec948a9207fdea26dcba91086bcdd181920ff52a539b0d1eb28e73b4cd92af036103fe575041919050565b6040805180820190915260098152680c4d8dec6d6d0c2e6d60bb1b6020918201528251908301207fd60ee5d9b1a312631632d0ab8816ca64259093d8ab0b4d29f35db6a6151b0f8d0361045357505060004090565b60408051808201909152600781526631b932b0ba329960c91b6020918201528251908301207f8fac3d089893f1e87120aee7f9c091bedb61facca5e493da02330bcb46f0949c036104d7576040516001906104ad906106bc565b8190604051809103906000f59050801580156104cd573d6000803e3d6000fd5b5060009392505050565b604080518082019091526008815267656d69742d6d736760c01b6020918201528251908301207f9b68a4beda047bbcff1923196e9af52348c30a06718efbeffa6d1dcc2c0a40fe0361055e576040513081527fc798341d2d62b28e8ed71452b00bdba7767fa7086ec2f2c695b40263a0eb7e909060200160405180910390a1506000919050565b6105678261056d565b92915050565b6040805160208082019092526000908190528251918301919091207fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470036105b657506000919050565b6040805180820190915260028152616f6b60f01b6020918201528251908301207f14502d3ab34ae28d404da8f6ec0501c6f295f66caa41e122cfa9b1291bc0f9e80361060457506000919050565b60408051808201909152600481526319985a5b60e21b6020918201528251908301207f3b2564d7e0fe091d49b4c20f4632191e4ed6986bf993849879abfef9465def25036106855760405162461bcd60e51b81526020600482015260096024820152686661696c2072756c6560b81b60448201526064015b60405180910390fd5b8160405160200161069691906109ae565b60408051601f198184030181529082905262461bcd60e51b825261067c916004016109e4565b605c806109f883390190565b6000602082840312156106da57600080fd5b81356001600160a01b03811681146106f157600080fd5b9392505050565b60008060006060848603121561070d57600080fd5b833567ffffffffffffffff81111561072457600080fd5b8401610120818703121561073757600080fd5b95602085013595506040909401359392505050565b60005b8381101561076757818101518382015260200161074f565b50506000910152565b6000815180845261078881602086016020860161074c565b601f01601f19169290920160200192915050565b6040815260006107af6040830185610770565b90508260208301529392505050565b6000806000806000608086880312156107d657600080fd5b8535600381106107e557600080fd5b9450602086013567ffffffffffffffff8082111561080257600080fd5b818801915088601f83011261081657600080fd5b81358181111561082557600080fd5b89602082850101111561083757600080fd5b9699602092909201985095966040810135965060600135945092505050565b60006020828403121561086857600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561089757600080fd5b813567ffffffffffffffff808211156108af57600080fd5b818401915084601f8301126108c357600080fd5b8135818111156108d5576108d561086f565b604051601f8201601f19908116603f011681019083821181831017156108fd576108fd61086f565b8160405282815287602084870101111561091657600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000808335601e1984360301811261094d57600080fd5b83018035915067ffffffffffffffff82111561096857600080fd5b60200191503681900382131561097d57600080fd5b9250929050565b6000808585111561099457600080fd5b838611156109a157600080fd5b5050820193919092039150565b6d03ab735b737bbb710393ab6329d160951b8152600082516109d781600e85016020870161074c565b91909101600e0192915050565b6020815260006106f1602083018461077056fe6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c3877aa49776079d422730a459fb6d0468d0a603544dd765a8737b9bf5fe96e764736f6c63430008170033a26469706673582212205d2c349a49abd657b699f8d0e4269784f0da7f0231c5c1b99c1040831a65590764736f6c63430008170033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "ExecutionMessage";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldState";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newState";
            readonly type: "uint256";
        }];
        readonly name: "State";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "eventSender";
            readonly type: "address";
        }];
        readonly name: "TestMessage";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }];
        readonly name: "addStake";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "execEvent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IPaymaster.PostOpMode";
            readonly name: "";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "postOp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "rule";
            readonly type: "string";
        }];
        readonly name: "runRule";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_state";
            readonly type: "uint256";
        }];
        readonly name: "setState";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "validatePaymasterUserOp";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "context";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validateUserOp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TestOpcodesAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestOpcodesAccount;
}
export {};
