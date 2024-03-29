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
export interface TestRulesAccountInterface extends utils.Interface {
    functions: {
        "addStake(address)": FunctionFragment;
        "coin()": FunctionFragment;
        "execSendMessage()": FunctionFragment;
        "postOp(uint8,bytes,uint256,uint256)": FunctionFragment;
        "runRule(string)": FunctionFragment;
        "setCoin(address)": FunctionFragment;
        "setState(uint256)": FunctionFragment;
        "validatePaymasterUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "coin" | "execSendMessage" | "postOp" | "runRule" | "setCoin" | "setState" | "validatePaymasterUserOp" | "validateUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "coin", values?: undefined): string;
    encodeFunctionData(functionFragment: "execSendMessage", values?: undefined): string;
    encodeFunctionData(functionFragment: "postOp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "runRule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCoin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setState", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "validatePaymasterUserOp", values: [
        PackedUserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [
        PackedUserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execSendMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "runRule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatePaymasterUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    events: {
        "State(uint256,uint256)": EventFragment;
        "TestFromValidation()": EventFragment;
        "TestMessage()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "State"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TestFromValidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TestMessage"): EventFragment;
}
export interface StateEventObject {
    oldState: BigNumber;
    newState: BigNumber;
}
export type StateEvent = TypedEvent<[BigNumber, BigNumber], StateEventObject>;
export type StateEventFilter = TypedEventFilter<StateEvent>;
export interface TestFromValidationEventObject {
}
export type TestFromValidationEvent = TypedEvent<[
], TestFromValidationEventObject>;
export type TestFromValidationEventFilter = TypedEventFilter<TestFromValidationEvent>;
export interface TestMessageEventObject {
}
export type TestMessageEvent = TypedEvent<[], TestMessageEventObject>;
export type TestMessageEventFilter = TypedEventFilter<TestMessageEvent>;
export interface TestRulesAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestRulesAccountInterface;
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
        addStake(entryPoint: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        coin(overrides?: CallOverrides): Promise<[string]>;
        execSendMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        postOp(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        runRule(rule: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCoin(_coin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setState(_state: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addStake(entryPoint: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    coin(overrides?: CallOverrides): Promise<string>;
    execSendMessage(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    postOp(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    runRule(rule: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCoin(_coin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setState(_state: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validatePaymasterUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addStake(entryPoint: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        coin(overrides?: CallOverrides): Promise<string>;
        execSendMessage(overrides?: CallOverrides): Promise<void>;
        postOp(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        runRule(rule: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setCoin(_coin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setState(_state: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            context: string;
            deadline: BigNumber;
        }>;
        validateUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "State(uint256,uint256)"(oldState?: null, newState?: null): StateEventFilter;
        State(oldState?: null, newState?: null): StateEventFilter;
        "TestFromValidation()"(): TestFromValidationEventFilter;
        TestFromValidation(): TestFromValidationEventFilter;
        "TestMessage()"(): TestMessageEventFilter;
        TestMessage(): TestMessageEventFilter;
    };
    estimateGas: {
        addStake(entryPoint: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        coin(overrides?: CallOverrides): Promise<BigNumber>;
        execSendMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        postOp(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        runRule(rule: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCoin(_coin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setState(_state: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(entryPoint: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        coin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execSendMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        postOp(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        runRule(rule: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCoin(_coin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setState(_state: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validatePaymasterUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: PackedUserOperationStruct, arg1: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
