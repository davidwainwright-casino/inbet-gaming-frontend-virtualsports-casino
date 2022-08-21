import * as $protobuf from "protobufjs";
/** BetStatus enum. */
export enum BetStatus {
    BS_undefined = 0,
    BS_denied = 1,
    BS_accepted = 2,
    BS_user_canceled = 3,
    BS_calculated = 4,
    BS_want_cancel = 5
}

/** SessionError enum. */
export enum SessionError {
    SE_undefined = 0,
    SE_balance_not_available = 1,
    SE_broken_session = 2
}

/** Properties of a Timers. */
export interface ITimers {

    /** Timers begin */
    begin?: (number|Long|null);

    /** Timers current */
    current?: (number|Long|null);

    /** Timers end */
    end?: (number|Long|null);
}

/** Represents a Timers. */
export class Timers implements ITimers {

    /**
     * Constructs a new Timers.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimers);

    /** Timers begin. */
    public begin: (number|Long);

    /** Timers current. */
    public current: (number|Long);

    /** Timers end. */
    public end: (number|Long);

    /**
     * Creates a new Timers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Timers instance
     */
    public static create(properties?: ITimers): Timers;

    /**
     * Encodes the specified Timers message. Does not implicitly {@link Timers.verify|verify} messages.
     * @param message Timers message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimers, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timers message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Timers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timers;
}

/** Properties of a Bet. */
export interface IBet {

    /** Bet betId */
    betId?: (string|null);

    /** Bet betAmount */
    betAmount?: (number|Long|null);

    /** Bet payAmount */
    payAmount?: (number|Long|null);

    /** Bet status */
    status?: (BetStatus|null);

    /** Bet gameId */
    gameId?: (number|null);

    /** Bet bet888 */
    bet888?: (IBet888|null);

    /** Bet bet7xx */
    bet7xx?: (IBet7XX|null);

    /** Bet bet886 */
    bet886?: (IBet886|null);

    /** Bet bet1009 */
    bet1009?: (IBet1XXX|null);

    /** Bet bet1013 */
    bet1013?: (IBet1013|null);

    /** Bet bet99920 */
    bet99920?: (IBet999XX|null);

    /** Bet bet1204 */
    bet1204?: (IBet1XXX|null);

    /** Bet bet99911 */
    bet99911?: (IBet999XX|null);

    /** Bet bet99914 */
    bet99914?: (IBet999XX|null);

    /** Bet bet1024 */
    bet1024?: (IBet1024|null);

    /** Bet bet4001 */
    bet4001?: (IBet4001|null);

    /** Bet bet2106 */
    bet2106?: (IBet7XX|null);

    /** Bet bet2108 */
    bet2108?: (IBet7XX|null);

    /** Bet bet2116 */
    bet2116?: (IBet7XX|null);

    /** Bet bet2118 */
    bet2118?: (IBet7XX|null);

    /** Bet bet2120 */
    bet2120?: (IBet7XX|null);

    /** Bet bet2121 */
    bet2121?: (IBet7XX|null);

    /** Bet bet2122 */
    bet2122?: (IBet7XX|null);

    /** Bet bet2123 */
    bet2123?: (IBet7XX|null);

    /** Bet bet1018 */
    bet1018?: (IBet1XXX|null);

    /** Bet bet1019 */
    bet1019?: (IBet1XXX|null);

    /** Bet bet99927 */
    bet99927?: (IBet999XX|null);

    /** Bet createdAt */
    createdAt?: (number|Long|null);
}

/** Represents a Bet. */
export class Bet implements IBet {

    /**
     * Constructs a new Bet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet);

    /** Bet betId. */
    public betId: string;

    /** Bet betAmount. */
    public betAmount: (number|Long);

    /** Bet payAmount. */
    public payAmount: (number|Long);

    /** Bet status. */
    public status: BetStatus;

    /** Bet gameId. */
    public gameId: number;

    /** Bet bet888. */
    public bet888?: (IBet888|null);

    /** Bet bet7xx. */
    public bet7xx?: (IBet7XX|null);

    /** Bet bet886. */
    public bet886?: (IBet886|null);

    /** Bet bet1009. */
    public bet1009?: (IBet1XXX|null);

    /** Bet bet1013. */
    public bet1013?: (IBet1013|null);

    /** Bet bet99920. */
    public bet99920?: (IBet999XX|null);

    /** Bet bet1204. */
    public bet1204?: (IBet1XXX|null);

    /** Bet bet99911. */
    public bet99911?: (IBet999XX|null);

    /** Bet bet99914. */
    public bet99914?: (IBet999XX|null);

    /** Bet bet1024. */
    public bet1024?: (IBet1024|null);

    /** Bet bet4001. */
    public bet4001?: (IBet4001|null);

    /** Bet bet2106. */
    public bet2106?: (IBet7XX|null);

    /** Bet bet2108. */
    public bet2108?: (IBet7XX|null);

    /** Bet bet2116. */
    public bet2116?: (IBet7XX|null);

    /** Bet bet2118. */
    public bet2118?: (IBet7XX|null);

    /** Bet bet2120. */
    public bet2120?: (IBet7XX|null);

    /** Bet bet2121. */
    public bet2121?: (IBet7XX|null);

    /** Bet bet2122. */
    public bet2122?: (IBet7XX|null);

    /** Bet bet2123. */
    public bet2123?: (IBet7XX|null);

    /** Bet bet1018. */
    public bet1018?: (IBet1XXX|null);

    /** Bet bet1019. */
    public bet1019?: (IBet1XXX|null);

    /** Bet bet99927. */
    public bet99927?: (IBet999XX|null);

    /** Bet createdAt. */
    public createdAt: (number|Long);

    /**
     * Creates a new Bet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet instance
     */
    public static create(properties?: IBet): Bet;

    /**
     * Encodes the specified Bet message. Does not implicitly {@link Bet.verify|verify} messages.
     * @param message Bet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet;
}

/** Properties of a Device. */
export interface IDevice {

    /** Device uuid */
    uuid?: (string|null);

    /** Device billing */
    billing?: (string|null);

    /** Device currency */
    currency?: (string|null);

    /** Device balance */
    balance?: (number|Long|null);

    /** Device sessionId */
    sessionId?: (string|null);

    /** Device billingSession */
    billingSession?: (string|null);
}

/** Represents a Device. */
export class Device implements IDevice {

    /**
     * Constructs a new Device.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDevice);

    /** Device uuid. */
    public uuid: string;

    /** Device billing. */
    public billing: string;

    /** Device currency. */
    public currency: string;

    /** Device balance. */
    public balance: (number|Long);

    /** Device sessionId. */
    public sessionId: string;

    /** Device billingSession. */
    public billingSession: string;

    /**
     * Creates a new Device instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Device instance
     */
    public static create(properties?: IDevice): Device;

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @param message Device message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Device;
}

/** Properties of a Request. */
export interface IRequest {

    /** Request device */
    device?: (IDevice|null);

    /** Request bets */
    bets?: (IBet[]|null);

    /** Request hash */
    hash?: (string|null);

    /** Request gamesIds */
    gamesIds?: (number[]|null);
}

/** Represents a Request. */
export class Request implements IRequest {

    /**
     * Constructs a new Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequest);

    /** Request device. */
    public device?: (IDevice|null);

    /** Request bets. */
    public bets: IBet[];

    /** Request hash. */
    public hash: string;

    /** Request gamesIds. */
    public gamesIds: number[];

    /**
     * Creates a new Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Request instance
     */
    public static create(properties?: IRequest): Request;

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @param message Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Request;
}

/** Properties of a GameStateCommonFields. */
export interface IGameStateCommonFields {

    /** GameStateCommonFields maxBet */
    maxBet?: (number|Long|null);

    /** GameStateCommonFields slider */
    slider?: ((number|Long)[]|null);

    /** GameStateCommonFields bettingPreBlocked */
    bettingPreBlocked?: (boolean|null);

    /** GameStateCommonFields bettingBlocked */
    bettingBlocked?: (boolean|null);

    /** GameStateCommonFields lastRoundStats */
    lastRoundStats?: (GameStateCommonFields.ILastRoundStats|null);
}

/** Represents a GameStateCommonFields. */
export class GameStateCommonFields implements IGameStateCommonFields {

    /**
     * Constructs a new GameStateCommonFields.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameStateCommonFields);

    /** GameStateCommonFields maxBet. */
    public maxBet: (number|Long);

    /** GameStateCommonFields slider. */
    public slider: (number|Long)[];

    /** GameStateCommonFields bettingPreBlocked. */
    public bettingPreBlocked: boolean;

    /** GameStateCommonFields bettingBlocked. */
    public bettingBlocked: boolean;

    /** GameStateCommonFields lastRoundStats. */
    public lastRoundStats?: (GameStateCommonFields.ILastRoundStats|null);

    /**
     * Creates a new GameStateCommonFields instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameStateCommonFields instance
     */
    public static create(properties?: IGameStateCommonFields): GameStateCommonFields;

    /**
     * Encodes the specified GameStateCommonFields message. Does not implicitly {@link GameStateCommonFields.verify|verify} messages.
     * @param message GameStateCommonFields message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameStateCommonFields, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameStateCommonFields message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameStateCommonFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStateCommonFields;
}

export namespace GameStateCommonFields {

    /** Properties of a LastRoundStats. */
    interface ILastRoundStats {

        /** LastRoundStats roundId */
        roundId?: (number|Long|null);

        /** LastRoundStats beginTime */
        beginTime?: (number|Long|null);

        /** LastRoundStats balanceBegin */
        balanceBegin?: (number|Long|null);

