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
export declare namespace IStakeManager {
    type DepositInfoStruct = {
        deposit: PromiseOrValue<BigNumberish>;
        staked: PromiseOrValue<boolean>;
        stake: PromiseOrValue<BigNumberish>;
        unstakeDelaySec: PromiseOrValue<BigNumberish>;
        withdrawTime: PromiseOrValue<BigNumberish>;
    };
    type DepositInfoStructOutput = [
        BigNumber,
        boolean,
        BigNumber,
        number,
        number
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: number;
    };
    type StakeInfoStruct = {
        stake: PromiseOrValue<BigNumberish>;
        unstakeDelaySec: PromiseOrValue<BigNumberish>;
    };
    type StakeInfoStructOutput = [BigNumber, BigNumber] & {
        stake: BigNumber;
        unstakeDelaySec: BigNumber;
    };
}
export declare namespace IEntryPoint {
    type UserOpsPerAggregatorStruct = {
        userOps: PackedUserOperationStruct[];
        aggregator: PromiseOrValue<string>;
        signature: PromiseOrValue<BytesLike>;
    };
    type UserOpsPerAggregatorStructOutput = [
        PackedUserOperationStructOutput[],
        string,
        string
    ] & {
        userOps: PackedUserOperationStructOutput[];
        aggregator: string;
        signature: string;
    };
    type ReturnInfoStruct = {
        preOpGas: PromiseOrValue<BigNumberish>;
        prefund: PromiseOrValue<BigNumberish>;
        accountValidationData: PromiseOrValue<BigNumberish>;
        paymasterValidationData: PromiseOrValue<BigNumberish>;
        paymasterContext: PromiseOrValue<BytesLike>;
    };
    type ReturnInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        preOpGas: BigNumber;
        prefund: BigNumber;
        accountValidationData: BigNumber;
        paymasterValidationData: BigNumber;
        paymasterContext: string;
    };
    type AggregatorStakeInfoStruct = {
        aggregator: PromiseOrValue<string>;
        stakeInfo: IStakeManager.StakeInfoStruct;
    };
    type AggregatorStakeInfoStructOutput = [
        string,
        IStakeManager.StakeInfoStructOutput
    ] & {
        aggregator: string;
        stakeInfo: IStakeManager.StakeInfoStructOutput;
    };
}
export declare namespace IEntryPointSimulations {
    type ExecutionResultStruct = {
        preOpGas: PromiseOrValue<BigNumberish>;
        paid: PromiseOrValue<BigNumberish>;
        accountValidationData: PromiseOrValue<BigNumberish>;
        paymasterValidationData: PromiseOrValue<BigNumberish>;
        targetSuccess: PromiseOrValue<boolean>;
        targetResult: PromiseOrValue<BytesLike>;
    };
    type ExecutionResultStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string
    ] & {
        preOpGas: BigNumber;
        paid: BigNumber;
        accountValidationData: BigNumber;
        paymasterValidationData: BigNumber;
        targetSuccess: boolean;
        targetResult: string;
    };
    type ValidationResultStruct = {
        returnInfo: IEntryPoint.ReturnInfoStruct;
        senderInfo: IStakeManager.StakeInfoStruct;
        factoryInfo: IStakeManager.StakeInfoStruct;
        paymasterInfo: IStakeManager.StakeInfoStruct;
        aggregatorInfo: IEntryPoint.AggregatorStakeInfoStruct;
    };
    type ValidationResultStructOutput = [
        IEntryPoint.ReturnInfoStructOutput,
        IStakeManager.StakeInfoStructOutput,
        IStakeManager.StakeInfoStructOutput,
        IStakeManager.StakeInfoStructOutput,
        IEntryPoint.AggregatorStakeInfoStructOutput
    ] & {
        returnInfo: IEntryPoint.ReturnInfoStructOutput;
        senderInfo: IStakeManager.StakeInfoStructOutput;
        factoryInfo: IStakeManager.StakeInfoStructOutput;
        paymasterInfo: IStakeManager.StakeInfoStructOutput;
        aggregatorInfo: IEntryPoint.AggregatorStakeInfoStructOutput;
    };
}
export interface IEntryPointSimulationsInterface extends utils.Interface {
    functions: {
        "addStake(uint32)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "delegateAndRevert(address,bytes)": FunctionFragment;
        "depositTo(address)": FunctionFragment;
        "getDepositInfo(address)": FunctionFragment;
        "getNonce(address,uint192)": FunctionFragment;
        "getSenderAddress(bytes)": FunctionFragment;
        "getUserOpHash((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes))": FunctionFragment;
        "handleAggregatedOps(((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes)[],address,bytes)[],address)": FunctionFragment;
        "handleOps((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes)[],address)": FunctionFragment;
        "incrementNonce(uint192)": FunctionFragment;
        "simulateHandleOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),address,bytes)": FunctionFragment;
        "simulateValidation((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes))": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "balanceOf" | "delegateAndRevert" | "depositTo" | "getDepositInfo" | "getNonce" | "getSenderAddress" | "getUserOpHash" | "handleAggregatedOps" | "handleOps" | "incrementNonce" | "simulateHandleOp" | "simulateValidation" | "unlockStake" | "withdrawStake" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "delegateAndRevert", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDepositInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSenderAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getUserOpHash", values: [PackedUserOperationStruct]): string;
    encodeFunctionData(functionFragment: "handleAggregatedOps", values: [IEntryPoint.UserOpsPerAggregatorStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "handleOps", values: [PackedUserOperationStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "incrementNonce", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "simulateHandleOp", values: [
        PackedUserOperationStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "simulateValidation", values: [PackedUserOperationStruct]): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateAndRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSenderAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserOpHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleAggregatedOps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleOps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateHandleOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateValidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "AccountDeployed(bytes32,address,address,address)": EventFragment;
        "BeforeExecution()": EventFragment;
        "Deposited(address,uint256)": EventFragment;
        "PostOpRevertReason(bytes32,address,uint256,bytes)": EventFragment;
        "SignatureAggregatorChanged(address)": EventFragment;
        "StakeLocked(address,uint256,uint256)": EventFragment;
        "StakeUnlocked(address,uint256)": EventFragment;
        "StakeWithdrawn(address,address,uint256)": EventFragment;
        "UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)": EventFragment;
        "UserOperationPrefundTooLow(bytes32,address,uint256)": EventFragment;
        "UserOperationRevertReason(bytes32,address,uint256,bytes)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeforeExecution"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PostOpRevertReason"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignatureAggregatorChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationPrefundTooLow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationRevertReason"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export interface AccountDeployedEventObject {
    userOpHash: string;
    sender: string;
    factory: string;
    paymaster: string;
}
export type AccountDeployedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], AccountDeployedEventObject>;
export type AccountDeployedEventFilter = TypedEventFilter<AccountDeployedEvent>;
export interface BeforeExecutionEventObject {
}
export type BeforeExecutionEvent = TypedEvent<[], BeforeExecutionEventObject>;
export type BeforeExecutionEventFilter = TypedEventFilter<BeforeExecutionEvent>;
export interface DepositedEventObject {
    account: string;
    totalDeposit: BigNumber;
}
export type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], DepositedEventObject>;
export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export interface PostOpRevertReasonEventObject {
    userOpHash: string;
    sender: string;
    nonce: BigNumber;
    revertReason: string;
}
export type PostOpRevertReasonEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], PostOpRevertReasonEventObject>;
export type PostOpRevertReasonEventFilter = TypedEventFilter<PostOpRevertReasonEvent>;
export interface SignatureAggregatorChangedEventObject {
    aggregator: string;
}
export type SignatureAggregatorChangedEvent = TypedEvent<[
    string
], SignatureAggregatorChangedEventObject>;
export type SignatureAggregatorChangedEventFilter = TypedEventFilter<SignatureAggregatorChangedEvent>;
export interface StakeLockedEventObject {
    account: string;
    totalStaked: BigNumber;
    unstakeDelaySec: BigNumber;
}
export type StakeLockedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StakeLockedEventObject>;
export type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;
export interface StakeUnlockedEventObject {
    account: string;
    withdrawTime: BigNumber;
}
export type StakeUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], StakeUnlockedEventObject>;
export type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;
export interface StakeWithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export type StakeWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StakeWithdrawnEventObject>;
export type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;
export interface UserOperationEventEventObject {
    userOpHash: string;
    sender: string;
    paymaster: string;
    nonce: BigNumber;
    success: boolean;
    actualGasCost: BigNumber;
    actualGasUsed: BigNumber;
}
export type UserOperationEventEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
], UserOperationEventEventObject>;
export type UserOperationEventEventFilter = TypedEventFilter<UserOperationEventEvent>;
export interface UserOperationPrefundTooLowEventObject {
    userOpHash: string;
    sender: string;
    nonce: BigNumber;
}
export type UserOperationPrefundTooLowEvent = TypedEvent<[
    string,
    string,
    BigNumber
], UserOperationPrefundTooLowEventObject>;
export type UserOperationPrefundTooLowEventFilter = TypedEventFilter<UserOperationPrefundTooLowEvent>;
export interface UserOperationRevertReasonEventObject {
    userOpHash: string;
    sender: string;
    nonce: BigNumber;
    revertReason: string;
}
export type UserOperationRevertReasonEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], UserOperationRevertReasonEventObject>;
export type UserOperationRevertReasonEventFilter = TypedEventFilter<UserOperationRevertReasonEvent>;
export interface WithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface IEntryPointSimulations extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEntryPointSimulationsInterface;
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
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        delegateAndRevert(target: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IStakeManager.DepositInfoStructOutput
        ] & {
            info: IStakeManager.DepositInfoStructOutput;
        }>;
        getNonce(sender: PromiseOrValue<string>, key: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getUserOpHash(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<[string]>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        handleOps(ops: PackedUserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        incrementNonce(key: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        simulateHandleOp(op: PackedUserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        simulateValidation(userOp: PackedUserOperationStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    delegateAndRevert(target: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
    getNonce(sender: PromiseOrValue<string>, key: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getUserOpHash(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<string>;
    handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    handleOps(ops: PackedUserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    incrementNonce(key: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    simulateHandleOp(op: PackedUserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    simulateValidation(userOp: PackedUserOperationStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlockStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegateAndRevert(target: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        depositTo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
        getNonce(sender: PromiseOrValue<string>, key: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getUserOpHash(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<string>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        handleOps(ops: PackedUserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        incrementNonce(key: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        simulateHandleOp(op: PackedUserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IEntryPointSimulations.ExecutionResultStructOutput>;
        simulateValidation(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<IEntryPointSimulations.ValidationResultStructOutput>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccountDeployed(bytes32,address,address,address)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, factory?: null, paymaster?: null): AccountDeployedEventFilter;
        AccountDeployed(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, factory?: null, paymaster?: null): AccountDeployedEventFilter;
        "BeforeExecution()"(): BeforeExecutionEventFilter;
        BeforeExecution(): BeforeExecutionEventFilter;
        "Deposited(address,uint256)"(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        Deposited(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        "PostOpRevertReason(bytes32,address,uint256,bytes)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): PostOpRevertReasonEventFilter;
        PostOpRevertReason(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): PostOpRevertReasonEventFilter;
        "SignatureAggregatorChanged(address)"(aggregator?: PromiseOrValue<string> | null): SignatureAggregatorChangedEventFilter;
        SignatureAggregatorChanged(aggregator?: PromiseOrValue<string> | null): SignatureAggregatorChangedEventFilter;
        "StakeLocked(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, totalStaked?: null, unstakeDelaySec?: null): StakeLockedEventFilter;
        StakeLocked(account?: PromiseOrValue<string> | null, totalStaked?: null, unstakeDelaySec?: null): StakeLockedEventFilter;
        "StakeUnlocked(address,uint256)"(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        StakeUnlocked(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        "StakeWithdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        StakeWithdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        "UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, paymaster?: PromiseOrValue<string> | null, nonce?: null, success?: null, actualGasCost?: null, actualGasUsed?: null): UserOperationEventEventFilter;
        UserOperationEvent(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, paymaster?: PromiseOrValue<string> | null, nonce?: null, success?: null, actualGasCost?: null, actualGasUsed?: null): UserOperationEventEventFilter;
        "UserOperationPrefundTooLow(bytes32,address,uint256)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null): UserOperationPrefundTooLowEventFilter;
        UserOperationPrefundTooLow(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null): UserOperationPrefundTooLowEventFilter;
        "UserOperationRevertReason(bytes32,address,uint256,bytes)"(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): UserOperationRevertReasonEventFilter;
        UserOperationRevertReason(userOpHash?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): UserOperationRevertReasonEventFilter;
        "Withdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
        Withdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegateAndRevert(target: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(sender: PromiseOrValue<string>, key: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getUserOpHash(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        handleOps(ops: PackedUserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        incrementNonce(key: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        simulateHandleOp(op: PackedUserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        simulateValidation(userOp: PackedUserOperationStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegateAndRevert(target: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(sender: PromiseOrValue<string>, key: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getUserOpHash(userOp: PackedUserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        handleOps(ops: PackedUserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        incrementNonce(key: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        simulateHandleOp(op: PackedUserOperationStruct, target: PromiseOrValue<string>, targetCallData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        simulateValidation(userOp: PackedUserOperationStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
