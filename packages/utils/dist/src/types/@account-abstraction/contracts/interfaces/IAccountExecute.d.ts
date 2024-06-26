import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export type PackedUserOperationStruct = {
    sender: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    initCode: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    accountGasLimits: PromiseOrValue<BytesLike>;
    preVerificationGas: PromiseOrValue<BigNumberish>;
    gasFees: PromiseOrValue<BytesLike>;
    paymasterAndData: PromiseOrValue<BytesLike>;
    signature: PromiseOrValue<BytesLike>;
};
export type PackedUserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    accountGasLimits: string;
    preVerificationGas: BigNumber;
    gasFees: string;
    paymasterAndData: string;
    signature: string;
};
export interface IAccountExecuteInterface extends utils.Interface {
    functions: {
        "executeUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeUserOp", values: [PackedUserOperationStruct, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "executeUserOp", data: BytesLike): Result;
    events: {};
}
export interface IAccountExecute extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAccountExecuteInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        executeUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    executeUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        executeUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        executeUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        executeUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