        /** LastRoundStats balanceEnd */
        balanceEnd?: (number|Long|null);

        /** LastRoundStats totalBet */
        totalBet?: (number|Long|null);

        /** LastRoundStats totalWin */
        totalWin?: (number|Long|null);
    }

    /** Represents a LastRoundStats. */
    class LastRoundStats implements ILastRoundStats {

        /**
         * Constructs a new LastRoundStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameStateCommonFields.ILastRoundStats);

        /** LastRoundStats roundId. */
        public roundId: (number|Long);

        /** LastRoundStats beginTime. */
        public beginTime: (number|Long);

        /** LastRoundStats balanceBegin. */
        public balanceBegin: (number|Long);

        /** LastRoundStats balanceEnd. */
        public balanceEnd: (number|Long);

        /** LastRoundStats totalBet. */
        public totalBet: (number|Long);

        /** LastRoundStats totalWin. */
        public totalWin: (number|Long);

        /**
         * Creates a new LastRoundStats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LastRoundStats instance
         */
        public static create(properties?: GameStateCommonFields.ILastRoundStats): GameStateCommonFields.LastRoundStats;

        /**
         * Encodes the specified LastRoundStats message. Does not implicitly {@link GameStateCommonFields.LastRoundStats.verify|verify} messages.
         * @param message LastRoundStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameStateCommonFields.ILastRoundStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LastRoundStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LastRoundStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStateCommonFields.LastRoundStats;
    }
}

/** Properties of a Response. */
export interface IResponse {

    /** Response bets */
    bets?: (IBet[]|null);

    /** Response device */
    device?: (IDevice|null);

    /** Response maxBet */
    maxBet?: (number|Long|null);

    /** Response slider */
    slider?: ((number|Long)[]|null);

    /** Response error */
    error?: (SessionError|null);

    /** Response hash */
    hash?: (string|null);

    /** Response bettingBlocked */
    bettingBlocked?: (boolean|null);

    /** Response bettingPreBlocked */
    bettingPreBlocked?: (boolean|null);

    /** Response gamestate888 */
    gamestate888?: (IGameState888|null);

    /** Response gamestate7xx */
    gamestate7xx?: (IGameState7XX|null);

    /** Response gamestate886 */
    gamestate886?: (IGameState886|null);

    /** Response gamestate1009 */
    gamestate1009?: (IGameState1XXX|null);

    /** Response gamestate1013 */
    gamestate1013?: (IGameState1013|null);

    /** Response gamestate99920 */
    gamestate99920?: (IGameState999XX|null);

    /** Response gamestate1204 */
    gamestate1204?: (IGameState1XXX|null);

    /** Response gamestate99911 */
    gamestate99911?: (IGameState999XX|null);

    /** Response gamestate99914 */
    gamestate99914?: (IGameState999XX|null);

    /** Response gamestate1024 */
    gamestate1024?: (IGameState1024|null);

    /** Response gamestate4001 */
    gamestate4001?: (IGameState4001|null);

    /** Response gamestate2106 */
    gamestate2106?: (IGameState7XX|null);

    /** Response gamestate2108 */
    gamestate2108?: (IGameState7XX|null);

    /** Response gamestate2116 */
    gamestate2116?: (IGameState7XX|null);

    /** Response gamestate2118 */
    gamestate2118?: (IGameState7XX|null);

    /** Response gamestate2120 */
    gamestate2120?: (IGameState7XX|null);

    /** Response gamestate2121 */
    gamestate2121?: (IGameState7XX|null);

    /** Response gamestate2122 */
    gamestate2122?: (IGameState7XX|null);

    /** Response gamestate2123 */
    gamestate2123?: (IGameState7XX|null);

    /** Response gamestate1018 */
    gamestate1018?: (IGameState1XXX|null);

    /** Response gamestate1019 */
    gamestate1019?: (IGameState1XXX|null);

    /** Response gamestate99927 */
    gamestate99927?: (IGameState999XX|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response bets. */
    public bets: IBet[];

    /** Response device. */
    public device?: (IDevice|null);

    /** Response maxBet. */
    public maxBet: (number|Long);

    /** Response slider. */
    public slider: (number|Long)[];

    /** Response error. */
    public error: SessionError;

    /** Response hash. */
    public hash: string;

    /** Response bettingBlocked. */
    public bettingBlocked: boolean;

    /** Response bettingPreBlocked. */
    public bettingPreBlocked: boolean;

    /** Response gamestate888. */
    public gamestate888?: (IGameState888|null);

    /** Response gamestate7xx. */
    public gamestate7xx?: (IGameState7XX|null);

    /** Response gamestate886. */
    public gamestate886?: (IGameState886|null);

    /** Response gamestate1009. */
    public gamestate1009?: (IGameState1XXX|null);

    /** Response gamestate1013. */
    public gamestate1013?: (IGameState1013|null);

    /** Response gamestate99920. */
    public gamestate99920?: (IGameState999XX|null);

    /** Response gamestate1204. */
    public gamestate1204?: (IGameState1XXX|null);

    /** Response gamestate99911. */
    public gamestate99911?: (IGameState999XX|null);

    /** Response gamestate99914. */
    public gamestate99914?: (IGameState999XX|null);

    /** Response gamestate1024. */
    public gamestate1024?: (IGameState1024|null);

    /** Response gamestate4001. */
    public gamestate4001?: (IGameState4001|null);

    /** Response gamestate2106. */
    public gamestate2106?: (IGameState7XX|null);

    /** Response gamestate2108. */
    public gamestate2108?: (IGameState7XX|null);

    /** Response gamestate2116. */
    public gamestate2116?: (IGameState7XX|null);

    /** Response gamestate2118. */
    public gamestate2118?: (IGameState7XX|null);

    /** Response gamestate2120. */
    public gamestate2120?: (IGameState7XX|null);

    /** Response gamestate2121. */
    public gamestate2121?: (IGameState7XX|null);

    /** Response gamestate2122. */
    public gamestate2122?: (IGameState7XX|null);

    /** Response gamestate2123. */
    public gamestate2123?: (IGameState7XX|null);

    /** Response gamestate1018. */
    public gamestate1018?: (IGameState1XXX|null);

    /** Response gamestate1019. */
    public gamestate1019?: (IGameState1XXX|null);

    /** Response gamestate99927. */
    public gamestate99927?: (IGameState999XX|null);

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;
}

/** Properties of a PlayingCard. */
export interface IPlayingCard {

    /** PlayingCard suit */
    suit?: (PlayingCard.Suit|null);

    /** PlayingCard value */
    value?: (PlayingCard.Value|null);
}

/** Represents a PlayingCard. */
export class PlayingCard implements IPlayingCard {

    /**
     * Constructs a new PlayingCard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayingCard);

    /** PlayingCard suit. */
    public suit: PlayingCard.Suit;

    /** PlayingCard value. */
    public value: PlayingCard.Value;

    /**
     * Creates a new PlayingCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayingCard instance
     */
    public static create(properties?: IPlayingCard): PlayingCard;

    /**
     * Encodes the specified PlayingCard message. Does not implicitly {@link PlayingCard.verify|verify} messages.
     * @param message PlayingCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayingCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayingCard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayingCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayingCard;
}

export namespace PlayingCard {

    /** Suit enum. */
    enum Suit {
        Spades = 0,
        Clubs = 1,
        Diamonds = 2,
        Hearts = 3
    }

    /** Value enum. */
    enum Value {
        V2 = 0,
        V3 = 1,
        V4 = 2,
        V5 = 3,
        V6 = 4,
        V7 = 5,
        V8 = 6,
        V9 = 7,
        V10 = 8,
        Jack = 9,
        Queen = 10,
        King = 11,
        Ace = 12
    }
}

/** Properties of a RouletteBet. */
export interface IRouletteBet {

    /** RouletteBet type */
    type?: (RouletteBet.Type|null);

    /** RouletteBet alias */
    alias?: (RouletteBet.Alias|null);

    /** RouletteBet sectorList */
    sectorList?: (number[]|null);
}

/** Represents a RouletteBet. */
export class RouletteBet implements IRouletteBet {

    /**
     * Constructs a new RouletteBet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRouletteBet);

    /** RouletteBet type. */
    public type: RouletteBet.Type;

    /** RouletteBet alias. */
    public alias: RouletteBet.Alias;

    /** RouletteBet sectorList. */
    public sectorList: number[];

    /**
     * Creates a new RouletteBet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RouletteBet instance
     */
    public static create(properties?: IRouletteBet): RouletteBet;

    /**
     * Encodes the specified RouletteBet message. Does not implicitly {@link RouletteBet.verify|verify} messages.
     * @param message RouletteBet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRouletteBet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RouletteBet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RouletteBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RouletteBet;
}

export namespace RouletteBet {

    /** Type enum. */
    enum Type {
        SECTOR_LIST = 0,
        ALIAS = 1
    }

    /** Alias enum. */
    enum Alias {
        red = 0,
        black = 1,
        big = 2,
        small = 3,
        odd = 4,
        even = 5,
        col1 = 6,
        col2 = 7,
        col3 = 8,
        row1 = 9,
        row2 = 10,
        row3 = 11
    }
}

/** Properties of a RouletteMaxBets. */
export interface IRouletteMaxBets {

    /** RouletteMaxBets N1 */
    N1?: (number|null);

    /** RouletteMaxBets N2 */
    N2?: (number|null);

    /** RouletteMaxBets N3 */
    N3?: (number|null);

    /** RouletteMaxBets N4 */
    N4?: (number|null);

    /** RouletteMaxBets N6 */
    N6?: (number|null);

