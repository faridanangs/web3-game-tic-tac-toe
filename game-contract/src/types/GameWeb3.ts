/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GameWeb3Interface extends Interface {
  getFunction(
    nameOrSignature: "createGame" | "joinGame" | "makeMove"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreateGameEvent"
      | "GameDrawEvent"
      | "JoinGameEvent"
      | "LeaveGameEvent"
      | "MoveMadeEvent"
      | "Transfer"
      | "WinnerGameEvent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createGame",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "joinGame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "makeMove",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "createGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeMove", data: BytesLike): Result;
}

export namespace CreateGameEventEvent {
  export type InputTuple = [gameId: BigNumberish, player1: AddressLike];
  export type OutputTuple = [gameId: bigint, player1: string];
  export interface OutputObject {
    gameId: bigint;
    player1: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameDrawEventEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player1: AddressLike,
    player2: AddressLike
  ];
  export type OutputTuple = [gameId: bigint, player1: string, player2: string];
  export interface OutputObject {
    gameId: bigint;
    player1: string;
    player2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace JoinGameEventEvent {
  export type InputTuple = [gameId: BigNumberish, player2: AddressLike];
  export type OutputTuple = [gameId: bigint, player2: string];
  export interface OutputObject {
    gameId: bigint;
    player2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LeaveGameEventEvent {
  export type InputTuple = [gameId: BigNumberish, player: BigNumberish];
  export type OutputTuple = [gameId: bigint, player: bigint];
  export interface OutputObject {
    gameId: bigint;
    player: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MoveMadeEventEvent {
  export type InputTuple = [gameId: BigNumberish, state: BigNumberish];
  export type OutputTuple = [gameId: bigint, state: bigint];
  export interface OutputObject {
    gameId: bigint;
    state: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WinnerGameEventEvent {
  export type InputTuple = [gameId: BigNumberish, player: BigNumberish];
  export type OutputTuple = [gameId: bigint, player: bigint];
  export interface OutputObject {
    gameId: bigint;
    player: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GameWeb3 extends BaseContract {
  connect(runner?: ContractRunner | null): GameWeb3;
  waitForDeployment(): Promise<this>;

  interface: GameWeb3Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createGame: TypedContractMethod<[], [bigint], "payable">;

  joinGame: TypedContractMethod<[gameId: BigNumberish], [bigint], "payable">;

  makeMove: TypedContractMethod<
    [gameId: BigNumberish, row: BigNumberish, col: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createGame"
  ): TypedContractMethod<[], [bigint], "payable">;
  getFunction(
    nameOrSignature: "joinGame"
  ): TypedContractMethod<[gameId: BigNumberish], [bigint], "payable">;
  getFunction(
    nameOrSignature: "makeMove"
  ): TypedContractMethod<
    [gameId: BigNumberish, row: BigNumberish, col: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CreateGameEvent"
  ): TypedContractEvent<
    CreateGameEventEvent.InputTuple,
    CreateGameEventEvent.OutputTuple,
    CreateGameEventEvent.OutputObject
  >;
  getEvent(
    key: "GameDrawEvent"
  ): TypedContractEvent<
    GameDrawEventEvent.InputTuple,
    GameDrawEventEvent.OutputTuple,
    GameDrawEventEvent.OutputObject
  >;
  getEvent(
    key: "JoinGameEvent"
  ): TypedContractEvent<
    JoinGameEventEvent.InputTuple,
    JoinGameEventEvent.OutputTuple,
    JoinGameEventEvent.OutputObject
  >;
  getEvent(
    key: "LeaveGameEvent"
  ): TypedContractEvent<
    LeaveGameEventEvent.InputTuple,
    LeaveGameEventEvent.OutputTuple,
    LeaveGameEventEvent.OutputObject
  >;
  getEvent(
    key: "MoveMadeEvent"
  ): TypedContractEvent<
    MoveMadeEventEvent.InputTuple,
    MoveMadeEventEvent.OutputTuple,
    MoveMadeEventEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "WinnerGameEvent"
  ): TypedContractEvent<
    WinnerGameEventEvent.InputTuple,
    WinnerGameEventEvent.OutputTuple,
    WinnerGameEventEvent.OutputObject
  >;

  filters: {
    "CreateGameEvent(uint256,address)": TypedContractEvent<
      CreateGameEventEvent.InputTuple,
      CreateGameEventEvent.OutputTuple,
      CreateGameEventEvent.OutputObject
    >;
    CreateGameEvent: TypedContractEvent<
      CreateGameEventEvent.InputTuple,
      CreateGameEventEvent.OutputTuple,
      CreateGameEventEvent.OutputObject
    >;

    "GameDrawEvent(uint256,address,address)": TypedContractEvent<
      GameDrawEventEvent.InputTuple,
      GameDrawEventEvent.OutputTuple,
      GameDrawEventEvent.OutputObject
    >;
    GameDrawEvent: TypedContractEvent<
      GameDrawEventEvent.InputTuple,
      GameDrawEventEvent.OutputTuple,
      GameDrawEventEvent.OutputObject
    >;

    "JoinGameEvent(uint256,address)": TypedContractEvent<
      JoinGameEventEvent.InputTuple,
      JoinGameEventEvent.OutputTuple,
      JoinGameEventEvent.OutputObject
    >;
    JoinGameEvent: TypedContractEvent<
      JoinGameEventEvent.InputTuple,
      JoinGameEventEvent.OutputTuple,
      JoinGameEventEvent.OutputObject
    >;

    "LeaveGameEvent(uint256,uint8)": TypedContractEvent<
      LeaveGameEventEvent.InputTuple,
      LeaveGameEventEvent.OutputTuple,
      LeaveGameEventEvent.OutputObject
    >;
    LeaveGameEvent: TypedContractEvent<
      LeaveGameEventEvent.InputTuple,
      LeaveGameEventEvent.OutputTuple,
      LeaveGameEventEvent.OutputObject
    >;

    "MoveMadeEvent(uint256,uint8)": TypedContractEvent<
      MoveMadeEventEvent.InputTuple,
      MoveMadeEventEvent.OutputTuple,
      MoveMadeEventEvent.OutputObject
    >;
    MoveMadeEvent: TypedContractEvent<
      MoveMadeEventEvent.InputTuple,
      MoveMadeEventEvent.OutputTuple,
      MoveMadeEventEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;

    "WinnerGameEvent(uint256,uint8)": TypedContractEvent<
      WinnerGameEventEvent.InputTuple,
      WinnerGameEventEvent.OutputTuple,
      WinnerGameEventEvent.OutputObject
    >;
    WinnerGameEvent: TypedContractEvent<
      WinnerGameEventEvent.InputTuple,
      WinnerGameEventEvent.OutputTuple,
      WinnerGameEventEvent.OutputObject
    >;
  };
}
