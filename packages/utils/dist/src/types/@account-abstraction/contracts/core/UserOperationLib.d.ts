import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface UserOperationLibInterface extends utils.Interface {
    functions: {
        "PAYMASTER_DATA_OFFSET()": FunctionFragment;
        "PAYMASTER_POSTOP_GAS_OFFSET()": FunctionFragment;
        "PAYMASTER_VALIDATION_GAS_OFFSET()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PAYMASTER_DATA_OFFSET" | "PAYMASTER_POSTOP_GAS_OFFSET" | "PAYMASTER_VALIDATION_GAS_OFFSET"): FunctionFragment;
    encodeFunctionData(functionFragment: "PAYMASTER_DATA_OFFSET", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAYMASTER_POSTOP_GAS_OFFSET", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAYMASTER_VALIDATION_GAS_OFFSET", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PAYMASTER_DATA_OFFSET", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAYMASTER_POSTOP_GAS_OFFSET", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAYMASTER_VALIDATION_GAS_OFFSET", data: BytesLike): Result;
    events: {};
}
export interface UserOperationLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UserOperationLibInterface;
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
        PAYMASTER_DATA_OFFSET(overrides?: CallOverrides): Promise<[BigNumber]>;
        PAYMASTER_POSTOP_GAS_OFFSET(overrides?: CallOverrides): Promise<[BigNumber]>;
        PAYMASTER_VALIDATION_GAS_OFFSET(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    PAYMASTER_DATA_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
    PAYMASTER_POSTOP_GAS_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
    PAYMASTER_VALIDATION_GAS_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        PAYMASTER_DATA_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
        PAYMASTER_POSTOP_GAS_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
        PAYMASTER_VALIDATION_GAS_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        PAYMASTER_DATA_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
        PAYMASTER_POSTOP_GAS_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
        PAYMASTER_VALIDATION_GAS_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PAYMASTER_DATA_OFFSET(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAYMASTER_POSTOP_GAS_OFFSET(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PAYMASTER_VALIDATION_GAS_OFFSET(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