    /** RouletteMaxBets red */
    red?: (number|null);

    /** RouletteMaxBets black */
    black?: (number|null);

    /** RouletteMaxBets big */
    big?: (number|null);

    /** RouletteMaxBets small */
    small?: (number|null);

    /** RouletteMaxBets odd */
    odd?: (number|null);

    /** RouletteMaxBets even */
    even?: (number|null);

    /** RouletteMaxBets col1 */
    col1?: (number|null);

    /** RouletteMaxBets col2 */
    col2?: (number|null);

    /** RouletteMaxBets col3 */
    col3?: (number|null);

    /** RouletteMaxBets row1 */
    row1?: (number|null);

    /** RouletteMaxBets row2 */
    row2?: (number|null);

    /** RouletteMaxBets row3 */
    row3?: (number|null);

    /** RouletteMaxBets allRound */
    allRound?: (number|null);
}

/** Represents a RouletteMaxBets. */
export class RouletteMaxBets implements IRouletteMaxBets {

    /**
     * Constructs a new RouletteMaxBets.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRouletteMaxBets);

    /** RouletteMaxBets N1. */
    public N1: number;

    /** RouletteMaxBets N2. */
    public N2: number;

    /** RouletteMaxBets N3. */
    public N3: number;

    /** RouletteMaxBets N4. */
    public N4: number;

    /** RouletteMaxBets N6. */
    public N6: number;

    /** RouletteMaxBets red. */
    public red: number;

    /** RouletteMaxBets black. */
    public black: number;

    /** RouletteMaxBets big. */
    public big: number;

    /** RouletteMaxBets small. */
    public small: number;

    /** RouletteMaxBets odd. */
    public odd: number;

    /** RouletteMaxBets even. */
    public even: number;

    /** RouletteMaxBets col1. */
    public col1: number;

    /** RouletteMaxBets col2. */
    public col2: number;

    /** RouletteMaxBets col3. */
    public col3: number;

    /** RouletteMaxBets row1. */
    public row1: number;

    /** RouletteMaxBets row2. */
    public row2: number;

    /** RouletteMaxBets row3. */
    public row3: number;

    /** RouletteMaxBets allRound. */
    public allRound: number;

    /**
     * Creates a new RouletteMaxBets instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RouletteMaxBets instance
     */
    public static create(properties?: IRouletteMaxBets): RouletteMaxBets;

    /**
     * Encodes the specified RouletteMaxBets message. Does not implicitly {@link RouletteMaxBets.verify|verify} messages.
     * @param message RouletteMaxBets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRouletteMaxBets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RouletteMaxBets message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RouletteMaxBets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RouletteMaxBets;
}

/** Dynamics enum. */
export enum Dynamics {
    equal = 0,
    up = 1,
    down = 2
}

/** Properties of a GameState1XXX. */
export interface IGameState1XXX {

    /** GameState1XXX timers */
    timers?: (ITimers|null);

    /** GameState1XXX period */
    period?: (GameState1XXX.Period|null);

    /** GameState1XXX round */
    round?: (number|Long|null);

    /** GameState1XXX history */
    history?: (GameState1XXX.IHistoryItem[]|null);

    /** GameState1XXX stats */
    stats?: (number[]|null);

    /** GameState1XXX maxbets */
    maxbets?: (IRouletteMaxBets|null);

    /** GameState1XXX link */
    link?: (string|null);

    /** GameState1XXX startLink */
    startLink?: (string|null);

    /** GameState1XXX gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);

    /** GameState1XXX stakes */
    stakes?: (number[]|null);
}

/** Represents a GameState1XXX. */
export class GameState1XXX implements IGameState1XXX {

    /**
     * Constructs a new GameState1XXX.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState1XXX);

    /** GameState1XXX timers. */
    public timers?: (ITimers|null);

    /** GameState1XXX period. */
    public period: GameState1XXX.Period;

    /** GameState1XXX round. */
    public round: (number|Long);

    /** GameState1XXX history. */
    public history: GameState1XXX.IHistoryItem[];

    /** GameState1XXX stats. */
    public stats: number[];

    /** GameState1XXX maxbets. */
    public maxbets?: (IRouletteMaxBets|null);

    /** GameState1XXX link. */
    public link: string;

    /** GameState1XXX startLink. */
    public startLink: string;

    /** GameState1XXX gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /** GameState1XXX stakes. */
    public stakes: number[];

    /**
     * Creates a new GameState1XXX instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState1XXX instance
     */
    public static create(properties?: IGameState1XXX): GameState1XXX;

    /**
     * Encodes the specified GameState1XXX message. Does not implicitly {@link GameState1XXX.verify|verify} messages.
     * @param message GameState1XXX message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState1XXX, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState1XXX message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState1XXX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1XXX;
}

export namespace GameState1XXX {

    /** Period enum. */
    enum Period {
        bet = 0,
        spin = 1,
        win = 2
    }

    /** Properties of a HistoryItem. */
    interface IHistoryItem {

        /** HistoryItem round */
        round?: (number|Long|null);

        /** HistoryItem wincombo */
        wincombo?: (number|null);
    }

    /** Represents a HistoryItem. */
    class HistoryItem implements IHistoryItem {

        /**
         * Constructs a new HistoryItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState1XXX.IHistoryItem);

        /** HistoryItem round. */
        public round: (number|Long);

        /** HistoryItem wincombo. */
        public wincombo: number;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryItem instance
         */
        public static create(properties?: GameState1XXX.IHistoryItem): GameState1XXX.HistoryItem;

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState1XXX.HistoryItem.verify|verify} messages.
         * @param message HistoryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState1XXX.IHistoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1XXX.HistoryItem;
    }
}

/** Properties of a Bet1XXX. */
export interface IBet1XXX {

    /** Bet1XXX round */
    round?: (number|Long|null);

    /** Bet1XXX body */
    body?: (IRouletteBet|null);
}

/** Represents a Bet1XXX. */
export class Bet1XXX implements IBet1XXX {

    /**
     * Constructs a new Bet1XXX.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet1XXX);

    /** Bet1XXX round. */
    public round: (number|Long);

    /** Bet1XXX body. */
    public body?: (IRouletteBet|null);

    /**
     * Creates a new Bet1XXX instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet1XXX instance
     */
    public static create(properties?: IBet1XXX): Bet1XXX;

    /**
     * Encodes the specified Bet1XXX message. Does not implicitly {@link Bet1XXX.verify|verify} messages.
     * @param message Bet1XXX message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet1XXX, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet1XXX message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet1XXX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet1XXX;
}

/** Properties of a Bet1024. */
export interface IBet1024 {

    /** Bet1024 round */
    round?: (number|Long|null);

    /** Bet1024 ball */
    ball?: (number|null);

    /** Bet1024 alias */
    alias?: (Bet1024.Alias|null);

    /** Bet1024 type */
    type?: (Bet1024.Type|null);
}

/** Represents a Bet1024. */
export class Bet1024 implements IBet1024 {

    /**
     * Constructs a new Bet1024.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet1024);

    /** Bet1024 round. */
    public round: (number|Long);

    /** Bet1024 ball. */
    public ball: number;

    /** Bet1024 alias. */
    public alias: Bet1024.Alias;

    /** Bet1024 type. */
    public type: Bet1024.Type;

    /**
     * Creates a new Bet1024 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet1024 instance
     */
    public static create(properties?: IBet1024): Bet1024;

    /**
     * Encodes the specified Bet1024 message. Does not implicitly {@link Bet1024.verify|verify} messages.
     * @param message Bet1024 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet1024, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet1024 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet1024
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet1024;
}

export namespace Bet1024 {

    /** Type enum. */
    enum Type {
        ALIAS = 0,
        BALL = 1
    }

    /** Alias enum. */
    enum Alias {
        color1 = 0,
        color2 = 1,
        top = 2,
        center = 3,
        bottom = 4
    }
}

/** Properties of a GameState1024. */
export interface IGameState1024 {

    /** GameState1024 timers */
    timers?: (ITimers|null);

    /** GameState1024 period */
    period?: (GameState1024.Period|null);

    /** GameState1024 round */
    round?: (number|Long|null);

    /** GameState1024 video */
    video?: (string|null);

    /** GameState1024 history */
    history?: (GameState1024.IHistoryItem[]|null);

    /** GameState1024 statistic */
    statistic?: (GameState1024.IStatisticItem|null);

    /** GameState1024 winBall */
    winBall?: (number|null);

    /** GameState1024 gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);
}

/** Represents a GameState1024. */
export class GameState1024 implements IGameState1024 {

    /**
     * Constructs a new GameState1024.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState1024);

    /** GameState1024 timers. */
    public timers?: (ITimers|null);

    /** GameState1024 period. */
    public period: GameState1024.Period;

    /** GameState1024 round. */
    public round: (number|Long);

    /** GameState1024 video. */
    public video: string;

    /** GameState1024 history. */
    public history: GameState1024.IHistoryItem[];

    /** GameState1024 statistic. */
    public statistic?: (GameState1024.IStatisticItem|null);

    /** GameState1024 winBall. */
    public winBall: number;

    /** GameState1024 gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /**
     * Creates a new GameState1024 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState1024 instance
     */
    public static create(properties?: IGameState1024): GameState1024;

    /**
     * Encodes the specified GameState1024 message. Does not implicitly {@link GameState1024.verify|verify} messages.
     * @param message GameState1024 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState1024, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState1024 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState1024
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1024;
}

export namespace GameState1024 {

    /** Period enum. */
    enum Period {
        betting = 0,
        playing = 1
    }

