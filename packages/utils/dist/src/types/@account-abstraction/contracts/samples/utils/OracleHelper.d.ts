import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface OracleHelperInterface extends utils.Interface {
    functions: {
        "cachedPrice()": FunctionFragment;
        "cachedPriceTimestamp()": FunctionFragment;
        "updateCachedPrice(bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cachedPrice" | "cachedPriceTimestamp" | "updateCachedPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "cachedPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "cachedPriceTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCachedPrice", values: [PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "cachedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cachedPriceTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCachedPrice", data: BytesLike): Result;
    events: {
        "TokenPriceUpdated(uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokenPriceUpdated"): EventFragment;
}
export interface TokenPriceUpdatedEventObject {
    currentPrice: BigNumber;
    previousPrice: BigNumber;
    cachedPriceTimestamp: BigNumber;
}
export type TokenPriceUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], TokenPriceUpdatedEventObject>;
export type TokenPriceUpdatedEventFilter = TypedEventFilter<TokenPriceUpdatedEvent>;
export interface OracleHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OracleHelperInterface;
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
        cachedPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<[number]>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cachedPrice(overrides?: CallOverrides): Promise<BigNumber>;
    cachedPriceTimestamp(overrides?: CallOverrides): Promise<number>;
    updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cachedPrice(overrides?: CallOverrides): Promise<BigNumber>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<number>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "TokenPriceUpdated(uint256,uint256,uint256)"(currentPrice?: null, previousPrice?: null, cachedPriceTimestamp?: null): TokenPriceUpdatedEventFilter;
        TokenPriceUpdated(currentPrice?: null, previousPrice?: null, cachedPriceTimestamp?: null): TokenPriceUpdatedEventFilter;
    };
    estimateGas: {
        cachedPrice(overrides?: CallOverrides): Promise<BigNumber>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cachedPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
