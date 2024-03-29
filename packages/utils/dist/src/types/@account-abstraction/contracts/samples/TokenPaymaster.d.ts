import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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
export declare namespace TokenPaymaster {
    type TokenPaymasterConfigStruct = {
        priceMarkup: PromiseOrValue<BigNumberish>;
        minEntryPointBalance: PromiseOrValue<BigNumberish>;
        refundPostopCost: PromiseOrValue<BigNumberish>;
        priceMaxAge: PromiseOrValue<BigNumberish>;
    };
    type TokenPaymasterConfigStructOutput = [
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        priceMarkup: BigNumber;
        minEntryPointBalance: BigNumber;
        refundPostopCost: number;
        priceMaxAge: number;
    };
}
export declare namespace OracleHelper {
    type OracleHelperConfigStruct = {
        cacheTimeToLive: PromiseOrValue<BigNumberish>;
        maxOracleRoundAge: PromiseOrValue<BigNumberish>;
        tokenOracle: PromiseOrValue<string>;
        nativeOracle: PromiseOrValue<string>;
        tokenToNativeOracle: PromiseOrValue<boolean>;
        tokenOracleReverse: PromiseOrValue<boolean>;
        nativeOracleReverse: PromiseOrValue<boolean>;
        priceUpdateThreshold: PromiseOrValue<BigNumberish>;
    };
    type OracleHelperConfigStructOutput = [
        number,
        number,
        string,
        string,
        boolean,
        boolean,
        boolean,
        BigNumber
    ] & {
        cacheTimeToLive: number;
        maxOracleRoundAge: number;
        tokenOracle: string;
        nativeOracle: string;
        tokenToNativeOracle: boolean;
        tokenOracleReverse: boolean;
        nativeOracleReverse: boolean;
        priceUpdateThreshold: BigNumber;
    };
}
export declare namespace UniswapHelper {
    type UniswapHelperConfigStruct = {
        minSwapAmount: PromiseOrValue<BigNumberish>;
        uniswapPoolFee: PromiseOrValue<BigNumberish>;
        slippage: PromiseOrValue<BigNumberish>;
    };
    type UniswapHelperConfigStructOutput = [BigNumber, number, number] & {
        minSwapAmount: BigNumber;
        uniswapPoolFee: number;
        slippage: number;
    };
}
export interface TokenPaymasterInterface extends utils.Interface {
    functions: {
        "addStake(uint32)": FunctionFragment;
        "cachedPrice()": FunctionFragment;
        "cachedPriceTimestamp()": FunctionFragment;
        "deposit()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "owner()": FunctionFragment;
        "postOp(uint8,bytes,uint256,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setTokenPaymasterConfig((uint256,uint128,uint48,uint48))": FunctionFragment;
        "setUniswapConfiguration((uint256,uint24,uint8))": FunctionFragment;
        "token()": FunctionFragment;
        "tokenPaymasterConfig()": FunctionFragment;
        "tokenToWei(uint256,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "uniswap()": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "updateCachedPrice(bool)": FunctionFragment;
        "validatePaymasterUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "weiToToken(uint256,uint256)": FunctionFragment;
        "withdrawEth(address,uint256)": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
        "withdrawToken(address,uint256)": FunctionFragment;
        "wrappedNative()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "cachedPrice" | "cachedPriceTimestamp" | "deposit" | "entryPoint" | "getDeposit" | "owner" | "postOp" | "renounceOwnership" | "setTokenPaymasterConfig" | "setUniswapConfiguration" | "token" | "tokenPaymasterConfig" | "tokenToWei" | "transferOwnership" | "uniswap" | "unlockStake" | "updateCachedPrice" | "validatePaymasterUserOp" | "weiToToken" | "withdrawEth" | "withdrawStake" | "withdrawTo" | "withdrawToken" | "wrappedNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cachedPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "cachedPriceTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "postOp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTokenPaymasterConfig", values: [TokenPaymaster.TokenPaymasterConfigStruct]): string;
    encodeFunctionData(functionFragment: "setUniswapConfiguration", values: [UniswapHelper.UniswapHelperConfigStruct]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenPaymasterConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenToWei", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "uniswap", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCachedPrice", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "validatePaymasterUserOp", values: [
        PackedUserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "weiToToken", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawEth", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "wrappedNative", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cachedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cachedPriceTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenPaymasterConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUniswapConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenPaymasterConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenToWei", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCachedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatePaymasterUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weiToToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedNative", data: BytesLike): Result;
    events: {
        "ConfigUpdated(tuple)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Received(address,uint256)": EventFragment;
        "TokenPriceUpdated(uint256,uint256,uint256)": EventFragment;
        "UniswapReverted(address,address,uint256,uint256)": EventFragment;
        "UserOperationSponsored(address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenPriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UniswapReverted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationSponsored"): EventFragment;
}
export interface ConfigUpdatedEventObject {
    tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStructOutput;
}
export type ConfigUpdatedEvent = TypedEvent<[
    TokenPaymaster.TokenPaymasterConfigStructOutput
], ConfigUpdatedEventObject>;
export type ConfigUpdatedEventFilter = TypedEventFilter<ConfigUpdatedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ReceivedEventObject {
    sender: string;
    value: BigNumber;
}
export type ReceivedEvent = TypedEvent<[
    string,
    BigNumber
], ReceivedEventObject>;
export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;
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
export interface UserOperationSponsoredEventObject {
    user: string;
    actualTokenCharge: BigNumber;
    actualGasCost: BigNumber;
    actualTokenPriceWithMarkup: BigNumber;
}
export type UserOperationSponsoredEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], UserOperationSponsoredEventObject>;
export type UserOperationSponsoredEventFilter = TypedEventFilter<UserOperationSponsoredEvent>;
export interface TokenPaymaster extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenPaymasterInterface;
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
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cachedPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<[number]>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, actualUserOpFeePerGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTokenPaymasterConfig(_tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUniswapConfiguration(_uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        tokenPaymasterConfig(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            priceMarkup: BigNumber;
            minEntryPointBalance: BigNumber;
            refundPostopCost: number;
            priceMaxAge: number;
        }>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswap(overrides?: CallOverrides): Promise<[string]>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, maxCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawEth(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wrappedNative(overrides?: CallOverrides): Promise<[string]>;
    };
    addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cachedPrice(overrides?: CallOverrides): Promise<BigNumber>;
    cachedPriceTimestamp(overrides?: CallOverrides): Promise<number>;
    deposit(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, actualUserOpFeePerGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTokenPaymasterConfig(_tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUniswapConfiguration(_uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    tokenPaymasterConfig(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        priceMarkup: BigNumber;
        minEntryPointBalance: BigNumber;
        refundPostopCost: number;
        priceMaxAge: number;
    }>;
    tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswap(overrides?: CallOverrides): Promise<string>;
    unlockStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validatePaymasterUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, maxCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    withdrawEth(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wrappedNative(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cachedPrice(overrides?: CallOverrides): Promise<BigNumber>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<number>;
        deposit(overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, actualUserOpFeePerGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setTokenPaymasterConfig(_tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct, overrides?: CallOverrides): Promise<void>;
        setUniswapConfiguration(_uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        tokenPaymasterConfig(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            priceMarkup: BigNumber;
            minEntryPointBalance: BigNumber;
            refundPostopCost: number;
            priceMaxAge: number;
        }>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        uniswap(overrides?: CallOverrides): Promise<string>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, maxCost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            context: string;
            validationData: BigNumber;
        }>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawEth(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawToken(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        wrappedNative(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ConfigUpdated(tuple)"(tokenPaymasterConfig?: null): ConfigUpdatedEventFilter;
        ConfigUpdated(tokenPaymasterConfig?: null): ConfigUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Received(address,uint256)"(sender?: PromiseOrValue<string> | null, value?: null): ReceivedEventFilter;
        Received(sender?: PromiseOrValue<string> | null, value?: null): ReceivedEventFilter;
        "TokenPriceUpdated(uint256,uint256,uint256)"(currentPrice?: null, previousPrice?: null, cachedPriceTimestamp?: null): TokenPriceUpdatedEventFilter;
        TokenPriceUpdated(currentPrice?: null, previousPrice?: null, cachedPriceTimestamp?: null): TokenPriceUpdatedEventFilter;
        "UniswapReverted(address,address,uint256,uint256)"(tokenIn?: null, tokenOut?: null, amountIn?: null, amountOutMin?: null): UniswapRevertedEventFilter;
        UniswapReverted(tokenIn?: null, tokenOut?: null, amountIn?: null, amountOutMin?: null): UniswapRevertedEventFilter;
        "UserOperationSponsored(address,uint256,uint256,uint256)"(user?: PromiseOrValue<string> | null, actualTokenCharge?: null, actualGasCost?: null, actualTokenPriceWithMarkup?: null): UserOperationSponsoredEventFilter;
        UserOperationSponsored(user?: PromiseOrValue<string> | null, actualTokenCharge?: null, actualGasCost?: null, actualTokenPriceWithMarkup?: null): UserOperationSponsoredEventFilter;
    };
    estimateGas: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cachedPrice(overrides?: CallOverrides): Promise<BigNumber>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, actualUserOpFeePerGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTokenPaymasterConfig(_tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUniswapConfiguration(_uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        tokenPaymasterConfig(overrides?: CallOverrides): Promise<BigNumber>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswap(overrides?: CallOverrides): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, maxCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawEth(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wrappedNative(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cachedPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cachedPriceTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, actualUserOpFeePerGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTokenPaymasterConfig(_tokenPaymasterConfig: TokenPaymaster.TokenPaymasterConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUniswapConfiguration(_uniswapHelperConfig: UniswapHelper.UniswapHelperConfigStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenPaymasterConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenToWei(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateCachedPrice(force: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, maxCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        weiToToken(amount: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawEth(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wrappedNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