    /** Properties of a HistoryItem. */
    interface IHistoryItem {

        /** HistoryItem round */
        round?: (number|Long|null);

        /** HistoryItem ball */
        ball?: (number|null);
    }

    /** Represents a HistoryItem. */
    class HistoryItem implements IHistoryItem {

        /**
         * Constructs a new HistoryItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState1024.IHistoryItem);

        /** HistoryItem round. */
        public round: (number|Long);

        /** HistoryItem ball. */
        public ball: number;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryItem instance
         */
        public static create(properties?: GameState1024.IHistoryItem): GameState1024.HistoryItem;

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState1024.HistoryItem.verify|verify} messages.
         * @param message HistoryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState1024.IHistoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1024.HistoryItem;
    }

    /** Properties of a StatisticItem. */
    interface IStatisticItem {

        /** StatisticItem miss */
        miss?: (number|null);

        /** StatisticItem post */
        post?: (number|null);

        /** StatisticItem balls */
        balls?: (number[]|null);
    }

    /** Represents a StatisticItem. */
    class StatisticItem implements IStatisticItem {

        /**
         * Constructs a new StatisticItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState1024.IStatisticItem);

        /** StatisticItem miss. */
        public miss: number;

        /** StatisticItem post. */
        public post: number;

        /** StatisticItem balls. */
        public balls: number[];

        /**
         * Creates a new StatisticItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatisticItem instance
         */
        public static create(properties?: GameState1024.IStatisticItem): GameState1024.StatisticItem;

        /**
         * Encodes the specified StatisticItem message. Does not implicitly {@link GameState1024.StatisticItem.verify|verify} messages.
         * @param message StatisticItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState1024.IStatisticItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatisticItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatisticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1024.StatisticItem;
    }
}

/** Properties of a Bet7XX. */
export interface IBet7XX {

    /** Bet7XX gameName */
    gameName?: (string|null);

    /** Bet7XX resultName */
    resultName?: (string|null);

    /** Bet7XX resultValue */
    resultValue?: (string|null);

    /** Bet7XX round */
    round?: (number|Long|null);
}

/** Represents a Bet7XX. */
export class Bet7XX implements IBet7XX {

    /**
     * Constructs a new Bet7XX.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet7XX);

    /** Bet7XX gameName. */
    public gameName: string;

    /** Bet7XX resultName. */
    public resultName: string;

    /** Bet7XX resultValue. */
    public resultValue: string;

    /** Bet7XX round. */
    public round: (number|Long);

    /**
     * Creates a new Bet7XX instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet7XX instance
     */
    public static create(properties?: IBet7XX): Bet7XX;

    /**
     * Encodes the specified Bet7XX message. Does not implicitly {@link Bet7XX.verify|verify} messages.
     * @param message Bet7XX message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet7XX, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet7XX message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet7XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet7XX;
}

/** Properties of a GameState7XX. */
export interface IGameState7XX {

    /** GameState7XX timers */
    timers?: (ITimers|null);

    /** GameState7XX period */
    period?: (GameState7XX.Period|null);

    /** GameState7XX round */
    round?: (number|Long|null);

    /** GameState7XX history */
    history?: (GameState7XX.IHistoryItem[]|null);

    /** GameState7XX odds */
    odds?: (GameState7XX.IOdd[]|null);

    /** GameState7XX video */
    video?: (string|null);

    /** GameState7XX winners */
    winners?: (number[]|null);

    /** GameState7XX gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);
}

/** Represents a GameState7XX. */
export class GameState7XX implements IGameState7XX {

    /**
     * Constructs a new GameState7XX.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState7XX);

    /** GameState7XX timers. */
    public timers?: (ITimers|null);

    /** GameState7XX period. */
    public period: GameState7XX.Period;

    /** GameState7XX round. */
    public round: (number|Long);

    /** GameState7XX history. */
    public history: GameState7XX.IHistoryItem[];

    /** GameState7XX odds. */
    public odds: GameState7XX.IOdd[];

    /** GameState7XX video. */
    public video: string;

    /** GameState7XX winners. */
    public winners: number[];

    /** GameState7XX gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /**
     * Creates a new GameState7XX instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState7XX instance
     */
    public static create(properties?: IGameState7XX): GameState7XX;

    /**
     * Encodes the specified GameState7XX message. Does not implicitly {@link GameState7XX.verify|verify} messages.
     * @param message GameState7XX message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState7XX, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState7XX message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState7XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState7XX;
}

export namespace GameState7XX {

    /** Period enum. */
    enum Period {
        betting = 0,
        playing = 1
    }

    /** Properties of a HistoryItem. */
    interface IHistoryItem {

        /** HistoryItem round */
        round?: (number|Long|null);

        /** HistoryItem winners */
        winners?: (number[]|null);
    }

    /** Represents a HistoryItem. */
    class HistoryItem implements IHistoryItem {

        /**
         * Constructs a new HistoryItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState7XX.IHistoryItem);

        /** HistoryItem round. */
        public round: (number|Long);

        /** HistoryItem winners. */
        public winners: number[];

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryItem instance
         */
        public static create(properties?: GameState7XX.IHistoryItem): GameState7XX.HistoryItem;

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState7XX.HistoryItem.verify|verify} messages.
         * @param message HistoryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState7XX.IHistoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState7XX.HistoryItem;
    }

    /** Properties of an Odd. */
    interface IOdd {

        /** Odd gameName */
        gameName?: (string|null);

        /** Odd results */
        results?: (GameState7XX.Odd.IResult[]|null);
    }

    /** Represents an Odd. */
    class Odd implements IOdd {

        /**
         * Constructs a new Odd.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState7XX.IOdd);

        /** Odd gameName. */
        public gameName: string;

        /** Odd results. */
        public results: GameState7XX.Odd.IResult[];

        /**
         * Creates a new Odd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Odd instance
         */
        public static create(properties?: GameState7XX.IOdd): GameState7XX.Odd;

        /**
         * Encodes the specified Odd message. Does not implicitly {@link GameState7XX.Odd.verify|verify} messages.
         * @param message Odd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState7XX.IOdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Odd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Odd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState7XX.Odd;
    }

    namespace Odd {

        /** Properties of a Result. */
        interface IResult {

            /** Result resultName */
            resultName?: (string|null);

            /** Result resultValue */
            resultValue?: (string|null);

            /** Result dynamics */
            dynamics?: (Dynamics|null);
        }

        /** Represents a Result. */
        class Result implements IResult {

            /**
             * Constructs a new Result.
             * @param [properties] Properties to set
             */
            constructor(properties?: GameState7XX.Odd.IResult);

            /** Result resultName. */
            public resultName: string;

            /** Result resultValue. */
            public resultValue: string;

            /** Result dynamics. */
            public dynamics: Dynamics;

            /**
             * Creates a new Result instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Result instance
             */
            public static create(properties?: GameState7XX.Odd.IResult): GameState7XX.Odd.Result;

            /**
             * Encodes the specified Result message. Does not implicitly {@link GameState7XX.Odd.Result.verify|verify} messages.
             * @param message Result message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GameState7XX.Odd.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Result message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState7XX.Odd.Result;
        }
    }
}

/** Event886 enum. */
export enum Event886 {
    S886_Event_undefined = 0,
    S886_S0 = 1,
    S886_S17 = 2,
    S886_S18 = 3,
    S886_S19 = 4,
    S886_S20 = 5,
    S886_S21 = 6,
    S886_S22 = 7,
    S886_PlayerWins = 8,
    S886_Draw = 9,
    S886_DealerWins = 10,
    S886_Wins = 11
}

/** KindEvent886 enum. */
export enum KindEvent886 {
    S886_KindEvent_undefined = 0,
    S886_WhoWillWin = 1,
    S886_DealerScore = 2,
    S886_PvD = 3
}

/** Player886 enum. */
export enum Player886 {
    S886_Player_undefined = 0,
    S886_P1 = 1,
    S886_P2 = 2,
    S886_P3 = 3,
    S886_P4 = 4,
    S886_P5 = 5,
    S886_P6 = 6,
    S886_Dealer = 7
}

/** Period886 enum. */
export enum Period886 {
    S886_Period_undefined = 0,
    S886_Period1 = 1,
    S886_Period2 = 2,
    S886_Period3 = 3,
    S886_Period4 = 4
}

/** Properties of a Score886. */
export interface IScore886 {

    /** Score886 value */
    value?: (number|null);

    /** Score886 blackjack */
    blackjack?: (boolean|null);
}

/** Represents a Score886. */
export class Score886 implements IScore886 {

    /**
     * Constructs a new Score886.
     * @param [properties] Properties to set
     */
    constructor(properties?: IScore886);

    /** Score886 value. */
    public value: number;

    /** Score886 blackjack. */
    public blackjack: boolean;

    /**
     * Creates a new Score886 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Score886 instance
     */
    public static create(properties?: IScore886): Score886;

    /**
     * Encodes the specified Score886 message. Does not implicitly {@link Score886.verify|verify} messages.
     * @param message Score886 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IScore886, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Score886 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Score886
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Score886;
}

/** Properties of a Bet886. */
export interface IBet886 {

    /** Bet886 id */
    id?: (number|Long|null);

    /** Bet886 odd */
    odd?: (string|null);

    /** Bet886 round */
    round?: (number|Long|null);

    /** Bet886 period */
    period?: (Period886|null);

    /** Bet886 player */
    player?: (Player886|null);

    /** Bet886 event */
    event?: (Event886|null);

    /** Bet886 kindEvent */
    kindEvent?: (KindEvent886|null);
}

/** Represents a Bet886. */
export class Bet886 implements IBet886 {

