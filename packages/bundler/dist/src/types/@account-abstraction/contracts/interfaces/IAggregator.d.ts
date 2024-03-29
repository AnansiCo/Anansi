import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export interface IAggregatorInterface extends utils.Interface {
    functions: {
        "aggregateSignatures((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes)[])": FunctionFragment;
        "validateSignatures((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes)[],bytes)": FunctionFragment;
        "validateUserOpSignature((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregateSignatures" | "validateSignatures" | "validateUserOpSignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregateSignatures", values: [PackedUserOperationStruct[]]): string;
    encodeFunctionData(functionFragment: "validateSignatures", values: [PackedUserOperationStruct[], PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "validateUserOpSignature", values: [PackedUserOperationStruct]): string;
    decodeFunctionResult(functionFragment: "aggregateSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOpSignature", data: BytesLike): Result;
    events: {};
}
export interface IAggregator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAggregatorInterface;
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
        aggregateSignatures(userOps: PackedUserOperationStruct[], overrides?: CallOverrides): Promise<[string] & {
            aggregatedSignature: string;
        }>;
        validateSignatures(userOps: PackedUserOperationStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
        validateUserOpSignature(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<[string] & {
            sigForUserOp: string;
        }>;
    };
    aggregateSignatures(userOps: PackedUserOperationStruct[], overrides?: CallOverrides): Promise<string>;
    validateSignatures(userOps: PackedUserOperationStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    validateUserOpSignature(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        aggregateSignatures(userOps: PackedUserOperationStruct[], overrides?: CallOverrides): Promise<string>;
        validateSignatures(userOps: PackedUserOperationStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        validateUserOpSignature(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        aggregateSignatures(userOps: PackedUserOperationStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        validateSignatures(userOps: PackedUserOperationStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        validateUserOpSignature(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregateSignatures(userOps: PackedUserOperationStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateSignatures(userOps: PackedUserOperationStruct[], signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUserOpSignature(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
