import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface UniswapHelperInterface extends utils.Interface {
    functions: {
        "token()": FunctionFragment;
        "tokenToWei(uint256,uint256)": FunctionFragment;
        "uniswap()": FunctionFragment;
        "weiToToken(uint256,uint256)": FunctionFragment;
        "wrappedNative()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "token" | "tokenToWei" | "uniswap" | "weiToToken" | "wrappedNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenToWei", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "uniswap", values?: undefined): string;
    encodeFunctionData(functionFragment: "weiToToken", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "wrappedNative", values?: undefined): string;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToWei", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weiToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedNative", data: BytesLike): Result;
    events: {
        "UniswapReverted(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UniswapReverted"): EventFragment;
}
export interface UniswapRevertedEventObject {
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOutMin: BigNumber;
}
export type UniswapRevertedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], UniswapRevertedEventObject>;
export type UniswapRevertedEventFilter = TypedEventFilter<UniswapRevertedEvent>;
export interface UniswapHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapHelperInterface;
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
        token(overrides?: CallOverrides): Promise<[string]>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        uniswap(overrides?: CallOverrides): Promise<[string]>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        wrappedNative(overrides?: CallOverrides): Promise<[string]>;
    };
    token(overrides?: CallOverrides): Promise<string>;
    tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    uniswap(overrides?: CallOverrides): Promise<string>;
    weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    wrappedNative(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        token(overrides?: CallOverrides): Promise<string>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        uniswap(overrides?: CallOverrides): Promise<string>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        wrappedNative(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "UniswapReverted(address,address,uint256,uint256)"(tokenIn?: null, tokenOut?: null, amountIn?: null, amountOutMin?: null): UniswapRevertedEventFilter;
        UniswapReverted(tokenIn?: null, tokenOut?: null, amountIn?: null, amountOutMin?: null): UniswapRevertedEventFilter;
    };
    estimateGas: {
        token(overrides?: CallOverrides): Promise<BigNumber>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        uniswap(overrides?: CallOverrides): Promise<BigNumber>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        wrappedNative(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniswap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wrappedNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