    /**
     * Constructs a new Bet886.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet886);

    /** Bet886 id. */
    public id: (number|Long);

    /** Bet886 odd. */
    public odd: string;

    /** Bet886 round. */
    public round: (number|Long);

    /** Bet886 period. */
    public period: Period886;

    /** Bet886 player. */
    public player: Player886;

    /** Bet886 event. */
    public event: Event886;

    /** Bet886 kindEvent. */
    public kindEvent: KindEvent886;

    /**
     * Creates a new Bet886 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet886 instance
     */
    public static create(properties?: IBet886): Bet886;

    /**
     * Encodes the specified Bet886 message. Does not implicitly {@link Bet886.verify|verify} messages.
     * @param message Bet886 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet886, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet886 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet886
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet886;
}

/** Properties of a GameState886. */
export interface IGameState886 {

    /** GameState886 timers */
    timers?: (ITimers|null);

    /** GameState886 period */
    period?: (Period886|null);

    /** GameState886 round */
    round?: (number|Long|null);

    /** GameState886 history */
    history?: (GameState886.IHistoryItem[]|null);

    /** GameState886 odds */
    odds?: (GameState886.IOdd[]|null);

    /** GameState886 cardPacks */
    cardPacks?: (GameState886.ICardPack[]|null);

    /** GameState886 stakes */
    stakes?: (GameState886.IStakeItem[]|null);

    /** GameState886 gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);
}

/** Represents a GameState886. */
export class GameState886 implements IGameState886 {

    /**
     * Constructs a new GameState886.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState886);

    /** GameState886 timers. */
    public timers?: (ITimers|null);

    /** GameState886 period. */
    public period: Period886;

    /** GameState886 round. */
    public round: (number|Long);

    /** GameState886 history. */
    public history: GameState886.IHistoryItem[];

    /** GameState886 odds. */
    public odds: GameState886.IOdd[];

    /** GameState886 cardPacks. */
    public cardPacks: GameState886.ICardPack[];

    /** GameState886 stakes. */
    public stakes: GameState886.IStakeItem[];

    /** GameState886 gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /**
     * Creates a new GameState886 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState886 instance
     */
    public static create(properties?: IGameState886): GameState886;

    /**
     * Encodes the specified GameState886 message. Does not implicitly {@link GameState886.verify|verify} messages.
     * @param message GameState886 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState886, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState886 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState886
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState886;
}

export namespace GameState886 {

    /** Properties of a HistoryItem. */
    interface IHistoryItem {

        /** HistoryItem round */
        round?: (number|Long|null);

        /** HistoryItem wincombo */
        wincombo?: (GameState886.HistoryItem.IWincombo[]|null);
    }

    /** Represents a HistoryItem. */
    class HistoryItem implements IHistoryItem {

        /**
         * Constructs a new HistoryItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState886.IHistoryItem);

        /** HistoryItem round. */
        public round: (number|Long);

        /** HistoryItem wincombo. */
        public wincombo: GameState886.HistoryItem.IWincombo[];

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryItem instance
         */
        public static create(properties?: GameState886.IHistoryItem): GameState886.HistoryItem;

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState886.HistoryItem.verify|verify} messages.
         * @param message HistoryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState886.IHistoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState886.HistoryItem;
    }

    namespace HistoryItem {

        /** Properties of a Wincombo. */
        interface IWincombo {

            /** Wincombo player */
            player?: (Player886|null);

            /** Wincombo score */
            score?: (IScore886|null);
        }

        /** Represents a Wincombo. */
        class Wincombo implements IWincombo {

            /**
             * Constructs a new Wincombo.
             * @param [properties] Properties to set
             */
            constructor(properties?: GameState886.HistoryItem.IWincombo);

            /** Wincombo player. */
            public player: Player886;

            /** Wincombo score. */
            public score?: (IScore886|null);

            /**
             * Creates a new Wincombo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Wincombo instance
             */
            public static create(properties?: GameState886.HistoryItem.IWincombo): GameState886.HistoryItem.Wincombo;

            /**
             * Encodes the specified Wincombo message. Does not implicitly {@link GameState886.HistoryItem.Wincombo.verify|verify} messages.
             * @param message Wincombo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GameState886.HistoryItem.IWincombo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Wincombo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Wincombo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState886.HistoryItem.Wincombo;
        }
    }

    /** Properties of an Odd. */
    interface IOdd {

        /** Odd id */
        id?: (number|Long|null);

        /** Odd odd */
        odd?: (string|null);

        /** Odd player */
        player?: (Player886|null);

        /** Odd event */
        event?: (Event886|null);

        /** Odd kindEvent */
        kindEvent?: (KindEvent886|null);

        /** Odd status */
        status?: (GameState886.Odd.Status|null);
    }

    /** Represents an Odd. */
    class Odd implements IOdd {

        /**
         * Constructs a new Odd.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState886.IOdd);

        /** Odd id. */
        public id: (number|Long);

        /** Odd odd. */
        public odd: string;

        /** Odd player. */
        public player: Player886;

        /** Odd event. */
        public event: Event886;

        /** Odd kindEvent. */
        public kindEvent: KindEvent886;

        /** Odd status. */
        public status: GameState886.Odd.Status;

        /**
         * Creates a new Odd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Odd instance
         */
        public static create(properties?: GameState886.IOdd): GameState886.Odd;

        /**
         * Encodes the specified Odd message. Does not implicitly {@link GameState886.Odd.verify|verify} messages.
         * @param message Odd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState886.IOdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Odd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Odd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState886.Odd;
    }

    namespace Odd {

        /** Status enum. */
        enum Status {
            active = 0,
            loose = 1,
            win = 2
        }
    }

    /** Properties of a CardPack. */
    interface ICardPack {

        /** CardPack owner */
        owner?: (Player886|null);

        /** CardPack cards */
        cards?: (IPlayingCard[]|null);

        /** CardPack score */
        score?: (IScore886|null);

        /** CardPack hit */
        hit?: (boolean|null);
    }

    /** Represents a CardPack. */
    class CardPack implements ICardPack {

        /**
         * Constructs a new CardPack.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState886.ICardPack);

        /** CardPack owner. */
        public owner: Player886;

        /** CardPack cards. */
        public cards: IPlayingCard[];

        /** CardPack score. */
        public score?: (IScore886|null);

        /** CardPack hit. */
        public hit: boolean;

        /**
         * Creates a new CardPack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardPack instance
         */
        public static create(properties?: GameState886.ICardPack): GameState886.CardPack;

        /**
         * Encodes the specified CardPack message. Does not implicitly {@link GameState886.CardPack.verify|verify} messages.
         * @param message CardPack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState886.ICardPack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardPack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState886.CardPack;
    }

    /** Properties of a StakeItem. */
    interface IStakeItem {

        /** StakeItem player */
        player?: (Player886|null);

        /** StakeItem value */
        value?: (number|Long|null);
    }

    /** Represents a StakeItem. */
    class StakeItem implements IStakeItem {

        /**
         * Constructs a new StakeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState886.IStakeItem);

        /** StakeItem player. */
        public player: Player886;

        /** StakeItem value. */
        public value: (number|Long);

        /**
         * Creates a new StakeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StakeItem instance
         */
        public static create(properties?: GameState886.IStakeItem): GameState886.StakeItem;

        /**
         * Encodes the specified StakeItem message. Does not implicitly {@link GameState886.StakeItem.verify|verify} messages.
         * @param message StakeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState886.IStakeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StakeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StakeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState886.StakeItem;
    }
}

/** Properties of a Bet1013. */
export interface IBet1013 {

    /** Bet1013 round */
    round?: (number|Long|null);

    /** Bet1013 body */
    body?: (Bet1013.Body|null);
}

/** Represents a Bet1013. */
export class Bet1013 implements IBet1013 {

    /**
     * Constructs a new Bet1013.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet1013);

    /** Bet1013 round. */
    public round: (number|Long);

    /** Bet1013 body. */
    public body: Bet1013.Body;

    /**
     * Creates a new Bet1013 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet1013 instance
     */
    public static create(properties?: IBet1013): Bet1013;

    /**
     * Encodes the specified Bet1013 message. Does not implicitly {@link Bet1013.verify|verify} messages.
     * @param message Bet1013 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet1013, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet1013 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet1013
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet1013;
}

export namespace Bet1013 {

    /** Body enum. */
    enum Body {
        N0 = 0,
        N1 = 1,
        N2 = 2,
        N3 = 3,
        N4 = 4,
        N5 = 5,
        N6 = 6,
        N7 = 7,
        N8 = 8,
        N9 = 9,
        N10 = 10,
        N11 = 11,
        N12 = 12,
        N13 = 13,
        N14 = 14,
        N15 = 15,
        N16 = 16,
        N17 = 17,
        N18 = 18,
        red = 19,
        yellow = 20,
        purple = 21,
        odd = 22,
        even = 23,
        half1 = 24,
        half2 = 25,
        third1 = 26,
        third2 = 27,
        third3 = 28,
        red_even = 29,
        red_odd = 30,
        yellow_even = 31,
        yellow_odd = 32,
        purple_even = 33,
        purple_odd = 34
    }
}

/** Properties of a F18MaxBets. */
export interface IF18MaxBets {

    /** F18MaxBets N1 */
    N1?: (number|null);

    /** F18MaxBets red */
    red?: (number|null);

    /** F18MaxBets yellow */
    yellow?: (number|null);

    /** F18MaxBets purple */
    purple?: (number|null);

    /** F18MaxBets odd */
    odd?: (number|null);

    /** F18MaxBets even */
    even?: (number|null);

    /** F18MaxBets half1 */
    half1?: (number|null);

    /** F18MaxBets half2 */
    half2?: (number|null);

    /** F18MaxBets third1 */
    third1?: (number|null);

    /** F18MaxBets third2 */
    third2?: (number|null);

    /** F18MaxBets third3 */
    third3?: (number|null);

    /** F18MaxBets redEven */
    redEven?: (number|null);

    /** F18MaxBets redOdd */
    redOdd?: (number|null);

    /** F18MaxBets yellowEven */
    yellowEven?: (number|null);

    /** F18MaxBets yellowOdd */
    yellowOdd?: (number|null);

    /** F18MaxBets purpleEven */
    purpleEven?: (number|null);

    /** F18MaxBets purpleOdd */
    purpleOdd?: (number|null);

    /** F18MaxBets allRound */
    allRound?: (number|null);
}

/** Represents a F18MaxBets. */
export class F18MaxBets implements IF18MaxBets {

    /**
     * Constructs a new F18MaxBets.
     * @param [properties] Properties to set
     */
    constructor(properties?: IF18MaxBets);

    /** F18MaxBets N1. */
    public N1: number;

    /** F18MaxBets red. */
    public red: number;

    /** F18MaxBets yellow. */
    public yellow: number;

    /** F18MaxBets purple. */
    public purple: number;

    /** F18MaxBets odd. */
    public odd: number;

    /** F18MaxBets even. */
    public even: number;

    /** F18MaxBets half1. */
    public half1: number;

    /** F18MaxBets half2. */
    public half2: number;

    /** F18MaxBets third1. */
    public third1: number;

    /** F18MaxBets third2. */
    public third2: number;

    /** F18MaxBets third3. */
    public third3: number;

    /** F18MaxBets redEven. */
    public redEven: number;

    /** F18MaxBets redOdd. */
    public redOdd: number;

    /** F18MaxBets yellowEven. */
    public yellowEven: number;

    /** F18MaxBets yellowOdd. */
    public yellowOdd: number;

    /** F18MaxBets purpleEven. */
    public purpleEven: number;

    /** F18MaxBets purpleOdd. */
    public purpleOdd: number;

    /** F18MaxBets allRound. */
    public allRound: number;

    /**
     * Creates a new F18MaxBets instance using the specified properties.
     * @param [properties] Properties to set
     * @returns F18MaxBets instance
     */
    public static create(properties?: IF18MaxBets): F18MaxBets;

    /**
     * Encodes the specified F18MaxBets message. Does not implicitly {@link F18MaxBets.verify|verify} messages.
     * @param message F18MaxBets message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IF18MaxBets, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a F18MaxBets message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns F18MaxBets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): F18MaxBets;
}

/** Properties of a GameState1013. */
export interface IGameState1013 {

    /** GameState1013 timers */
    timers?: (ITimers|null);

    /** GameState1013 period */
    period?: (GameState1013.Period|null);

    /** GameState1013 round */
    round?: (number|Long|null);

    /** GameState1013 fullHistory */
    fullHistory?: (GameState1013.IHistory[]|null);

    /** GameState1013 stopstamp */
    stopstamp?: (number|Long|null);

    /** GameState1013 ball */
    ball?: (number|null);

    /** GameState1013 stakes */
    stakes?: (GameState1013.IStakeItem[]|null);

    /** GameState1013 maxbets */
    maxbets?: (IF18MaxBets|null);

    /** GameState1013 gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);
}

/** Represents a GameState1013. */
export class GameState1013 implements IGameState1013 {

    /**
     * Constructs a new GameState1013.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState1013);

    /** GameState1013 timers. */
    public timers?: (ITimers|null);

    /** GameState1013 period. */
    public period: GameState1013.Period;

    /** GameState1013 round. */
    public round: (number|Long);

    /** GameState1013 fullHistory. */
    public fullHistory: GameState1013.IHistory[];

    /** GameState1013 stopstamp. */
    public stopstamp: (number|Long);

    /** GameState1013 ball. */
    public ball: number;

    /** GameState1013 stakes. */
    public stakes: GameState1013.IStakeItem[];

    /** GameState1013 maxbets. */
    public maxbets?: (IF18MaxBets|null);

    /** GameState1013 gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /**
     * Creates a new GameState1013 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState1013 instance
     */
    public static create(properties?: IGameState1013): GameState1013;

    /**
     * Encodes the specified GameState1013 message. Does not implicitly {@link GameState1013.verify|verify} messages.
     * @param message GameState1013 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState1013, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState1013 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState1013
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1013;
}

export namespace GameState1013 {

    /** Period enum. */
    enum Period {
        betting = 0,
        playing = 1
    }

    /** Properties of a StakeItem. */
    interface IStakeItem {

        /** StakeItem combo */
        combo?: (Bet1013.Body|null);

        /** StakeItem value */
        value?: (number|Long|null);
    }

    /** Represents a StakeItem. */
    class StakeItem implements IStakeItem {

        /**
         * Constructs a new StakeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState1013.IStakeItem);

        /** StakeItem combo. */
        public combo: Bet1013.Body;

        /** StakeItem value. */
        public value: (number|Long);

        /**
         * Creates a new StakeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StakeItem instance
         */
        public static create(properties?: GameState1013.IStakeItem): GameState1013.StakeItem;

        /**
         * Encodes the specified StakeItem message. Does not implicitly {@link GameState1013.StakeItem.verify|verify} messages.
         * @param message StakeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState1013.IStakeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StakeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StakeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1013.StakeItem;
    }

    /** Properties of a History. */
    interface IHistory {

        /** History round */
        round?: (number|Long|null);

        /** History ball */
        ball?: (number|null);
    }

    /** Represents a History. */
    class History implements IHistory {

        /**
         * Constructs a new History.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState1013.IHistory);

        /** History round. */
        public round: (number|Long);

        /** History ball. */
        public ball: number;

        /**
         * Creates a new History instance using the specified properties.
         * @param [properties] Properties to set
         * @returns History instance
         */
        public static create(properties?: GameState1013.IHistory): GameState1013.History;

        /**
         * Encodes the specified History message. Does not implicitly {@link GameState1013.History.verify|verify} messages.
         * @param message History message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState1013.IHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a History message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState1013.History;
    }
}

/** Properties of a Bet999XX. */
export interface IBet999XX {

    /** Bet999XX round */
    round?: (number|Long|null);

    /** Bet999XX body */
    body?: (number[]|null);
}

/** Represents a Bet999XX. */
export class Bet999XX implements IBet999XX {

    /**
     * Constructs a new Bet999XX.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet999XX);

    /** Bet999XX round. */
    public round: (number|Long);

    /** Bet999XX body. */
    public body: number[];

    /**
     * Creates a new Bet999XX instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet999XX instance
     */
    public static create(properties?: IBet999XX): Bet999XX;

    /**
     * Encodes the specified Bet999XX message. Does not implicitly {@link Bet999XX.verify|verify} messages.
     * @param message Bet999XX message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet999XX, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet999XX message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet999XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet999XX;
}

/** Properties of a GameState999XX. */
export interface IGameState999XX {

    /** GameState999XX timers */
    timers?: (ITimers|null);

    /** GameState999XX period */
    period?: (GameState999XX.Period|null);

    /** GameState999XX round */
    round?: (number|Long|null);

    /** GameState999XX history */
    history?: (GameState999XX.IHistoryItem[]|null);

    /** GameState999XX stakes */
    stakes?: ((number|Long)[]|null);

    /** GameState999XX statistic */
    statistic?: (GameState999XX.IStatisticItem[]|null);

    /** GameState999XX gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);
}

/** Represents a GameState999XX. */
export class GameState999XX implements IGameState999XX {

    /**
     * Constructs a new GameState999XX.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState999XX);

    /** GameState999XX timers. */
    public timers?: (ITimers|null);

    /** GameState999XX period. */
    public period: GameState999XX.Period;

    /** GameState999XX round. */
    public round: (number|Long);

    /** GameState999XX history. */
    public history: GameState999XX.IHistoryItem[];

    /** GameState999XX stakes. */
    public stakes: (number|Long)[];

    /** GameState999XX statistic. */
    public statistic: GameState999XX.IStatisticItem[];

    /** GameState999XX gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /**
     * Creates a new GameState999XX instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState999XX instance
     */
    public static create(properties?: IGameState999XX): GameState999XX;

    /**
     * Encodes the specified GameState999XX message. Does not implicitly {@link GameState999XX.verify|verify} messages.
     * @param message GameState999XX message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState999XX, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState999XX message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState999XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState999XX;
}

export namespace GameState999XX {

    /** Period enum. */
    enum Period {
        betting = 0,
        playing = 1
    }

    /** Properties of a HistoryItem. */
    interface IHistoryItem {

        /** HistoryItem round */
        round?: (number|Long|null);

        /** HistoryItem wincombo */
        wincombo?: (number[]|null);
    }

    /** Represents a HistoryItem. */
    class HistoryItem implements IHistoryItem {

        /**
         * Constructs a new HistoryItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState999XX.IHistoryItem);

        /** HistoryItem round. */
        public round: (number|Long);

        /** HistoryItem wincombo. */
        public wincombo: number[];

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryItem instance
         */
        public static create(properties?: GameState999XX.IHistoryItem): GameState999XX.HistoryItem;

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState999XX.HistoryItem.verify|verify} messages.
         * @param message HistoryItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState999XX.IHistoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState999XX.HistoryItem;
    }

    /** Properties of a StatisticItem. */
    interface IStatisticItem {

        /** StatisticItem win */
        win?: (number|null);

        /** StatisticItem count */
        count?: (number|null);
    }

    /** Represents a StatisticItem. */
    class StatisticItem implements IStatisticItem {

        /**
         * Constructs a new StatisticItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState999XX.IStatisticItem);

        /** StatisticItem win. */
        public win: number;

        /** StatisticItem count. */
        public count: number;

        /**
         * Creates a new StatisticItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatisticItem instance
         */
        public static create(properties?: GameState999XX.IStatisticItem): GameState999XX.StatisticItem;

        /**
         * Encodes the specified StatisticItem message. Does not implicitly {@link GameState999XX.StatisticItem.verify|verify} messages.
         * @param message StatisticItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState999XX.IStatisticItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatisticItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatisticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState999XX.StatisticItem;
    }
}

/** Properties of an Odd4001. */
export interface IOdd4001 {

    /** Odd4001 odd */
    odd?: (number|Long|null);

    /** Odd4001 kind */
    kind?: (number|Long|null);

    /** Odd4001 handicap */
    handicap?: (number|null);

    /** Odd4001 total */
    total?: (number|null);

    /** Odd4001 goals */
    goals?: (number|null);

    /** Odd4001 teamA */
    teamA?: (number|Long|null);

    /** Odd4001 teamB */
    teamB?: (number|Long|null);

    /** Odd4001 dynamics */
    dynamics?: (Dynamics|null);
}

/** Represents an Odd4001. */
export class Odd4001 implements IOdd4001 {

    /**
     * Constructs a new Odd4001.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOdd4001);

    /** Odd4001 odd. */
    public odd: (number|Long);

    /** Odd4001 kind. */
    public kind: (number|Long);

    /** Odd4001 handicap. */
    public handicap: number;

    /** Odd4001 total. */
    public total: number;

    /** Odd4001 goals. */
    public goals: number;

    /** Odd4001 teamA. */
    public teamA: (number|Long);

    /** Odd4001 teamB. */
    public teamB: (number|Long);

    /** Odd4001 dynamics. */
    public dynamics: Dynamics;

    /**
     * Creates a new Odd4001 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Odd4001 instance
     */
    public static create(properties?: IOdd4001): Odd4001;

    /**
     * Encodes the specified Odd4001 message. Does not implicitly {@link Odd4001.verify|verify} messages.
     * @param message Odd4001 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOdd4001, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Odd4001 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Odd4001
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Odd4001;
}

/** Properties of a Bet4001. */
export interface IBet4001 {

    /** Bet4001 round */
    round?: (number|Long|null);

    /** Bet4001 odd */
    odd?: (IOdd4001|null);

    /** Bet4001 team_AName */
    team_AName?: (string|null);

    /** Bet4001 team_BName */
    team_BName?: (string|null);
}

/** Represents a Bet4001. */
export class Bet4001 implements IBet4001 {

    /**
     * Constructs a new Bet4001.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet4001);

    /** Bet4001 round. */
    public round: (number|Long);

    /** Bet4001 odd. */
    public odd?: (IOdd4001|null);

    /** Bet4001 team_AName. */
    public team_AName: string;

    /** Bet4001 team_BName. */
    public team_BName: string;

    /**
     * Creates a new Bet4001 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet4001 instance
     */
    public static create(properties?: IBet4001): Bet4001;

    /**
     * Encodes the specified Bet4001 message. Does not implicitly {@link Bet4001.verify|verify} messages.
     * @param message Bet4001 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet4001, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet4001 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet4001
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet4001;
}

/** Properties of a GameState4001. */
export interface IGameState4001 {

    /** GameState4001 timers */
    timers?: (ITimers|null);

    /** GameState4001 period */
    period?: (GameState4001.Period|null);

    /** GameState4001 round */
    round?: (number|Long|null);

    /** GameState4001 totalHistory */
    totalHistory?: (GameState4001.ITotalHistory[]|null);

    /** GameState4001 roundTeamsHistory */
    roundTeamsHistory?: (GameState4001.IRoundTeamsHistory[]|null);

    /** GameState4001 video */
    video?: (string|null);

    /** GameState4001 odds */
    odds?: (IOdd4001[]|null);

    /** GameState4001 gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);

    /** GameState4001 team_AName */
    team_AName?: (string|null);

    /** GameState4001 team_BName */
    team_BName?: (string|null);
}

/** Represents a GameState4001. */
export class GameState4001 implements IGameState4001 {

    /**
     * Constructs a new GameState4001.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState4001);

    /** GameState4001 timers. */
    public timers?: (ITimers|null);

    /** GameState4001 period. */
    public period: GameState4001.Period;

    /** GameState4001 round. */
    public round: (number|Long);

    /** GameState4001 totalHistory. */
    public totalHistory: GameState4001.ITotalHistory[];

    /** GameState4001 roundTeamsHistory. */
    public roundTeamsHistory: GameState4001.IRoundTeamsHistory[];

    /** GameState4001 video. */
    public video: string;

    /** GameState4001 odds. */
    public odds: IOdd4001[];

    /** GameState4001 gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /** GameState4001 team_AName. */
    public team_AName: string;

    /** GameState4001 team_BName. */
    public team_BName: string;

    /**
     * Creates a new GameState4001 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState4001 instance
     */
    public static create(properties?: IGameState4001): GameState4001;

    /**
     * Encodes the specified GameState4001 message. Does not implicitly {@link GameState4001.verify|verify} messages.
     * @param message GameState4001 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState4001, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState4001 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState4001
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState4001;
}

export namespace GameState4001 {

    /** Period enum. */
    enum Period {
        betting = 0,
        playing = 1
    }

    /** Properties of a TotalHistory. */
    interface ITotalHistory {

        /** TotalHistory totalOdds */
        totalOdds?: (IOdd4001[]|null);

        /** TotalHistory team_AName */
        team_AName?: (string|null);

        /** TotalHistory team_BName */
        team_BName?: (string|null);

        /** TotalHistory winningOdds */
        winningOdds?: (IOdd4001[]|null);

        /** TotalHistory roundId */
        roundId?: (number|Long|null);

        /** TotalHistory team_A_Score */
        team_A_Score?: (number|null);

        /** TotalHistory team_B_Score */
        team_B_Score?: (number|null);
    }

    /** Represents a TotalHistory. */
    class TotalHistory implements ITotalHistory {

        /**
         * Constructs a new TotalHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState4001.ITotalHistory);

        /** TotalHistory totalOdds. */
        public totalOdds: IOdd4001[];

        /** TotalHistory team_AName. */
        public team_AName: string;

        /** TotalHistory team_BName. */
        public team_BName: string;

        /** TotalHistory winningOdds. */
        public winningOdds: IOdd4001[];

        /** TotalHistory roundId. */
        public roundId: (number|Long);

        /** TotalHistory team_A_Score. */
        public team_A_Score: number;

        /** TotalHistory team_B_Score. */
        public team_B_Score: number;

        /**
         * Creates a new TotalHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TotalHistory instance
         */
        public static create(properties?: GameState4001.ITotalHistory): GameState4001.TotalHistory;

        /**
         * Encodes the specified TotalHistory message. Does not implicitly {@link GameState4001.TotalHistory.verify|verify} messages.
         * @param message TotalHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState4001.ITotalHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TotalHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TotalHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState4001.TotalHistory;
    }

    /** Properties of a RoundTeamsHistory. */
    interface IRoundTeamsHistory {

        /** RoundTeamsHistory team_AScore */
        team_AScore?: (number|null);

        /** RoundTeamsHistory team_BScore */
        team_BScore?: (number|null);

        /** RoundTeamsHistory team_AName */
        team_AName?: (string|null);

        /** RoundTeamsHistory team_BName */
        team_BName?: (string|null);

        /** RoundTeamsHistory winningOdds */
        winningOdds?: (IOdd4001[]|null);

        /** RoundTeamsHistory roundId */
        roundId?: (number|Long|null);
    }

    /** Represents a RoundTeamsHistory. */
    class RoundTeamsHistory implements IRoundTeamsHistory {

        /**
         * Constructs a new RoundTeamsHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState4001.IRoundTeamsHistory);

        /** RoundTeamsHistory team_AScore. */
        public team_AScore: number;

        /** RoundTeamsHistory team_BScore. */
        public team_BScore: number;

        /** RoundTeamsHistory team_AName. */
        public team_AName: string;

        /** RoundTeamsHistory team_BName. */
        public team_BName: string;

        /** RoundTeamsHistory winningOdds. */
        public winningOdds: IOdd4001[];

        /** RoundTeamsHistory roundId. */
        public roundId: (number|Long);

        /**
         * Creates a new RoundTeamsHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundTeamsHistory instance
         */
        public static create(properties?: GameState4001.IRoundTeamsHistory): GameState4001.RoundTeamsHistory;

        /**
         * Encodes the specified RoundTeamsHistory message. Does not implicitly {@link GameState4001.RoundTeamsHistory.verify|verify} messages.
         * @param message RoundTeamsHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState4001.IRoundTeamsHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundTeamsHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundTeamsHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState4001.RoundTeamsHistory;
    }
}

/** PokerHand enum. */
export enum PokerHand {
    NoPair = 0,
    OnePair = 1,
    TwoPair = 2,
    Trips = 3,
    Straight = 4,
    Flush = 5,
    FlHouse = 6,
    Quads = 7,
    StFlush = 8
}

/** PokerStep enum. */
export enum PokerStep {
    PreFlop = 0,
    Flop = 1,
    Turn = 2,
    River = 3
}

/** Properties of a GameState888. */
export interface IGameState888 {

    /** GameState888 timers */
    timers?: (ITimers|null);

    /** GameState888 period */
    period?: (GameState888.Period|null);

    /** GameState888 step */
    step?: (PokerStep|null);

    /** GameState888 round */
    round?: (number|Long|null);

    /** GameState888 tables */
    tables?: (GameState888.ITable[]|null);

    /** GameState888 history */
    history?: (GameState888.IHistory[]|null);

    /** GameState888 gameStateCommonFields */
    gameStateCommonFields?: (IGameStateCommonFields|null);
}

/** Represents a GameState888. */
export class GameState888 implements IGameState888 {

    /**
     * Constructs a new GameState888.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameState888);

    /** GameState888 timers. */
    public timers?: (ITimers|null);

    /** GameState888 period. */
    public period: GameState888.Period;

    /** GameState888 step. */
    public step: PokerStep;

    /** GameState888 round. */
    public round: (number|Long);

    /** GameState888 tables. */
    public tables: GameState888.ITable[];

    /** GameState888 history. */
    public history: GameState888.IHistory[];

    /** GameState888 gameStateCommonFields. */
    public gameStateCommonFields?: (IGameStateCommonFields|null);

    /**
     * Creates a new GameState888 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameState888 instance
     */
    public static create(properties?: IGameState888): GameState888;

    /**
     * Encodes the specified GameState888 message. Does not implicitly {@link GameState888.verify|verify} messages.
     * @param message GameState888 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameState888, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameState888 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameState888
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState888;
}

export namespace GameState888 {

    /** Period enum. */
    enum Period {
        bet = 0,
        win = 1
    }

    /** Properties of a Table. */
    interface ITable {

        /** Table tableId */
        tableId?: (number|null);

        /** Table communityCards */
        communityCards?: (IPlayingCard[]|null);

        /** Table winHand */
        winHand?: (PokerHand|null);

        /** Table players */
        players?: (GameState888.Table.IPlayer[]|null);

        /** Table handsOdds */
        handsOdds?: (GameState888.Table.IHandOdds[]|null);
    }

    /** Represents a Table. */
    class Table implements ITable {

        /**
         * Constructs a new Table.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState888.ITable);

        /** Table tableId. */
        public tableId: number;

        /** Table communityCards. */
        public communityCards: IPlayingCard[];

        /** Table winHand. */
        public winHand: PokerHand;

        /** Table players. */
        public players: GameState888.Table.IPlayer[];

        /** Table handsOdds. */
        public handsOdds: GameState888.Table.IHandOdds[];

        /**
         * Creates a new Table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Table instance
         */
        public static create(properties?: GameState888.ITable): GameState888.Table;

        /**
         * Encodes the specified Table message. Does not implicitly {@link GameState888.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState888.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState888.Table;
    }

    namespace Table {

        /** Properties of a Player. */
        interface IPlayer {

            /** Player playerId */
            playerId?: (number|null);

            /** Player winCoeff */
            winCoeff?: (number|null);

            /** Player pocketCards */
            pocketCards?: (IPlayingCard[]|null);
        }

        /** Represents a Player. */
        class Player implements IPlayer {

            /**
             * Constructs a new Player.
             * @param [properties] Properties to set
             */
            constructor(properties?: GameState888.Table.IPlayer);

            /** Player playerId. */
            public playerId: number;

            /** Player winCoeff. */
            public winCoeff: number;

            /** Player pocketCards. */
            public pocketCards: IPlayingCard[];

            /**
             * Creates a new Player instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Player instance
             */
            public static create(properties?: GameState888.Table.IPlayer): GameState888.Table.Player;

            /**
             * Encodes the specified Player message. Does not implicitly {@link GameState888.Table.Player.verify|verify} messages.
             * @param message Player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GameState888.Table.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Player message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState888.Table.Player;
        }

        /** Properties of a HandOdds. */
        interface IHandOdds {

            /** HandOdds hand */
            hand?: (PokerHand|null);

            /** HandOdds winCoeff */
            winCoeff?: (number|null);
        }

        /** Represents a HandOdds. */
        class HandOdds implements IHandOdds {

            /**
             * Constructs a new HandOdds.
             * @param [properties] Properties to set
             */
            constructor(properties?: GameState888.Table.IHandOdds);

            /** HandOdds hand. */
            public hand: PokerHand;

            /** HandOdds winCoeff. */
            public winCoeff: number;

            /**
             * Creates a new HandOdds instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HandOdds instance
             */
            public static create(properties?: GameState888.Table.IHandOdds): GameState888.Table.HandOdds;

            /**
             * Encodes the specified HandOdds message. Does not implicitly {@link GameState888.Table.HandOdds.verify|verify} messages.
             * @param message HandOdds message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GameState888.Table.IHandOdds, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HandOdds message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HandOdds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState888.Table.HandOdds;
        }
    }

    /** Properties of a History. */
    interface IHistory {

        /** History roundId */
        roundId?: (number|Long|null);

        /** History tables */
        tables?: (GameState888.History.ITable[]|null);
    }

    /** Represents a History. */
    class History implements IHistory {

        /**
         * Constructs a new History.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameState888.IHistory);

        /** History roundId. */
        public roundId: (number|Long);

        /** History tables. */
        public tables: GameState888.History.ITable[];

        /**
         * Creates a new History instance using the specified properties.
         * @param [properties] Properties to set
         * @returns History instance
         */
        public static create(properties?: GameState888.IHistory): GameState888.History;

        /**
         * Encodes the specified History message. Does not implicitly {@link GameState888.History.verify|verify} messages.
         * @param message History message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameState888.IHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a History message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState888.History;
    }

    namespace History {

        /** Properties of a Table. */
        interface ITable {

            /** Table tableId */
            tableId?: (number|null);

            /** Table winPlayerIds */
            winPlayerIds?: (number[]|null);

            /** Table winHand */
            winHand?: (PokerHand|null);
        }

        /** Represents a Table. */
        class Table implements ITable {

            /**
             * Constructs a new Table.
             * @param [properties] Properties to set
             */
            constructor(properties?: GameState888.History.ITable);

            /** Table tableId. */
            public tableId: number;

            /** Table winPlayerIds. */
            public winPlayerIds: number[];

            /** Table winHand. */
            public winHand: PokerHand;

            /**
             * Creates a new Table instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Table instance
             */
            public static create(properties?: GameState888.History.ITable): GameState888.History.Table;

            /**
             * Encodes the specified Table message. Does not implicitly {@link GameState888.History.Table.verify|verify} messages.
             * @param message Table message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: GameState888.History.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Table message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Table
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameState888.History.Table;
        }
    }
}

/** Properties of a Bet888. */
export interface IBet888 {

    /** Bet888 round */
    round?: (number|Long|null);

    /** Bet888 step */
    step?: (PokerStep|null);

    /** Bet888 playerEvents */
    playerEvents?: (Bet888.IPlayerEvent[]|null);

    /** Bet888 handEvents */
    handEvents?: (Bet888.IHandEvent[]|null);

    /** Bet888 winCoeff */
    winCoeff?: (number|Long|null);
}

/** Represents a Bet888. */
export class Bet888 implements IBet888 {

    /**
     * Constructs a new Bet888.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBet888);

    /** Bet888 round. */
    public round: (number|Long);

    /** Bet888 step. */
    public step: PokerStep;

    /** Bet888 playerEvents. */
    public playerEvents: Bet888.IPlayerEvent[];

    /** Bet888 handEvents. */
    public handEvents: Bet888.IHandEvent[];

    /** Bet888 winCoeff. */
    public winCoeff: (number|Long);

    /**
     * Creates a new Bet888 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bet888 instance
     */
    public static create(properties?: IBet888): Bet888;

    /**
     * Encodes the specified Bet888 message. Does not implicitly {@link Bet888.verify|verify} messages.
     * @param message Bet888 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBet888, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bet888 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bet888
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet888;
}

export namespace Bet888 {

    /** Properties of a PlayerEvent. */
    interface IPlayerEvent {

        /** PlayerEvent tableId */
        tableId?: (number|null);

        /** PlayerEvent playerId */
        playerId?: (number|null);
    }

    /** Represents a PlayerEvent. */
    class PlayerEvent implements IPlayerEvent {

        /**
         * Constructs a new PlayerEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bet888.IPlayerEvent);

        /** PlayerEvent tableId. */
        public tableId: number;

        /** PlayerEvent playerId. */
        public playerId: number;

        /**
         * Creates a new PlayerEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerEvent instance
         */
        public static create(properties?: Bet888.IPlayerEvent): Bet888.PlayerEvent;

        /**
         * Encodes the specified PlayerEvent message. Does not implicitly {@link Bet888.PlayerEvent.verify|verify} messages.
         * @param message PlayerEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bet888.IPlayerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet888.PlayerEvent;
    }

    /** Properties of a HandEvent. */
    interface IHandEvent {

        /** HandEvent tableId */
        tableId?: (number|null);

        /** HandEvent hand */
        hand?: (PokerHand|null);
    }

    /** Represents a HandEvent. */
    class HandEvent implements IHandEvent {

        /**
         * Constructs a new HandEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: Bet888.IHandEvent);

        /** HandEvent tableId. */
        public tableId: number;

        /** HandEvent hand. */
        public hand: PokerHand;

        /**
         * Creates a new HandEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandEvent instance
         */
        public static create(properties?: Bet888.IHandEvent): Bet888.HandEvent;

        /**
         * Encodes the specified HandEvent message. Does not implicitly {@link Bet888.HandEvent.verify|verify} messages.
         * @param message HandEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Bet888.IHandEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HandEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bet888.HandEvent;
    }
}
