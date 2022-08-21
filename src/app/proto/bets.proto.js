/*eslint-disable*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * BetStatus enum.
 * @exports BetStatus
 * @enum {string}
 * @property {number} BS_undefined=0 BS_undefined value
 * @property {number} BS_denied=1 BS_denied value
 * @property {number} BS_accepted=2 BS_accepted value
 * @property {number} BS_user_canceled=3 BS_user_canceled value
 * @property {number} BS_calculated=4 BS_calculated value
 * @property {number} BS_want_cancel=5 BS_want_cancel value
 */
$root.BetStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "BS_undefined"] = 0;
    values[valuesById[1] = "BS_denied"] = 1;
    values[valuesById[2] = "BS_accepted"] = 2;
    values[valuesById[3] = "BS_user_canceled"] = 3;
    values[valuesById[4] = "BS_calculated"] = 4;
    values[valuesById[5] = "BS_want_cancel"] = 5;
    return values;
})();

/**
 * SessionError enum.
 * @exports SessionError
 * @enum {string}
 * @property {number} SE_undefined=0 SE_undefined value
 * @property {number} SE_balance_not_available=1 SE_balance_not_available value
 * @property {number} SE_broken_session=2 SE_broken_session value
 */
$root.SessionError = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SE_undefined"] = 0;
    values[valuesById[1] = "SE_balance_not_available"] = 1;
    values[valuesById[2] = "SE_broken_session"] = 2;
    return values;
})();

$root.Timers = (function() {

    /**
     * Properties of a Timers.
     * @exports ITimers
     * @interface ITimers
     * @property {number|Long|null} [begin] Timers begin
     * @property {number|Long|null} [current] Timers current
     * @property {number|Long|null} [end] Timers end
     */

    /**
     * Constructs a new Timers.
     * @exports Timers
     * @classdesc Represents a Timers.
     * @implements ITimers
     * @constructor
     * @param {ITimers=} [properties] Properties to set
     */
    function Timers(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Timers begin.
     * @member {number|Long} begin
     * @memberof Timers
     * @instance
     */
    Timers.prototype.begin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Timers current.
     * @member {number|Long} current
     * @memberof Timers
     * @instance
     */
    Timers.prototype.current = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Timers end.
     * @member {number|Long} end
     * @memberof Timers
     * @instance
     */
    Timers.prototype.end = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Timers instance using the specified properties.
     * @function create
     * @memberof Timers
     * @static
     * @param {ITimers=} [properties] Properties to set
     * @returns {Timers} Timers instance
     */
    Timers.create = function create(properties) {
        return new Timers(properties);
    };

    /**
     * Encodes the specified Timers message. Does not implicitly {@link Timers.verify|verify} messages.
     * @function encode
     * @memberof Timers
     * @static
     * @param {ITimers} message Timers message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Timers.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.begin != null && message.hasOwnProperty("begin"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.begin);
        if (message.current != null && message.hasOwnProperty("current"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.current);
        if (message.end != null && message.hasOwnProperty("end"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.end);
        return writer;
    };

    /**
     * Decodes a Timers message from the specified reader or buffer.
     * @function decode
     * @memberof Timers
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Timers} Timers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Timers.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.begin = reader.uint64();
                break;
            case 2:
                message.current = reader.uint64();
                break;
            case 3:
                message.end = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Timers;
})();

$root.Bet = (function() {

    /**
     * Properties of a Bet.
     * @exports IBet
     * @interface IBet
     * @property {string|null} [betId] Bet betId
     * @property {number|Long|null} [betAmount] Bet betAmount
     * @property {number|Long|null} [payAmount] Bet payAmount
     * @property {BetStatus|null} [status] Bet status
     * @property {number|null} [gameId] Bet gameId
     * @property {IBet888|null} [bet888] Bet bet888
     * @property {IBet7XX|null} [bet7xx] Bet bet7xx
     * @property {IBet886|null} [bet886] Bet bet886
     * @property {IBet1XXX|null} [bet1009] Bet bet1009
     * @property {IBet1013|null} [bet1013] Bet bet1013
     * @property {IBet999XX|null} [bet99920] Bet bet99920
     * @property {IBet1XXX|null} [bet1204] Bet bet1204
     * @property {IBet999XX|null} [bet99911] Bet bet99911
     * @property {IBet999XX|null} [bet99914] Bet bet99914
     * @property {IBet1024|null} [bet1024] Bet bet1024
     * @property {IBet4001|null} [bet4001] Bet bet4001
     * @property {IBet7XX|null} [bet2106] Bet bet2106
     * @property {IBet7XX|null} [bet2108] Bet bet2108
     * @property {IBet7XX|null} [bet2116] Bet bet2116
     * @property {IBet7XX|null} [bet2118] Bet bet2118
     * @property {IBet7XX|null} [bet2120] Bet bet2120
     * @property {IBet7XX|null} [bet2121] Bet bet2121
     * @property {IBet7XX|null} [bet2122] Bet bet2122
     * @property {IBet7XX|null} [bet2123] Bet bet2123
     * @property {IBet1XXX|null} [bet1018] Bet bet1018
     * @property {IBet1XXX|null} [bet1019] Bet bet1019
     * @property {IBet999XX|null} [bet99927] Bet bet99927
     * @property {number|Long|null} [createdAt] Bet createdAt
     */

    /**
     * Constructs a new Bet.
     * @exports Bet
     * @classdesc Represents a Bet.
     * @implements IBet
     * @constructor
     * @param {IBet=} [properties] Properties to set
     */
    function Bet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet betId.
     * @member {string} betId
     * @memberof Bet
     * @instance
     */
    Bet.prototype.betId = "";

    /**
     * Bet betAmount.
     * @member {number|Long} betAmount
     * @memberof Bet
     * @instance
     */
    Bet.prototype.betAmount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet payAmount.
     * @member {number|Long} payAmount
     * @memberof Bet
     * @instance
     */
    Bet.prototype.payAmount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet status.
     * @member {BetStatus} status
     * @memberof Bet
     * @instance
     */
    Bet.prototype.status = 0;

    /**
     * Bet gameId.
     * @member {number} gameId
     * @memberof Bet
     * @instance
     */
    Bet.prototype.gameId = 0;

    /**
     * Bet bet888.
     * @member {IBet888|null|undefined} bet888
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet888 = null;

    /**
     * Bet bet7xx.
     * @member {IBet7XX|null|undefined} bet7xx
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet7xx = null;

    /**
     * Bet bet886.
     * @member {IBet886|null|undefined} bet886
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet886 = null;

    /**
     * Bet bet1009.
     * @member {IBet1XXX|null|undefined} bet1009
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet1009 = null;

    /**
     * Bet bet1013.
     * @member {IBet1013|null|undefined} bet1013
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet1013 = null;

    /**
     * Bet bet99920.
     * @member {IBet999XX|null|undefined} bet99920
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet99920 = null;

    /**
     * Bet bet1204.
     * @member {IBet1XXX|null|undefined} bet1204
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet1204 = null;

    /**
     * Bet bet99911.
     * @member {IBet999XX|null|undefined} bet99911
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet99911 = null;

    /**
     * Bet bet99914.
     * @member {IBet999XX|null|undefined} bet99914
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet99914 = null;

    /**
     * Bet bet1024.
     * @member {IBet1024|null|undefined} bet1024
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet1024 = null;

    /**
     * Bet bet4001.
     * @member {IBet4001|null|undefined} bet4001
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet4001 = null;

    /**
     * Bet bet2106.
     * @member {IBet7XX|null|undefined} bet2106
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2106 = null;

    /**
     * Bet bet2108.
     * @member {IBet7XX|null|undefined} bet2108
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2108 = null;

    /**
     * Bet bet2116.
     * @member {IBet7XX|null|undefined} bet2116
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2116 = null;

    /**
     * Bet bet2118.
     * @member {IBet7XX|null|undefined} bet2118
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2118 = null;

    /**
     * Bet bet2120.
     * @member {IBet7XX|null|undefined} bet2120
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2120 = null;

    /**
     * Bet bet2121.
     * @member {IBet7XX|null|undefined} bet2121
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2121 = null;

    /**
     * Bet bet2122.
     * @member {IBet7XX|null|undefined} bet2122
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2122 = null;

    /**
     * Bet bet2123.
     * @member {IBet7XX|null|undefined} bet2123
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet2123 = null;

    /**
     * Bet bet1018.
     * @member {IBet1XXX|null|undefined} bet1018
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet1018 = null;

    /**
     * Bet bet1019.
     * @member {IBet1XXX|null|undefined} bet1019
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet1019 = null;

    /**
     * Bet bet99927.
     * @member {IBet999XX|null|undefined} bet99927
     * @memberof Bet
     * @instance
     */
    Bet.prototype.bet99927 = null;

    /**
     * Bet createdAt.
     * @member {number|Long} createdAt
     * @memberof Bet
     * @instance
     */
    Bet.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Bet instance using the specified properties.
     * @function create
     * @memberof Bet
     * @static
     * @param {IBet=} [properties] Properties to set
     * @returns {Bet} Bet instance
     */
    Bet.create = function create(properties) {
        return new Bet(properties);
    };

    /**
     * Encodes the specified Bet message. Does not implicitly {@link Bet.verify|verify} messages.
     * @function encode
     * @memberof Bet
     * @static
     * @param {IBet} message Bet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.betId != null && message.hasOwnProperty("betId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.betId);
        if (message.betAmount != null && message.hasOwnProperty("betAmount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.betAmount);
        if (message.payAmount != null && message.hasOwnProperty("payAmount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.payAmount);
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.gameId);
        if (message.bet888 != null && message.hasOwnProperty("bet888"))
            $root.Bet888.encode(message.bet888, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.bet7xx != null && message.hasOwnProperty("bet7xx"))
            $root.Bet7XX.encode(message.bet7xx, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.bet886 != null && message.hasOwnProperty("bet886"))
            $root.Bet886.encode(message.bet886, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.bet1009 != null && message.hasOwnProperty("bet1009"))
            $root.Bet1XXX.encode(message.bet1009, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.bet1013 != null && message.hasOwnProperty("bet1013"))
            $root.Bet1013.encode(message.bet1013, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.bet99920 != null && message.hasOwnProperty("bet99920"))
            $root.Bet999XX.encode(message.bet99920, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.bet1204 != null && message.hasOwnProperty("bet1204"))
            $root.Bet1XXX.encode(message.bet1204, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.bet99911 != null && message.hasOwnProperty("bet99911"))
            $root.Bet999XX.encode(message.bet99911, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.bet99914 != null && message.hasOwnProperty("bet99914"))
            $root.Bet999XX.encode(message.bet99914, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.bet1024 != null && message.hasOwnProperty("bet1024"))
            $root.Bet1024.encode(message.bet1024, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.bet4001 != null && message.hasOwnProperty("bet4001"))
            $root.Bet4001.encode(message.bet4001, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.bet2106 != null && message.hasOwnProperty("bet2106"))
            $root.Bet7XX.encode(message.bet2106, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.bet2108 != null && message.hasOwnProperty("bet2108"))
            $root.Bet7XX.encode(message.bet2108, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.bet2116 != null && message.hasOwnProperty("bet2116"))
            $root.Bet7XX.encode(message.bet2116, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.bet2118 != null && message.hasOwnProperty("bet2118"))
            $root.Bet7XX.encode(message.bet2118, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.bet2120 != null && message.hasOwnProperty("bet2120"))
            $root.Bet7XX.encode(message.bet2120, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.bet2121 != null && message.hasOwnProperty("bet2121"))
            $root.Bet7XX.encode(message.bet2121, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.bet2122 != null && message.hasOwnProperty("bet2122"))
            $root.Bet7XX.encode(message.bet2122, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.bet2123 != null && message.hasOwnProperty("bet2123"))
            $root.Bet7XX.encode(message.bet2123, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.bet1018 != null && message.hasOwnProperty("bet1018"))
            $root.Bet1XXX.encode(message.bet1018, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.bet1019 != null && message.hasOwnProperty("bet1019"))
            $root.Bet1XXX.encode(message.bet1019, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.bet99927 != null && message.hasOwnProperty("bet99927"))
            $root.Bet999XX.encode(message.bet99927, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 28, wireType 0 =*/224).uint64(message.createdAt);
        return writer;
    };

    /**
     * Decodes a Bet message from the specified reader or buffer.
     * @function decode
     * @memberof Bet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet} Bet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.betId = reader.string();
                break;
            case 2:
                message.betAmount = reader.uint64();
                break;
            case 3:
                message.payAmount = reader.uint64();
                break;
            case 4:
                message.status = reader.int32();
                break;
            case 5:
                message.gameId = reader.uint32();
                break;
            case 6:
                message.bet888 = $root.Bet888.decode(reader, reader.uint32());
                break;
            case 7:
                message.bet7xx = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 8:
                message.bet886 = $root.Bet886.decode(reader, reader.uint32());
                break;
            case 9:
                message.bet1009 = $root.Bet1XXX.decode(reader, reader.uint32());
                break;
            case 10:
                message.bet1013 = $root.Bet1013.decode(reader, reader.uint32());
                break;
            case 11:
                message.bet99920 = $root.Bet999XX.decode(reader, reader.uint32());
                break;
            case 12:
                message.bet1204 = $root.Bet1XXX.decode(reader, reader.uint32());
                break;
            case 13:
                message.bet99911 = $root.Bet999XX.decode(reader, reader.uint32());
                break;
            case 14:
                message.bet99914 = $root.Bet999XX.decode(reader, reader.uint32());
                break;
            case 15:
                message.bet1024 = $root.Bet1024.decode(reader, reader.uint32());
                break;
            case 16:
                message.bet4001 = $root.Bet4001.decode(reader, reader.uint32());
                break;
            case 17:
                message.bet2106 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 18:
                message.bet2108 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 19:
                message.bet2116 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 20:
                message.bet2118 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 21:
                message.bet2120 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 22:
                message.bet2121 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 23:
                message.bet2122 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 24:
                message.bet2123 = $root.Bet7XX.decode(reader, reader.uint32());
                break;
            case 25:
                message.bet1018 = $root.Bet1XXX.decode(reader, reader.uint32());
                break;
            case 26:
                message.bet1019 = $root.Bet1XXX.decode(reader, reader.uint32());
                break;
            case 27:
                message.bet99927 = $root.Bet999XX.decode(reader, reader.uint32());
                break;
            case 28:
                message.createdAt = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Bet;
})();

$root.Device = (function() {

    /**
     * Properties of a Device.
     * @exports IDevice
     * @interface IDevice
     * @property {string|null} [uuid] Device uuid
     * @property {string|null} [billing] Device billing
     * @property {string|null} [currency] Device currency
     * @property {number|Long|null} [balance] Device balance
     * @property {string|null} [sessionId] Device sessionId
     * @property {string|null} [billingSession] Device billingSession
     */

    /**
     * Constructs a new Device.
     * @exports Device
     * @classdesc Represents a Device.
     * @implements IDevice
     * @constructor
     * @param {IDevice=} [properties] Properties to set
     */
    function Device(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Device uuid.
     * @member {string} uuid
     * @memberof Device
     * @instance
     */
    Device.prototype.uuid = "";

    /**
     * Device billing.
     * @member {string} billing
     * @memberof Device
     * @instance
     */
    Device.prototype.billing = "";

    /**
     * Device currency.
     * @member {string} currency
     * @memberof Device
     * @instance
     */
    Device.prototype.currency = "";

    /**
     * Device balance.
     * @member {number|Long} balance
     * @memberof Device
     * @instance
     */
    Device.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Device sessionId.
     * @member {string} sessionId
     * @memberof Device
     * @instance
     */
    Device.prototype.sessionId = "";

    /**
     * Device billingSession.
     * @member {string} billingSession
     * @memberof Device
     * @instance
     */
    Device.prototype.billingSession = "";

    /**
     * Creates a new Device instance using the specified properties.
     * @function create
     * @memberof Device
     * @static
     * @param {IDevice=} [properties] Properties to set
     * @returns {Device} Device instance
     */
    Device.create = function create(properties) {
        return new Device(properties);
    };

    /**
     * Encodes the specified Device message. Does not implicitly {@link Device.verify|verify} messages.
     * @function encode
     * @memberof Device
     * @static
     * @param {IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.billing != null && message.hasOwnProperty("billing"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.billing);
        if (message.currency != null && message.hasOwnProperty("currency"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.currency);
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.balance);
        if (message.sessionId != null && message.hasOwnProperty("sessionId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.sessionId);
        if (message.billingSession != null && message.hasOwnProperty("billingSession"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.billingSession);
        return writer;
    };

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @function decode
     * @memberof Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Device();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                message.billing = reader.string();
                break;
            case 3:
                message.currency = reader.string();
                break;
            case 4:
                message.balance = reader.uint64();
                break;
            case 5:
                message.sessionId = reader.string();
                break;
            case 6:
                message.billingSession = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Device;
})();

$root.Request = (function() {

    /**
     * Properties of a Request.
     * @exports IRequest
     * @interface IRequest
     * @property {IDevice|null} [device] Request device
     * @property {Array.<IBet>|null} [bets] Request bets
     * @property {string|null} [hash] Request hash
     * @property {Array.<number>|null} [gamesIds] Request gamesIds
     */

    /**
     * Constructs a new Request.
     * @exports Request
     * @classdesc Represents a Request.
     * @implements IRequest
     * @constructor
     * @param {IRequest=} [properties] Properties to set
     */
    function Request(properties) {
        this.bets = [];
        this.gamesIds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Request device.
     * @member {IDevice|null|undefined} device
     * @memberof Request
     * @instance
     */
    Request.prototype.device = null;

    /**
     * Request bets.
     * @member {Array.<IBet>} bets
     * @memberof Request
     * @instance
     */
    Request.prototype.bets = $util.emptyArray;

    /**
     * Request hash.
     * @member {string} hash
     * @memberof Request
     * @instance
     */
    Request.prototype.hash = "";

    /**
     * Request gamesIds.
     * @member {Array.<number>} gamesIds
     * @memberof Request
     * @instance
     */
    Request.prototype.gamesIds = $util.emptyArray;

    /**
     * Creates a new Request instance using the specified properties.
     * @function create
     * @memberof Request
     * @static
     * @param {IRequest=} [properties] Properties to set
     * @returns {Request} Request instance
     */
    Request.create = function create(properties) {
        return new Request(properties);
    };

    /**
     * Encodes the specified Request message. Does not implicitly {@link Request.verify|verify} messages.
     * @function encode
     * @memberof Request
     * @static
     * @param {IRequest} message Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.device != null && message.hasOwnProperty("device"))
            $root.Device.encode(message.device, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.bets != null && message.bets.length)
            for (var i = 0; i < message.bets.length; ++i)
                $root.Bet.encode(message.bets[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.hash != null && message.hasOwnProperty("hash"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.hash);
        if (message.gamesIds != null && message.gamesIds.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.gamesIds.length; ++i)
                writer.uint32(message.gamesIds[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Decodes a Request message from the specified reader or buffer.
     * @function decode
     * @memberof Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Request} Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Request();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.device = $root.Device.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.bets && message.bets.length))
                    message.bets = [];
                message.bets.push($root.Bet.decode(reader, reader.uint32()));
                break;
            case 3:
                message.hash = reader.string();
                break;
            case 4:
                if (!(message.gamesIds && message.gamesIds.length))
                    message.gamesIds = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.gamesIds.push(reader.uint32());
                } else
                    message.gamesIds.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Request;
})();

$root.GameStateCommonFields = (function() {

    /**
     * Properties of a GameStateCommonFields.
     * @exports IGameStateCommonFields
     * @interface IGameStateCommonFields
     * @property {number|Long|null} [maxBet] GameStateCommonFields maxBet
     * @property {Array.<number|Long>|null} [slider] GameStateCommonFields slider
     * @property {boolean|null} [bettingPreBlocked] GameStateCommonFields bettingPreBlocked
     * @property {boolean|null} [bettingBlocked] GameStateCommonFields bettingBlocked
     * @property {GameStateCommonFields.ILastRoundStats|null} [lastRoundStats] GameStateCommonFields lastRoundStats
     */

    /**
     * Constructs a new GameStateCommonFields.
     * @exports GameStateCommonFields
     * @classdesc Represents a GameStateCommonFields.
     * @implements IGameStateCommonFields
     * @constructor
     * @param {IGameStateCommonFields=} [properties] Properties to set
     */
    function GameStateCommonFields(properties) {
        this.slider = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameStateCommonFields maxBet.
     * @member {number|Long} maxBet
     * @memberof GameStateCommonFields
     * @instance
     */
    GameStateCommonFields.prototype.maxBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameStateCommonFields slider.
     * @member {Array.<number|Long>} slider
     * @memberof GameStateCommonFields
     * @instance
     */
    GameStateCommonFields.prototype.slider = $util.emptyArray;

    /**
     * GameStateCommonFields bettingPreBlocked.
     * @member {boolean} bettingPreBlocked
     * @memberof GameStateCommonFields
     * @instance
     */
    GameStateCommonFields.prototype.bettingPreBlocked = false;

    /**
     * GameStateCommonFields bettingBlocked.
     * @member {boolean} bettingBlocked
     * @memberof GameStateCommonFields
     * @instance
     */
    GameStateCommonFields.prototype.bettingBlocked = false;

    /**
     * GameStateCommonFields lastRoundStats.
     * @member {GameStateCommonFields.ILastRoundStats|null|undefined} lastRoundStats
     * @memberof GameStateCommonFields
     * @instance
     */
    GameStateCommonFields.prototype.lastRoundStats = null;

    /**
     * Creates a new GameStateCommonFields instance using the specified properties.
     * @function create
     * @memberof GameStateCommonFields
     * @static
     * @param {IGameStateCommonFields=} [properties] Properties to set
     * @returns {GameStateCommonFields} GameStateCommonFields instance
     */
    GameStateCommonFields.create = function create(properties) {
        return new GameStateCommonFields(properties);
    };

    /**
     * Encodes the specified GameStateCommonFields message. Does not implicitly {@link GameStateCommonFields.verify|verify} messages.
     * @function encode
     * @memberof GameStateCommonFields
     * @static
     * @param {IGameStateCommonFields} message GameStateCommonFields message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStateCommonFields.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.maxBet != null && message.hasOwnProperty("maxBet"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.maxBet);
        if (message.slider != null && message.slider.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.slider.length; ++i)
                writer.uint64(message.slider[i]);
            writer.ldelim();
        }
        if (message.bettingPreBlocked != null && message.hasOwnProperty("bettingPreBlocked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bettingPreBlocked);
        if (message.bettingBlocked != null && message.hasOwnProperty("bettingBlocked"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.bettingBlocked);
        if (message.lastRoundStats != null && message.hasOwnProperty("lastRoundStats"))
            $root.GameStateCommonFields.LastRoundStats.encode(message.lastRoundStats, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameStateCommonFields message from the specified reader or buffer.
     * @function decode
     * @memberof GameStateCommonFields
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameStateCommonFields} GameStateCommonFields
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStateCommonFields.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameStateCommonFields();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.maxBet = reader.uint64();
                break;
            case 2:
                if (!(message.slider && message.slider.length))
                    message.slider = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.slider.push(reader.uint64());
                } else
                    message.slider.push(reader.uint64());
                break;
            case 3:
                message.bettingPreBlocked = reader.bool();
                break;
            case 4:
                message.bettingBlocked = reader.bool();
                break;
            case 5:
                message.lastRoundStats = $root.GameStateCommonFields.LastRoundStats.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GameStateCommonFields.LastRoundStats = (function() {

        /**
         * Properties of a LastRoundStats.
         * @memberof GameStateCommonFields
         * @interface ILastRoundStats
         * @property {number|Long|null} [roundId] LastRoundStats roundId
         * @property {number|Long|null} [beginTime] LastRoundStats beginTime
         * @property {number|Long|null} [balanceBegin] LastRoundStats balanceBegin
         * @property {number|Long|null} [balanceEnd] LastRoundStats balanceEnd
         * @property {number|Long|null} [totalBet] LastRoundStats totalBet
         * @property {number|Long|null} [totalWin] LastRoundStats totalWin
         */

        /**
         * Constructs a new LastRoundStats.
         * @memberof GameStateCommonFields
         * @classdesc Represents a LastRoundStats.
         * @implements ILastRoundStats
         * @constructor
         * @param {GameStateCommonFields.ILastRoundStats=} [properties] Properties to set
         */
        function LastRoundStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LastRoundStats roundId.
         * @member {number|Long} roundId
         * @memberof GameStateCommonFields.LastRoundStats
         * @instance
         */
        LastRoundStats.prototype.roundId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LastRoundStats beginTime.
         * @member {number|Long} beginTime
         * @memberof GameStateCommonFields.LastRoundStats
         * @instance
         */
        LastRoundStats.prototype.beginTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LastRoundStats balanceBegin.
         * @member {number|Long} balanceBegin
         * @memberof GameStateCommonFields.LastRoundStats
         * @instance
         */
        LastRoundStats.prototype.balanceBegin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LastRoundStats balanceEnd.
         * @member {number|Long} balanceEnd
         * @memberof GameStateCommonFields.LastRoundStats
         * @instance
         */
        LastRoundStats.prototype.balanceEnd = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LastRoundStats totalBet.
         * @member {number|Long} totalBet
         * @memberof GameStateCommonFields.LastRoundStats
         * @instance
         */
        LastRoundStats.prototype.totalBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LastRoundStats totalWin.
         * @member {number|Long} totalWin
         * @memberof GameStateCommonFields.LastRoundStats
         * @instance
         */
        LastRoundStats.prototype.totalWin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new LastRoundStats instance using the specified properties.
         * @function create
         * @memberof GameStateCommonFields.LastRoundStats
         * @static
         * @param {GameStateCommonFields.ILastRoundStats=} [properties] Properties to set
         * @returns {GameStateCommonFields.LastRoundStats} LastRoundStats instance
         */
        LastRoundStats.create = function create(properties) {
            return new LastRoundStats(properties);
        };

        /**
         * Encodes the specified LastRoundStats message. Does not implicitly {@link GameStateCommonFields.LastRoundStats.verify|verify} messages.
         * @function encode
         * @memberof GameStateCommonFields.LastRoundStats
         * @static
         * @param {GameStateCommonFields.ILastRoundStats} message LastRoundStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LastRoundStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roundId);
            if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.beginTime);
            if (message.balanceBegin != null && message.hasOwnProperty("balanceBegin"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.balanceBegin);
            if (message.balanceEnd != null && message.hasOwnProperty("balanceEnd"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.balanceEnd);
            if (message.totalBet != null && message.hasOwnProperty("totalBet"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalBet);
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.totalWin);
            return writer;
        };

        /**
         * Decodes a LastRoundStats message from the specified reader or buffer.
         * @function decode
         * @memberof GameStateCommonFields.LastRoundStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameStateCommonFields.LastRoundStats} LastRoundStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LastRoundStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameStateCommonFields.LastRoundStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roundId = reader.uint64();
                    break;
                case 2:
                    message.beginTime = reader.uint64();
                    break;
                case 3:
                    message.balanceBegin = reader.uint64();
                    break;
                case 4:
                    message.balanceEnd = reader.uint64();
                    break;
                case 5:
                    message.totalBet = reader.uint64();
                    break;
                case 6:
                    message.totalWin = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LastRoundStats;
    })();

    return GameStateCommonFields;
})();

$root.Response = (function() {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {Array.<IBet>|null} [bets] Response bets
     * @property {IDevice|null} [device] Response device
     * @property {number|Long|null} [maxBet] Response maxBet
     * @property {Array.<number|Long>|null} [slider] Response slider
     * @property {SessionError|null} [error] Response error
     * @property {string|null} [hash] Response hash
     * @property {boolean|null} [bettingBlocked] Response bettingBlocked
     * @property {boolean|null} [bettingPreBlocked] Response bettingPreBlocked
     * @property {IGameState888|null} [gamestate888] Response gamestate888
     * @property {IGameState7XX|null} [gamestate7xx] Response gamestate7xx
     * @property {IGameState886|null} [gamestate886] Response gamestate886
     * @property {IGameState1XXX|null} [gamestate1009] Response gamestate1009
     * @property {IGameState1013|null} [gamestate1013] Response gamestate1013
     * @property {IGameState999XX|null} [gamestate99920] Response gamestate99920
     * @property {IGameState1XXX|null} [gamestate1204] Response gamestate1204
     * @property {IGameState999XX|null} [gamestate99911] Response gamestate99911
     * @property {IGameState999XX|null} [gamestate99914] Response gamestate99914
     * @property {IGameState1024|null} [gamestate1024] Response gamestate1024
     * @property {IGameState4001|null} [gamestate4001] Response gamestate4001
     * @property {IGameState7XX|null} [gamestate2106] Response gamestate2106
     * @property {IGameState7XX|null} [gamestate2108] Response gamestate2108
     * @property {IGameState7XX|null} [gamestate2116] Response gamestate2116
     * @property {IGameState7XX|null} [gamestate2118] Response gamestate2118
     * @property {IGameState7XX|null} [gamestate2120] Response gamestate2120
     * @property {IGameState7XX|null} [gamestate2121] Response gamestate2121
     * @property {IGameState7XX|null} [gamestate2122] Response gamestate2122
     * @property {IGameState7XX|null} [gamestate2123] Response gamestate2123
     * @property {IGameState1XXX|null} [gamestate1018] Response gamestate1018
     * @property {IGameState1XXX|null} [gamestate1019] Response gamestate1019
     * @property {IGameState999XX|null} [gamestate99927] Response gamestate99927
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        this.bets = [];
        this.slider = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response bets.
     * @member {Array.<IBet>} bets
     * @memberof Response
     * @instance
     */
    Response.prototype.bets = $util.emptyArray;

    /**
     * Response device.
     * @member {IDevice|null|undefined} device
     * @memberof Response
     * @instance
     */
    Response.prototype.device = null;

    /**
     * Response maxBet.
     * @member {number|Long} maxBet
     * @memberof Response
     * @instance
     */
    Response.prototype.maxBet = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Response slider.
     * @member {Array.<number|Long>} slider
     * @memberof Response
     * @instance
     */
    Response.prototype.slider = $util.emptyArray;

    /**
     * Response error.
     * @member {SessionError} error
     * @memberof Response
     * @instance
     */
    Response.prototype.error = 0;

    /**
     * Response hash.
     * @member {string} hash
     * @memberof Response
     * @instance
     */
    Response.prototype.hash = "";

    /**
     * Response bettingBlocked.
     * @member {boolean} bettingBlocked
     * @memberof Response
     * @instance
     */
    Response.prototype.bettingBlocked = false;

    /**
     * Response bettingPreBlocked.
     * @member {boolean} bettingPreBlocked
     * @memberof Response
     * @instance
     */
    Response.prototype.bettingPreBlocked = false;

    /**
     * Response gamestate888.
     * @member {IGameState888|null|undefined} gamestate888
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate888 = null;

    /**
     * Response gamestate7xx.
     * @member {IGameState7XX|null|undefined} gamestate7xx
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate7xx = null;

    /**
     * Response gamestate886.
     * @member {IGameState886|null|undefined} gamestate886
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate886 = null;

    /**
     * Response gamestate1009.
     * @member {IGameState1XXX|null|undefined} gamestate1009
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate1009 = null;

    /**
     * Response gamestate1013.
     * @member {IGameState1013|null|undefined} gamestate1013
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate1013 = null;

    /**
     * Response gamestate99920.
     * @member {IGameState999XX|null|undefined} gamestate99920
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate99920 = null;

    /**
     * Response gamestate1204.
     * @member {IGameState1XXX|null|undefined} gamestate1204
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate1204 = null;

    /**
     * Response gamestate99911.
     * @member {IGameState999XX|null|undefined} gamestate99911
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate99911 = null;

    /**
     * Response gamestate99914.
     * @member {IGameState999XX|null|undefined} gamestate99914
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate99914 = null;

    /**
     * Response gamestate1024.
     * @member {IGameState1024|null|undefined} gamestate1024
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate1024 = null;

    /**
     * Response gamestate4001.
     * @member {IGameState4001|null|undefined} gamestate4001
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate4001 = null;

    /**
     * Response gamestate2106.
     * @member {IGameState7XX|null|undefined} gamestate2106
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2106 = null;

    /**
     * Response gamestate2108.
     * @member {IGameState7XX|null|undefined} gamestate2108
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2108 = null;

    /**
     * Response gamestate2116.
     * @member {IGameState7XX|null|undefined} gamestate2116
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2116 = null;

    /**
     * Response gamestate2118.
     * @member {IGameState7XX|null|undefined} gamestate2118
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2118 = null;

    /**
     * Response gamestate2120.
     * @member {IGameState7XX|null|undefined} gamestate2120
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2120 = null;

    /**
     * Response gamestate2121.
     * @member {IGameState7XX|null|undefined} gamestate2121
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2121 = null;

    /**
     * Response gamestate2122.
     * @member {IGameState7XX|null|undefined} gamestate2122
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2122 = null;

    /**
     * Response gamestate2123.
     * @member {IGameState7XX|null|undefined} gamestate2123
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate2123 = null;

    /**
     * Response gamestate1018.
     * @member {IGameState1XXX|null|undefined} gamestate1018
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate1018 = null;

    /**
     * Response gamestate1019.
     * @member {IGameState1XXX|null|undefined} gamestate1019
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate1019 = null;

    /**
     * Response gamestate99927.
     * @member {IGameState999XX|null|undefined} gamestate99927
     * @memberof Response
     * @instance
     */
    Response.prototype.gamestate99927 = null;

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bets != null && message.bets.length)
            for (var i = 0; i < message.bets.length; ++i)
                $root.Bet.encode(message.bets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.device != null && message.hasOwnProperty("device"))
            $root.Device.encode(message.device, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.maxBet != null && message.hasOwnProperty("maxBet"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.maxBet);
        if (message.slider != null && message.slider.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (var i = 0; i < message.slider.length; ++i)
                writer.uint64(message.slider[i]);
            writer.ldelim();
        }
        if (message.error != null && message.hasOwnProperty("error"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.error);
        if (message.hash != null && message.hasOwnProperty("hash"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.hash);
        if (message.bettingBlocked != null && message.hasOwnProperty("bettingBlocked"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.bettingBlocked);
        if (message.bettingPreBlocked != null && message.hasOwnProperty("bettingPreBlocked"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.bettingPreBlocked);
        if (message.gamestate888 != null && message.hasOwnProperty("gamestate888"))
            $root.GameState888.encode(message.gamestate888, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.gamestate7xx != null && message.hasOwnProperty("gamestate7xx"))
            $root.GameState7XX.encode(message.gamestate7xx, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.gamestate886 != null && message.hasOwnProperty("gamestate886"))
            $root.GameState886.encode(message.gamestate886, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.gamestate1009 != null && message.hasOwnProperty("gamestate1009"))
            $root.GameState1XXX.encode(message.gamestate1009, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.gamestate1013 != null && message.hasOwnProperty("gamestate1013"))
            $root.GameState1013.encode(message.gamestate1013, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.gamestate99920 != null && message.hasOwnProperty("gamestate99920"))
            $root.GameState999XX.encode(message.gamestate99920, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.gamestate1204 != null && message.hasOwnProperty("gamestate1204"))
            $root.GameState1XXX.encode(message.gamestate1204, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.gamestate99911 != null && message.hasOwnProperty("gamestate99911"))
            $root.GameState999XX.encode(message.gamestate99911, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.gamestate99914 != null && message.hasOwnProperty("gamestate99914"))
            $root.GameState999XX.encode(message.gamestate99914, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.gamestate1024 != null && message.hasOwnProperty("gamestate1024"))
            $root.GameState1024.encode(message.gamestate1024, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.gamestate4001 != null && message.hasOwnProperty("gamestate4001"))
            $root.GameState4001.encode(message.gamestate4001, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.gamestate2106 != null && message.hasOwnProperty("gamestate2106"))
            $root.GameState7XX.encode(message.gamestate2106, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.gamestate2108 != null && message.hasOwnProperty("gamestate2108"))
            $root.GameState7XX.encode(message.gamestate2108, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.gamestate2116 != null && message.hasOwnProperty("gamestate2116"))
            $root.GameState7XX.encode(message.gamestate2116, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.gamestate2118 != null && message.hasOwnProperty("gamestate2118"))
            $root.GameState7XX.encode(message.gamestate2118, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.gamestate2120 != null && message.hasOwnProperty("gamestate2120"))
            $root.GameState7XX.encode(message.gamestate2120, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.gamestate2121 != null && message.hasOwnProperty("gamestate2121"))
            $root.GameState7XX.encode(message.gamestate2121, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.gamestate2122 != null && message.hasOwnProperty("gamestate2122"))
            $root.GameState7XX.encode(message.gamestate2122, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.gamestate2123 != null && message.hasOwnProperty("gamestate2123"))
            $root.GameState7XX.encode(message.gamestate2123, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.gamestate1018 != null && message.hasOwnProperty("gamestate1018"))
            $root.GameState1XXX.encode(message.gamestate1018, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.gamestate1019 != null && message.hasOwnProperty("gamestate1019"))
            $root.GameState1XXX.encode(message.gamestate1019, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.gamestate99927 != null && message.hasOwnProperty("gamestate99927"))
            $root.GameState999XX.encode(message.gamestate99927, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.bets && message.bets.length))
                    message.bets = [];
                message.bets.push($root.Bet.decode(reader, reader.uint32()));
                break;
            case 2:
                message.device = $root.Device.decode(reader, reader.uint32());
                break;
            case 3:
                message.maxBet = reader.uint64();
                break;
            case 4:
                if (!(message.slider && message.slider.length))
                    message.slider = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.slider.push(reader.uint64());
                } else
                    message.slider.push(reader.uint64());
                break;
            case 5:
                message.error = reader.int32();
                break;
            case 6:
                message.hash = reader.string();
                break;
            case 7:
                message.bettingBlocked = reader.bool();
                break;
            case 8:
                message.bettingPreBlocked = reader.bool();
                break;
            case 9:
                message.gamestate888 = $root.GameState888.decode(reader, reader.uint32());
                break;
            case 10:
                message.gamestate7xx = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 11:
                message.gamestate886 = $root.GameState886.decode(reader, reader.uint32());
                break;
            case 12:
                message.gamestate1009 = $root.GameState1XXX.decode(reader, reader.uint32());
                break;
            case 13:
                message.gamestate1013 = $root.GameState1013.decode(reader, reader.uint32());
                break;
            case 14:
                message.gamestate99920 = $root.GameState999XX.decode(reader, reader.uint32());
                break;
            case 15:
                message.gamestate1204 = $root.GameState1XXX.decode(reader, reader.uint32());
                break;
            case 16:
                message.gamestate99911 = $root.GameState999XX.decode(reader, reader.uint32());
                break;
            case 17:
                message.gamestate99914 = $root.GameState999XX.decode(reader, reader.uint32());
                break;
            case 18:
                message.gamestate1024 = $root.GameState1024.decode(reader, reader.uint32());
                break;
            case 19:
                message.gamestate4001 = $root.GameState4001.decode(reader, reader.uint32());
                break;
            case 20:
                message.gamestate2106 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 21:
                message.gamestate2108 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 22:
                message.gamestate2116 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 23:
                message.gamestate2118 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 24:
                message.gamestate2120 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 25:
                message.gamestate2121 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 26:
                message.gamestate2122 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 27:
                message.gamestate2123 = $root.GameState7XX.decode(reader, reader.uint32());
                break;
            case 28:
                message.gamestate1018 = $root.GameState1XXX.decode(reader, reader.uint32());
                break;
            case 29:
                message.gamestate1019 = $root.GameState1XXX.decode(reader, reader.uint32());
                break;
            case 30:
                message.gamestate99927 = $root.GameState999XX.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Response;
})();

$root.PlayingCard = (function() {

    /**
     * Properties of a PlayingCard.
     * @exports IPlayingCard
     * @interface IPlayingCard
     * @property {PlayingCard.Suit|null} [suit] PlayingCard suit
     * @property {PlayingCard.Value|null} [value] PlayingCard value
     */

    /**
     * Constructs a new PlayingCard.
     * @exports PlayingCard
     * @classdesc Represents a PlayingCard.
     * @implements IPlayingCard
     * @constructor
     * @param {IPlayingCard=} [properties] Properties to set
     */
    function PlayingCard(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayingCard suit.
     * @member {PlayingCard.Suit} suit
     * @memberof PlayingCard
     * @instance
     */
    PlayingCard.prototype.suit = 0;

    /**
     * PlayingCard value.
     * @member {PlayingCard.Value} value
     * @memberof PlayingCard
     * @instance
     */
    PlayingCard.prototype.value = 0;

    /**
     * Creates a new PlayingCard instance using the specified properties.
     * @function create
     * @memberof PlayingCard
     * @static
     * @param {IPlayingCard=} [properties] Properties to set
     * @returns {PlayingCard} PlayingCard instance
     */
    PlayingCard.create = function create(properties) {
        return new PlayingCard(properties);
    };

    /**
     * Encodes the specified PlayingCard message. Does not implicitly {@link PlayingCard.verify|verify} messages.
     * @function encode
     * @memberof PlayingCard
     * @static
     * @param {IPlayingCard} message PlayingCard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayingCard.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.suit != null && message.hasOwnProperty("suit"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.suit);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
        return writer;
    };

    /**
     * Decodes a PlayingCard message from the specified reader or buffer.
     * @function decode
     * @memberof PlayingCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayingCard} PlayingCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayingCard.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayingCard();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.suit = reader.int32();
                break;
            case 2:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Suit enum.
     * @name PlayingCard.Suit
     * @enum {string}
     * @property {number} Spades=0 Spades value
     * @property {number} Clubs=1 Clubs value
     * @property {number} Diamonds=2 Diamonds value
     * @property {number} Hearts=3 Hearts value
     */
    PlayingCard.Suit = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Spades"] = 0;
        values[valuesById[1] = "Clubs"] = 1;
        values[valuesById[2] = "Diamonds"] = 2;
        values[valuesById[3] = "Hearts"] = 3;
        return values;
    })();

    /**
     * Value enum.
     * @name PlayingCard.Value
     * @enum {string}
     * @property {number} V2=0 V2 value
     * @property {number} V3=1 V3 value
     * @property {number} V4=2 V4 value
     * @property {number} V5=3 V5 value
     * @property {number} V6=4 V6 value
     * @property {number} V7=5 V7 value
     * @property {number} V8=6 V8 value
     * @property {number} V9=7 V9 value
     * @property {number} V10=8 V10 value
     * @property {number} Jack=9 Jack value
     * @property {number} Queen=10 Queen value
     * @property {number} King=11 King value
     * @property {number} Ace=12 Ace value
     */
    PlayingCard.Value = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "V2"] = 0;
        values[valuesById[1] = "V3"] = 1;
        values[valuesById[2] = "V4"] = 2;
        values[valuesById[3] = "V5"] = 3;
        values[valuesById[4] = "V6"] = 4;
        values[valuesById[5] = "V7"] = 5;
        values[valuesById[6] = "V8"] = 6;
        values[valuesById[7] = "V9"] = 7;
        values[valuesById[8] = "V10"] = 8;
        values[valuesById[9] = "Jack"] = 9;
        values[valuesById[10] = "Queen"] = 10;
        values[valuesById[11] = "King"] = 11;
        values[valuesById[12] = "Ace"] = 12;
        return values;
    })();

    return PlayingCard;
})();

$root.RouletteBet = (function() {

    /**
     * Properties of a RouletteBet.
     * @exports IRouletteBet
     * @interface IRouletteBet
     * @property {RouletteBet.Type|null} [type] RouletteBet type
     * @property {RouletteBet.Alias|null} [alias] RouletteBet alias
     * @property {Array.<number>|null} [sectorList] RouletteBet sectorList
     */

    /**
     * Constructs a new RouletteBet.
     * @exports RouletteBet
     * @classdesc Represents a RouletteBet.
     * @implements IRouletteBet
     * @constructor
     * @param {IRouletteBet=} [properties] Properties to set
     */
    function RouletteBet(properties) {
        this.sectorList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RouletteBet type.
     * @member {RouletteBet.Type} type
     * @memberof RouletteBet
     * @instance
     */
    RouletteBet.prototype.type = 0;

    /**
     * RouletteBet alias.
     * @member {RouletteBet.Alias} alias
     * @memberof RouletteBet
     * @instance
     */
    RouletteBet.prototype.alias = 0;

    /**
     * RouletteBet sectorList.
     * @member {Array.<number>} sectorList
     * @memberof RouletteBet
     * @instance
     */
    RouletteBet.prototype.sectorList = $util.emptyArray;

    /**
     * Creates a new RouletteBet instance using the specified properties.
     * @function create
     * @memberof RouletteBet
     * @static
     * @param {IRouletteBet=} [properties] Properties to set
     * @returns {RouletteBet} RouletteBet instance
     */
    RouletteBet.create = function create(properties) {
        return new RouletteBet(properties);
    };

    /**
     * Encodes the specified RouletteBet message. Does not implicitly {@link RouletteBet.verify|verify} messages.
     * @function encode
     * @memberof RouletteBet
     * @static
     * @param {IRouletteBet} message RouletteBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RouletteBet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.alias != null && message.hasOwnProperty("alias"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.alias);
        if (message.sectorList != null && message.sectorList.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.sectorList.length; ++i)
                writer.uint32(message.sectorList[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Decodes a RouletteBet message from the specified reader or buffer.
     * @function decode
     * @memberof RouletteBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RouletteBet} RouletteBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RouletteBet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RouletteBet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.alias = reader.int32();
                break;
            case 3:
                if (!(message.sectorList && message.sectorList.length))
                    message.sectorList = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.sectorList.push(reader.uint32());
                } else
                    message.sectorList.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Type enum.
     * @name RouletteBet.Type
     * @enum {string}
     * @property {number} SECTOR_LIST=0 SECTOR_LIST value
     * @property {number} ALIAS=1 ALIAS value
     */
    RouletteBet.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SECTOR_LIST"] = 0;
        values[valuesById[1] = "ALIAS"] = 1;
        return values;
    })();

    /**
     * Alias enum.
     * @name RouletteBet.Alias
     * @enum {string}
     * @property {number} red=0 red value
     * @property {number} black=1 black value
     * @property {number} big=2 big value
     * @property {number} small=3 small value
     * @property {number} odd=4 odd value
     * @property {number} even=5 even value
     * @property {number} col1=6 col1 value
     * @property {number} col2=7 col2 value
     * @property {number} col3=8 col3 value
     * @property {number} row1=9 row1 value
     * @property {number} row2=10 row2 value
     * @property {number} row3=11 row3 value
     */
    RouletteBet.Alias = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "red"] = 0;
        values[valuesById[1] = "black"] = 1;
        values[valuesById[2] = "big"] = 2;
        values[valuesById[3] = "small"] = 3;
        values[valuesById[4] = "odd"] = 4;
        values[valuesById[5] = "even"] = 5;
        values[valuesById[6] = "col1"] = 6;
        values[valuesById[7] = "col2"] = 7;
        values[valuesById[8] = "col3"] = 8;
        values[valuesById[9] = "row1"] = 9;
        values[valuesById[10] = "row2"] = 10;
        values[valuesById[11] = "row3"] = 11;
        return values;
    })();

    return RouletteBet;
})();

$root.RouletteMaxBets = (function() {

    /**
     * Properties of a RouletteMaxBets.
     * @exports IRouletteMaxBets
     * @interface IRouletteMaxBets
     * @property {number|null} [N1] RouletteMaxBets N1
     * @property {number|null} [N2] RouletteMaxBets N2
     * @property {number|null} [N3] RouletteMaxBets N3
     * @property {number|null} [N4] RouletteMaxBets N4
     * @property {number|null} [N6] RouletteMaxBets N6
     * @property {number|null} [red] RouletteMaxBets red
     * @property {number|null} [black] RouletteMaxBets black
     * @property {number|null} [big] RouletteMaxBets big
     * @property {number|null} [small] RouletteMaxBets small
     * @property {number|null} [odd] RouletteMaxBets odd
     * @property {number|null} [even] RouletteMaxBets even
     * @property {number|null} [col1] RouletteMaxBets col1
     * @property {number|null} [col2] RouletteMaxBets col2
     * @property {number|null} [col3] RouletteMaxBets col3
     * @property {number|null} [row1] RouletteMaxBets row1
     * @property {number|null} [row2] RouletteMaxBets row2
     * @property {number|null} [row3] RouletteMaxBets row3
     * @property {number|null} [allRound] RouletteMaxBets allRound
     */

    /**
     * Constructs a new RouletteMaxBets.
     * @exports RouletteMaxBets
     * @classdesc Represents a RouletteMaxBets.
     * @implements IRouletteMaxBets
     * @constructor
     * @param {IRouletteMaxBets=} [properties] Properties to set
     */
    function RouletteMaxBets(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RouletteMaxBets N1.
     * @member {number} N1
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.N1 = 0;

    /**
     * RouletteMaxBets N2.
     * @member {number} N2
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.N2 = 0;

    /**
     * RouletteMaxBets N3.
     * @member {number} N3
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.N3 = 0;

    /**
     * RouletteMaxBets N4.
     * @member {number} N4
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.N4 = 0;

    /**
     * RouletteMaxBets N6.
     * @member {number} N6
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.N6 = 0;

    /**
     * RouletteMaxBets red.
     * @member {number} red
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.red = 0;

    /**
     * RouletteMaxBets black.
     * @member {number} black
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.black = 0;

    /**
     * RouletteMaxBets big.
     * @member {number} big
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.big = 0;

    /**
     * RouletteMaxBets small.
     * @member {number} small
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.small = 0;

    /**
     * RouletteMaxBets odd.
     * @member {number} odd
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.odd = 0;

    /**
     * RouletteMaxBets even.
     * @member {number} even
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.even = 0;

    /**
     * RouletteMaxBets col1.
     * @member {number} col1
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.col1 = 0;

    /**
     * RouletteMaxBets col2.
     * @member {number} col2
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.col2 = 0;

    /**
     * RouletteMaxBets col3.
     * @member {number} col3
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.col3 = 0;

    /**
     * RouletteMaxBets row1.
     * @member {number} row1
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.row1 = 0;

    /**
     * RouletteMaxBets row2.
     * @member {number} row2
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.row2 = 0;

    /**
     * RouletteMaxBets row3.
     * @member {number} row3
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.row3 = 0;

    /**
     * RouletteMaxBets allRound.
     * @member {number} allRound
     * @memberof RouletteMaxBets
     * @instance
     */
    RouletteMaxBets.prototype.allRound = 0;

    /**
     * Creates a new RouletteMaxBets instance using the specified properties.
     * @function create
     * @memberof RouletteMaxBets
     * @static
     * @param {IRouletteMaxBets=} [properties] Properties to set
     * @returns {RouletteMaxBets} RouletteMaxBets instance
     */
    RouletteMaxBets.create = function create(properties) {
        return new RouletteMaxBets(properties);
    };

    /**
     * Encodes the specified RouletteMaxBets message. Does not implicitly {@link RouletteMaxBets.verify|verify} messages.
     * @function encode
     * @memberof RouletteMaxBets
     * @static
     * @param {IRouletteMaxBets} message RouletteMaxBets message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RouletteMaxBets.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.N1 != null && message.hasOwnProperty("N1"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.N1);
        if (message.N2 != null && message.hasOwnProperty("N2"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.N2);
        if (message.N3 != null && message.hasOwnProperty("N3"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.N3);
        if (message.N4 != null && message.hasOwnProperty("N4"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.N4);
        if (message.N6 != null && message.hasOwnProperty("N6"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.N6);
        if (message.red != null && message.hasOwnProperty("red"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.red);
        if (message.black != null && message.hasOwnProperty("black"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.black);
        if (message.big != null && message.hasOwnProperty("big"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.big);
        if (message.small != null && message.hasOwnProperty("small"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.small);
        if (message.odd != null && message.hasOwnProperty("odd"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.odd);
        if (message.even != null && message.hasOwnProperty("even"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.even);
        if (message.col1 != null && message.hasOwnProperty("col1"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.col1);
        if (message.col2 != null && message.hasOwnProperty("col2"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.col2);
        if (message.col3 != null && message.hasOwnProperty("col3"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.col3);
        if (message.row1 != null && message.hasOwnProperty("row1"))
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.row1);
        if (message.row2 != null && message.hasOwnProperty("row2"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.row2);
        if (message.row3 != null && message.hasOwnProperty("row3"))
            writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.row3);
        if (message.allRound != null && message.hasOwnProperty("allRound"))
            writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.allRound);
        return writer;
    };

    /**
     * Decodes a RouletteMaxBets message from the specified reader or buffer.
     * @function decode
     * @memberof RouletteMaxBets
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RouletteMaxBets} RouletteMaxBets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RouletteMaxBets.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RouletteMaxBets();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.N1 = reader.uint32();
                break;
            case 2:
                message.N2 = reader.uint32();
                break;
            case 3:
                message.N3 = reader.uint32();
                break;
            case 4:
                message.N4 = reader.uint32();
                break;
            case 5:
                message.N6 = reader.uint32();
                break;
            case 6:
                message.red = reader.uint32();
                break;
            case 7:
                message.black = reader.uint32();
                break;
            case 8:
                message.big = reader.uint32();
                break;
            case 9:
                message.small = reader.uint32();
                break;
            case 10:
                message.odd = reader.uint32();
                break;
            case 11:
                message.even = reader.uint32();
                break;
            case 12:
                message.col1 = reader.uint32();
                break;
            case 13:
                message.col2 = reader.uint32();
                break;
            case 14:
                message.col3 = reader.uint32();
                break;
            case 15:
                message.row1 = reader.uint32();
                break;
            case 16:
                message.row2 = reader.uint32();
                break;
            case 17:
                message.row3 = reader.uint32();
                break;
            case 18:
                message.allRound = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return RouletteMaxBets;
})();

/**
 * Dynamics enum.
 * @exports Dynamics
 * @enum {string}
 * @property {number} equal=0 equal value
 * @property {number} up=1 up value
 * @property {number} down=2 down value
 */
$root.Dynamics = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "equal"] = 0;
    values[valuesById[1] = "up"] = 1;
    values[valuesById[2] = "down"] = 2;
    return values;
})();

$root.GameState1XXX = (function() {

    /**
     * Properties of a GameState1XXX.
     * @exports IGameState1XXX
     * @interface IGameState1XXX
     * @property {ITimers|null} [timers] GameState1XXX timers
     * @property {GameState1XXX.Period|null} [period] GameState1XXX period
     * @property {number|Long|null} [round] GameState1XXX round
     * @property {Array.<GameState1XXX.IHistoryItem>|null} [history] GameState1XXX history
     * @property {Array.<number>|null} [stats] GameState1XXX stats
     * @property {IRouletteMaxBets|null} [maxbets] GameState1XXX maxbets
     * @property {string|null} [link] GameState1XXX link
     * @property {string|null} [startLink] GameState1XXX startLink
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState1XXX gameStateCommonFields
     * @property {Array.<number>|null} [stakes] GameState1XXX stakes
     */

    /**
     * Constructs a new GameState1XXX.
     * @exports GameState1XXX
     * @classdesc Represents a GameState1XXX.
     * @implements IGameState1XXX
     * @constructor
     * @param {IGameState1XXX=} [properties] Properties to set
     */
    function GameState1XXX(properties) {
        this.history = [];
        this.stats = [];
        this.stakes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState1XXX timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.timers = null;

    /**
     * GameState1XXX period.
     * @member {GameState1XXX.Period} period
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.period = 0;

    /**
     * GameState1XXX round.
     * @member {number|Long} round
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState1XXX history.
     * @member {Array.<GameState1XXX.IHistoryItem>} history
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.history = $util.emptyArray;

    /**
     * GameState1XXX stats.
     * @member {Array.<number>} stats
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.stats = $util.emptyArray;

    /**
     * GameState1XXX maxbets.
     * @member {IRouletteMaxBets|null|undefined} maxbets
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.maxbets = null;

    /**
     * GameState1XXX link.
     * @member {string} link
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.link = "";

    /**
     * GameState1XXX startLink.
     * @member {string} startLink
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.startLink = "";

    /**
     * GameState1XXX gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.gameStateCommonFields = null;

    /**
     * GameState1XXX stakes.
     * @member {Array.<number>} stakes
     * @memberof GameState1XXX
     * @instance
     */
    GameState1XXX.prototype.stakes = $util.emptyArray;

    /**
     * Creates a new GameState1XXX instance using the specified properties.
     * @function create
     * @memberof GameState1XXX
     * @static
     * @param {IGameState1XXX=} [properties] Properties to set
     * @returns {GameState1XXX} GameState1XXX instance
     */
    GameState1XXX.create = function create(properties) {
        return new GameState1XXX(properties);
    };

    /**
     * Encodes the specified GameState1XXX message. Does not implicitly {@link GameState1XXX.verify|verify} messages.
     * @function encode
     * @memberof GameState1XXX
     * @static
     * @param {IGameState1XXX} message GameState1XXX message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState1XXX.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.history != null && message.history.length)
            for (var i = 0; i < message.history.length; ++i)
                $root.GameState1XXX.HistoryItem.encode(message.history[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.stats != null && message.stats.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.stats.length; ++i)
                writer.uint32(message.stats[i]);
            writer.ldelim();
        }
        if (message.maxbets != null && message.hasOwnProperty("maxbets"))
            $root.RouletteMaxBets.encode(message.maxbets, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.link != null && message.hasOwnProperty("link"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.link);
        if (message.startLink != null && message.hasOwnProperty("startLink"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.startLink);
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.stakes != null && message.stakes.length) {
            writer.uint32(/* id 11, wireType 2 =*/90).fork();
            for (var i = 0; i < message.stakes.length; ++i)
                writer.uint32(message.stakes[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Decodes a GameState1XXX message from the specified reader or buffer.
     * @function decode
     * @memberof GameState1XXX
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState1XXX} GameState1XXX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState1XXX.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1XXX();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                if (!(message.history && message.history.length))
                    message.history = [];
                message.history.push($root.GameState1XXX.HistoryItem.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.stats && message.stats.length))
                    message.stats = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.stats.push(reader.uint32());
                } else
                    message.stats.push(reader.uint32());
                break;
            case 6:
                message.maxbets = $root.RouletteMaxBets.decode(reader, reader.uint32());
                break;
            case 7:
                message.link = reader.string();
                break;
            case 8:
                message.startLink = reader.string();
                break;
            case 10:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            case 11:
                if (!(message.stakes && message.stakes.length))
                    message.stakes = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.stakes.push(reader.uint32());
                } else
                    message.stakes.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState1XXX.Period
     * @enum {string}
     * @property {number} bet=0 bet value
     * @property {number} spin=1 spin value
     * @property {number} win=2 win value
     */
    GameState1XXX.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "bet"] = 0;
        values[valuesById[1] = "spin"] = 1;
        values[valuesById[2] = "win"] = 2;
        return values;
    })();

    GameState1XXX.HistoryItem = (function() {

        /**
         * Properties of a HistoryItem.
         * @memberof GameState1XXX
         * @interface IHistoryItem
         * @property {number|Long|null} [round] HistoryItem round
         * @property {number|null} [wincombo] HistoryItem wincombo
         */

        /**
         * Constructs a new HistoryItem.
         * @memberof GameState1XXX
         * @classdesc Represents a HistoryItem.
         * @implements IHistoryItem
         * @constructor
         * @param {GameState1XXX.IHistoryItem=} [properties] Properties to set
         */
        function HistoryItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryItem round.
         * @member {number|Long} round
         * @memberof GameState1XXX.HistoryItem
         * @instance
         */
        HistoryItem.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HistoryItem wincombo.
         * @member {number} wincombo
         * @memberof GameState1XXX.HistoryItem
         * @instance
         */
        HistoryItem.prototype.wincombo = 0;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @function create
         * @memberof GameState1XXX.HistoryItem
         * @static
         * @param {GameState1XXX.IHistoryItem=} [properties] Properties to set
         * @returns {GameState1XXX.HistoryItem} HistoryItem instance
         */
        HistoryItem.create = function create(properties) {
            return new HistoryItem(properties);
        };

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState1XXX.HistoryItem.verify|verify} messages.
         * @function encode
         * @memberof GameState1XXX.HistoryItem
         * @static
         * @param {GameState1XXX.IHistoryItem} message HistoryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
            if (message.wincombo != null && message.hasOwnProperty("wincombo"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.wincombo);
            return writer;
        };

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState1XXX.HistoryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState1XXX.HistoryItem} HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1XXX.HistoryItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    message.wincombo = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return HistoryItem;
    })();

    return GameState1XXX;
})();

$root.Bet1XXX = (function() {

    /**
     * Properties of a Bet1XXX.
     * @exports IBet1XXX
     * @interface IBet1XXX
     * @property {number|Long|null} [round] Bet1XXX round
     * @property {IRouletteBet|null} [body] Bet1XXX body
     */

    /**
     * Constructs a new Bet1XXX.
     * @exports Bet1XXX
     * @classdesc Represents a Bet1XXX.
     * @implements IBet1XXX
     * @constructor
     * @param {IBet1XXX=} [properties] Properties to set
     */
    function Bet1XXX(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet1XXX round.
     * @member {number|Long} round
     * @memberof Bet1XXX
     * @instance
     */
    Bet1XXX.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet1XXX body.
     * @member {IRouletteBet|null|undefined} body
     * @memberof Bet1XXX
     * @instance
     */
    Bet1XXX.prototype.body = null;

    /**
     * Creates a new Bet1XXX instance using the specified properties.
     * @function create
     * @memberof Bet1XXX
     * @static
     * @param {IBet1XXX=} [properties] Properties to set
     * @returns {Bet1XXX} Bet1XXX instance
     */
    Bet1XXX.create = function create(properties) {
        return new Bet1XXX(properties);
    };

    /**
     * Encodes the specified Bet1XXX message. Does not implicitly {@link Bet1XXX.verify|verify} messages.
     * @function encode
     * @memberof Bet1XXX
     * @static
     * @param {IBet1XXX} message Bet1XXX message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet1XXX.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
        if (message.body != null && message.hasOwnProperty("body"))
            $root.RouletteBet.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a Bet1XXX message from the specified reader or buffer.
     * @function decode
     * @memberof Bet1XXX
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet1XXX} Bet1XXX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet1XXX.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet1XXX();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.round = reader.uint64();
                break;
            case 2:
                message.body = $root.RouletteBet.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Bet1XXX;
})();

$root.Bet1024 = (function() {

    /**
     * Properties of a Bet1024.
     * @exports IBet1024
     * @interface IBet1024
     * @property {number|Long|null} [round] Bet1024 round
     * @property {number|null} [ball] Bet1024 ball
     * @property {Bet1024.Alias|null} [alias] Bet1024 alias
     * @property {Bet1024.Type|null} [type] Bet1024 type
     */

    /**
     * Constructs a new Bet1024.
     * @exports Bet1024
     * @classdesc Represents a Bet1024.
     * @implements IBet1024
     * @constructor
     * @param {IBet1024=} [properties] Properties to set
     */
    function Bet1024(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet1024 round.
     * @member {number|Long} round
     * @memberof Bet1024
     * @instance
     */
    Bet1024.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet1024 ball.
     * @member {number} ball
     * @memberof Bet1024
     * @instance
     */
    Bet1024.prototype.ball = 0;

    /**
     * Bet1024 alias.
     * @member {Bet1024.Alias} alias
     * @memberof Bet1024
     * @instance
     */
    Bet1024.prototype.alias = 0;

    /**
     * Bet1024 type.
     * @member {Bet1024.Type} type
     * @memberof Bet1024
     * @instance
     */
    Bet1024.prototype.type = 0;

    /**
     * Creates a new Bet1024 instance using the specified properties.
     * @function create
     * @memberof Bet1024
     * @static
     * @param {IBet1024=} [properties] Properties to set
     * @returns {Bet1024} Bet1024 instance
     */
    Bet1024.create = function create(properties) {
        return new Bet1024(properties);
    };

    /**
     * Encodes the specified Bet1024 message. Does not implicitly {@link Bet1024.verify|verify} messages.
     * @function encode
     * @memberof Bet1024
     * @static
     * @param {IBet1024} message Bet1024 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet1024.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
        if (message.ball != null && message.hasOwnProperty("ball"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ball);
        if (message.alias != null && message.hasOwnProperty("alias"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.alias);
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
        return writer;
    };

    /**
     * Decodes a Bet1024 message from the specified reader or buffer.
     * @function decode
     * @memberof Bet1024
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet1024} Bet1024
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet1024.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet1024();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.round = reader.uint64();
                break;
            case 2:
                message.ball = reader.int32();
                break;
            case 3:
                message.alias = reader.int32();
                break;
            case 4:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Type enum.
     * @name Bet1024.Type
     * @enum {string}
     * @property {number} ALIAS=0 ALIAS value
     * @property {number} BALL=1 BALL value
     */
    Bet1024.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ALIAS"] = 0;
        values[valuesById[1] = "BALL"] = 1;
        return values;
    })();

    /**
     * Alias enum.
     * @name Bet1024.Alias
     * @enum {string}
     * @property {number} color1=0 color1 value
     * @property {number} color2=1 color2 value
     * @property {number} top=2 top value
     * @property {number} center=3 center value
     * @property {number} bottom=4 bottom value
     */
    Bet1024.Alias = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "color1"] = 0;
        values[valuesById[1] = "color2"] = 1;
        values[valuesById[2] = "top"] = 2;
        values[valuesById[3] = "center"] = 3;
        values[valuesById[4] = "bottom"] = 4;
        return values;
    })();

    return Bet1024;
})();

$root.GameState1024 = (function() {

    /**
     * Properties of a GameState1024.
     * @exports IGameState1024
     * @interface IGameState1024
     * @property {ITimers|null} [timers] GameState1024 timers
     * @property {GameState1024.Period|null} [period] GameState1024 period
     * @property {number|Long|null} [round] GameState1024 round
     * @property {string|null} [video] GameState1024 video
     * @property {Array.<GameState1024.IHistoryItem>|null} [history] GameState1024 history
     * @property {GameState1024.IStatisticItem|null} [statistic] GameState1024 statistic
     * @property {number|null} [winBall] GameState1024 winBall
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState1024 gameStateCommonFields
     */

    /**
     * Constructs a new GameState1024.
     * @exports GameState1024
     * @classdesc Represents a GameState1024.
     * @implements IGameState1024
     * @constructor
     * @param {IGameState1024=} [properties] Properties to set
     */
    function GameState1024(properties) {
        this.history = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState1024 timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.timers = null;

    /**
     * GameState1024 period.
     * @member {GameState1024.Period} period
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.period = 0;

    /**
     * GameState1024 round.
     * @member {number|Long} round
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState1024 video.
     * @member {string} video
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.video = "";

    /**
     * GameState1024 history.
     * @member {Array.<GameState1024.IHistoryItem>} history
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.history = $util.emptyArray;

    /**
     * GameState1024 statistic.
     * @member {GameState1024.IStatisticItem|null|undefined} statistic
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.statistic = null;

    /**
     * GameState1024 winBall.
     * @member {number} winBall
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.winBall = 0;

    /**
     * GameState1024 gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState1024
     * @instance
     */
    GameState1024.prototype.gameStateCommonFields = null;

    /**
     * Creates a new GameState1024 instance using the specified properties.
     * @function create
     * @memberof GameState1024
     * @static
     * @param {IGameState1024=} [properties] Properties to set
     * @returns {GameState1024} GameState1024 instance
     */
    GameState1024.create = function create(properties) {
        return new GameState1024(properties);
    };

    /**
     * Encodes the specified GameState1024 message. Does not implicitly {@link GameState1024.verify|verify} messages.
     * @function encode
     * @memberof GameState1024
     * @static
     * @param {IGameState1024} message GameState1024 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState1024.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.video != null && message.hasOwnProperty("video"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.video);
        if (message.history != null && message.history.length)
            for (var i = 0; i < message.history.length; ++i)
                $root.GameState1024.HistoryItem.encode(message.history[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.statistic != null && message.hasOwnProperty("statistic"))
            $root.GameState1024.StatisticItem.encode(message.statistic, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.winBall != null && message.hasOwnProperty("winBall"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.winBall);
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameState1024 message from the specified reader or buffer.
     * @function decode
     * @memberof GameState1024
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState1024} GameState1024
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState1024.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1024();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                message.video = reader.string();
                break;
            case 5:
                if (!(message.history && message.history.length))
                    message.history = [];
                message.history.push($root.GameState1024.HistoryItem.decode(reader, reader.uint32()));
                break;
            case 6:
                message.statistic = $root.GameState1024.StatisticItem.decode(reader, reader.uint32());
                break;
            case 7:
                message.winBall = reader.int32();
                break;
            case 8:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState1024.Period
     * @enum {string}
     * @property {number} betting=0 betting value
     * @property {number} playing=1 playing value
     */
    GameState1024.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "betting"] = 0;
        values[valuesById[1] = "playing"] = 1;
        return values;
    })();

    GameState1024.HistoryItem = (function() {

        /**
         * Properties of a HistoryItem.
         * @memberof GameState1024
         * @interface IHistoryItem
         * @property {number|Long|null} [round] HistoryItem round
         * @property {number|null} [ball] HistoryItem ball
         */

        /**
         * Constructs a new HistoryItem.
         * @memberof GameState1024
         * @classdesc Represents a HistoryItem.
         * @implements IHistoryItem
         * @constructor
         * @param {GameState1024.IHistoryItem=} [properties] Properties to set
         */
        function HistoryItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryItem round.
         * @member {number|Long} round
         * @memberof GameState1024.HistoryItem
         * @instance
         */
        HistoryItem.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HistoryItem ball.
         * @member {number} ball
         * @memberof GameState1024.HistoryItem
         * @instance
         */
        HistoryItem.prototype.ball = 0;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @function create
         * @memberof GameState1024.HistoryItem
         * @static
         * @param {GameState1024.IHistoryItem=} [properties] Properties to set
         * @returns {GameState1024.HistoryItem} HistoryItem instance
         */
        HistoryItem.create = function create(properties) {
            return new HistoryItem(properties);
        };

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState1024.HistoryItem.verify|verify} messages.
         * @function encode
         * @memberof GameState1024.HistoryItem
         * @static
         * @param {GameState1024.IHistoryItem} message HistoryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
            if (message.ball != null && message.hasOwnProperty("ball"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ball);
            return writer;
        };

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState1024.HistoryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState1024.HistoryItem} HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1024.HistoryItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    message.ball = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return HistoryItem;
    })();

    GameState1024.StatisticItem = (function() {

        /**
         * Properties of a StatisticItem.
         * @memberof GameState1024
         * @interface IStatisticItem
         * @property {number|null} [miss] StatisticItem miss
         * @property {number|null} [post] StatisticItem post
         * @property {Array.<number>|null} [balls] StatisticItem balls
         */

        /**
         * Constructs a new StatisticItem.
         * @memberof GameState1024
         * @classdesc Represents a StatisticItem.
         * @implements IStatisticItem
         * @constructor
         * @param {GameState1024.IStatisticItem=} [properties] Properties to set
         */
        function StatisticItem(properties) {
            this.balls = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StatisticItem miss.
         * @member {number} miss
         * @memberof GameState1024.StatisticItem
         * @instance
         */
        StatisticItem.prototype.miss = 0;

        /**
         * StatisticItem post.
         * @member {number} post
         * @memberof GameState1024.StatisticItem
         * @instance
         */
        StatisticItem.prototype.post = 0;

        /**
         * StatisticItem balls.
         * @member {Array.<number>} balls
         * @memberof GameState1024.StatisticItem
         * @instance
         */
        StatisticItem.prototype.balls = $util.emptyArray;

        /**
         * Creates a new StatisticItem instance using the specified properties.
         * @function create
         * @memberof GameState1024.StatisticItem
         * @static
         * @param {GameState1024.IStatisticItem=} [properties] Properties to set
         * @returns {GameState1024.StatisticItem} StatisticItem instance
         */
        StatisticItem.create = function create(properties) {
            return new StatisticItem(properties);
        };

        /**
         * Encodes the specified StatisticItem message. Does not implicitly {@link GameState1024.StatisticItem.verify|verify} messages.
         * @function encode
         * @memberof GameState1024.StatisticItem
         * @static
         * @param {GameState1024.IStatisticItem} message StatisticItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatisticItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.miss != null && message.hasOwnProperty("miss"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.miss);
            if (message.post != null && message.hasOwnProperty("post"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.post);
            if (message.balls != null && message.balls.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.balls.length; ++i)
                    writer.uint32(message.balls[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a StatisticItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState1024.StatisticItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState1024.StatisticItem} StatisticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatisticItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1024.StatisticItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.miss = reader.uint32();
                    break;
                case 2:
                    message.post = reader.uint32();
                    break;
                case 3:
                    if (!(message.balls && message.balls.length))
                        message.balls = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.balls.push(reader.uint32());
                    } else
                        message.balls.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StatisticItem;
    })();

    return GameState1024;
})();

$root.Bet7XX = (function() {

    /**
     * Properties of a Bet7XX.
     * @exports IBet7XX
     * @interface IBet7XX
     * @property {string|null} [gameName] Bet7XX gameName
     * @property {string|null} [resultName] Bet7XX resultName
     * @property {string|null} [resultValue] Bet7XX resultValue
     * @property {number|Long|null} [round] Bet7XX round
     */

    /**
     * Constructs a new Bet7XX.
     * @exports Bet7XX
     * @classdesc Represents a Bet7XX.
     * @implements IBet7XX
     * @constructor
     * @param {IBet7XX=} [properties] Properties to set
     */
    function Bet7XX(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet7XX gameName.
     * @member {string} gameName
     * @memberof Bet7XX
     * @instance
     */
    Bet7XX.prototype.gameName = "";

    /**
     * Bet7XX resultName.
     * @member {string} resultName
     * @memberof Bet7XX
     * @instance
     */
    Bet7XX.prototype.resultName = "";

    /**
     * Bet7XX resultValue.
     * @member {string} resultValue
     * @memberof Bet7XX
     * @instance
     */
    Bet7XX.prototype.resultValue = "";

    /**
     * Bet7XX round.
     * @member {number|Long} round
     * @memberof Bet7XX
     * @instance
     */
    Bet7XX.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new Bet7XX instance using the specified properties.
     * @function create
     * @memberof Bet7XX
     * @static
     * @param {IBet7XX=} [properties] Properties to set
     * @returns {Bet7XX} Bet7XX instance
     */
    Bet7XX.create = function create(properties) {
        return new Bet7XX(properties);
    };

    /**
     * Encodes the specified Bet7XX message. Does not implicitly {@link Bet7XX.verify|verify} messages.
     * @function encode
     * @memberof Bet7XX
     * @static
     * @param {IBet7XX} message Bet7XX message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet7XX.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gameName != null && message.hasOwnProperty("gameName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameName);
        if (message.resultName != null && message.hasOwnProperty("resultName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.resultName);
        if (message.resultValue != null && message.hasOwnProperty("resultValue"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.resultValue);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.round);
        return writer;
    };

    /**
     * Decodes a Bet7XX message from the specified reader or buffer.
     * @function decode
     * @memberof Bet7XX
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet7XX} Bet7XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet7XX.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet7XX();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.gameName = reader.string();
                break;
            case 2:
                message.resultName = reader.string();
                break;
            case 3:
                message.resultValue = reader.string();
                break;
            case 4:
                message.round = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Bet7XX;
})();

$root.GameState7XX = (function() {

    /**
     * Properties of a GameState7XX.
     * @exports IGameState7XX
     * @interface IGameState7XX
     * @property {ITimers|null} [timers] GameState7XX timers
     * @property {GameState7XX.Period|null} [period] GameState7XX period
     * @property {number|Long|null} [round] GameState7XX round
     * @property {Array.<GameState7XX.IHistoryItem>|null} [history] GameState7XX history
     * @property {Array.<GameState7XX.IOdd>|null} [odds] GameState7XX odds
     * @property {string|null} [video] GameState7XX video
     * @property {Array.<number>|null} [winners] GameState7XX winners
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState7XX gameStateCommonFields
     */

    /**
     * Constructs a new GameState7XX.
     * @exports GameState7XX
     * @classdesc Represents a GameState7XX.
     * @implements IGameState7XX
     * @constructor
     * @param {IGameState7XX=} [properties] Properties to set
     */
    function GameState7XX(properties) {
        this.history = [];
        this.odds = [];
        this.winners = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState7XX timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.timers = null;

    /**
     * GameState7XX period.
     * @member {GameState7XX.Period} period
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.period = 0;

    /**
     * GameState7XX round.
     * @member {number|Long} round
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState7XX history.
     * @member {Array.<GameState7XX.IHistoryItem>} history
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.history = $util.emptyArray;

    /**
     * GameState7XX odds.
     * @member {Array.<GameState7XX.IOdd>} odds
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.odds = $util.emptyArray;

    /**
     * GameState7XX video.
     * @member {string} video
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.video = "";

    /**
     * GameState7XX winners.
     * @member {Array.<number>} winners
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.winners = $util.emptyArray;

    /**
     * GameState7XX gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState7XX
     * @instance
     */
    GameState7XX.prototype.gameStateCommonFields = null;

    /**
     * Creates a new GameState7XX instance using the specified properties.
     * @function create
     * @memberof GameState7XX
     * @static
     * @param {IGameState7XX=} [properties] Properties to set
     * @returns {GameState7XX} GameState7XX instance
     */
    GameState7XX.create = function create(properties) {
        return new GameState7XX(properties);
    };

    /**
     * Encodes the specified GameState7XX message. Does not implicitly {@link GameState7XX.verify|verify} messages.
     * @function encode
     * @memberof GameState7XX
     * @static
     * @param {IGameState7XX} message GameState7XX message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState7XX.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.history != null && message.history.length)
            for (var i = 0; i < message.history.length; ++i)
                $root.GameState7XX.HistoryItem.encode(message.history[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.odds != null && message.odds.length)
            for (var i = 0; i < message.odds.length; ++i)
                $root.GameState7XX.Odd.encode(message.odds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.video != null && message.hasOwnProperty("video"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.video);
        if (message.winners != null && message.winners.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.winners.length; ++i)
                writer.uint32(message.winners[i]);
            writer.ldelim();
        }
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameState7XX message from the specified reader or buffer.
     * @function decode
     * @memberof GameState7XX
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState7XX} GameState7XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState7XX.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState7XX();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                if (!(message.history && message.history.length))
                    message.history = [];
                message.history.push($root.GameState7XX.HistoryItem.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.odds && message.odds.length))
                    message.odds = [];
                message.odds.push($root.GameState7XX.Odd.decode(reader, reader.uint32()));
                break;
            case 6:
                message.video = reader.string();
                break;
            case 7:
                if (!(message.winners && message.winners.length))
                    message.winners = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.winners.push(reader.uint32());
                } else
                    message.winners.push(reader.uint32());
                break;
            case 9:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState7XX.Period
     * @enum {string}
     * @property {number} betting=0 betting value
     * @property {number} playing=1 playing value
     */
    GameState7XX.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "betting"] = 0;
        values[valuesById[1] = "playing"] = 1;
        return values;
    })();

    GameState7XX.HistoryItem = (function() {

        /**
         * Properties of a HistoryItem.
         * @memberof GameState7XX
         * @interface IHistoryItem
         * @property {number|Long|null} [round] HistoryItem round
         * @property {Array.<number>|null} [winners] HistoryItem winners
         */

        /**
         * Constructs a new HistoryItem.
         * @memberof GameState7XX
         * @classdesc Represents a HistoryItem.
         * @implements IHistoryItem
         * @constructor
         * @param {GameState7XX.IHistoryItem=} [properties] Properties to set
         */
        function HistoryItem(properties) {
            this.winners = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryItem round.
         * @member {number|Long} round
         * @memberof GameState7XX.HistoryItem
         * @instance
         */
        HistoryItem.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HistoryItem winners.
         * @member {Array.<number>} winners
         * @memberof GameState7XX.HistoryItem
         * @instance
         */
        HistoryItem.prototype.winners = $util.emptyArray;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @function create
         * @memberof GameState7XX.HistoryItem
         * @static
         * @param {GameState7XX.IHistoryItem=} [properties] Properties to set
         * @returns {GameState7XX.HistoryItem} HistoryItem instance
         */
        HistoryItem.create = function create(properties) {
            return new HistoryItem(properties);
        };

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState7XX.HistoryItem.verify|verify} messages.
         * @function encode
         * @memberof GameState7XX.HistoryItem
         * @static
         * @param {GameState7XX.IHistoryItem} message HistoryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
            if (message.winners != null && message.winners.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.winners.length; ++i)
                    writer.uint32(message.winners[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState7XX.HistoryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState7XX.HistoryItem} HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState7XX.HistoryItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    if (!(message.winners && message.winners.length))
                        message.winners = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.winners.push(reader.uint32());
                    } else
                        message.winners.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return HistoryItem;
    })();

    GameState7XX.Odd = (function() {

        /**
         * Properties of an Odd.
         * @memberof GameState7XX
         * @interface IOdd
         * @property {string|null} [gameName] Odd gameName
         * @property {Array.<GameState7XX.Odd.IResult>|null} [results] Odd results
         */

        /**
         * Constructs a new Odd.
         * @memberof GameState7XX
         * @classdesc Represents an Odd.
         * @implements IOdd
         * @constructor
         * @param {GameState7XX.IOdd=} [properties] Properties to set
         */
        function Odd(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Odd gameName.
         * @member {string} gameName
         * @memberof GameState7XX.Odd
         * @instance
         */
        Odd.prototype.gameName = "";

        /**
         * Odd results.
         * @member {Array.<GameState7XX.Odd.IResult>} results
         * @memberof GameState7XX.Odd
         * @instance
         */
        Odd.prototype.results = $util.emptyArray;

        /**
         * Creates a new Odd instance using the specified properties.
         * @function create
         * @memberof GameState7XX.Odd
         * @static
         * @param {GameState7XX.IOdd=} [properties] Properties to set
         * @returns {GameState7XX.Odd} Odd instance
         */
        Odd.create = function create(properties) {
            return new Odd(properties);
        };

        /**
         * Encodes the specified Odd message. Does not implicitly {@link GameState7XX.Odd.verify|verify} messages.
         * @function encode
         * @memberof GameState7XX.Odd
         * @static
         * @param {GameState7XX.IOdd} message Odd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Odd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameName != null && message.hasOwnProperty("gameName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gameName);
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    $root.GameState7XX.Odd.Result.encode(message.results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an Odd message from the specified reader or buffer.
         * @function decode
         * @memberof GameState7XX.Odd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState7XX.Odd} Odd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Odd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState7XX.Odd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameName = reader.string();
                    break;
                case 2:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.GameState7XX.Odd.Result.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Odd.Result = (function() {

            /**
             * Properties of a Result.
             * @memberof GameState7XX.Odd
             * @interface IResult
             * @property {string|null} [resultName] Result resultName
             * @property {string|null} [resultValue] Result resultValue
             * @property {Dynamics|null} [dynamics] Result dynamics
             */

            /**
             * Constructs a new Result.
             * @memberof GameState7XX.Odd
             * @classdesc Represents a Result.
             * @implements IResult
             * @constructor
             * @param {GameState7XX.Odd.IResult=} [properties] Properties to set
             */
            function Result(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Result resultName.
             * @member {string} resultName
             * @memberof GameState7XX.Odd.Result
             * @instance
             */
            Result.prototype.resultName = "";

            /**
             * Result resultValue.
             * @member {string} resultValue
             * @memberof GameState7XX.Odd.Result
             * @instance
             */
            Result.prototype.resultValue = "";

            /**
             * Result dynamics.
             * @member {Dynamics} dynamics
             * @memberof GameState7XX.Odd.Result
             * @instance
             */
            Result.prototype.dynamics = 0;

            /**
             * Creates a new Result instance using the specified properties.
             * @function create
             * @memberof GameState7XX.Odd.Result
             * @static
             * @param {GameState7XX.Odd.IResult=} [properties] Properties to set
             * @returns {GameState7XX.Odd.Result} Result instance
             */
            Result.create = function create(properties) {
                return new Result(properties);
            };

            /**
             * Encodes the specified Result message. Does not implicitly {@link GameState7XX.Odd.Result.verify|verify} messages.
             * @function encode
             * @memberof GameState7XX.Odd.Result
             * @static
             * @param {GameState7XX.Odd.IResult} message Result message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Result.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resultName != null && message.hasOwnProperty("resultName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resultName);
                if (message.resultValue != null && message.hasOwnProperty("resultValue"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resultValue);
                if (message.dynamics != null && message.hasOwnProperty("dynamics"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dynamics);
                return writer;
            };

            /**
             * Decodes a Result message from the specified reader or buffer.
             * @function decode
             * @memberof GameState7XX.Odd.Result
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameState7XX.Odd.Result} Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Result.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState7XX.Odd.Result();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.resultName = reader.string();
                        break;
                    case 2:
                        message.resultValue = reader.string();
                        break;
                    case 3:
                        message.dynamics = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Result;
        })();

        return Odd;
    })();

    return GameState7XX;
})();

/**
 * Event886 enum.
 * @exports Event886
 * @enum {string}
 * @property {number} S886_Event_undefined=0 S886_Event_undefined value
 * @property {number} S886_S0=1 S886_S0 value
 * @property {number} S886_S17=2 S886_S17 value
 * @property {number} S886_S18=3 S886_S18 value
 * @property {number} S886_S19=4 S886_S19 value
 * @property {number} S886_S20=5 S886_S20 value
 * @property {number} S886_S21=6 S886_S21 value
 * @property {number} S886_S22=7 S886_S22 value
 * @property {number} S886_PlayerWins=8 S886_PlayerWins value
 * @property {number} S886_Draw=9 S886_Draw value
 * @property {number} S886_DealerWins=10 S886_DealerWins value
 * @property {number} S886_Wins=11 S886_Wins value
 */
$root.Event886 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "S886_Event_undefined"] = 0;
    values[valuesById[1] = "S886_S0"] = 1;
    values[valuesById[2] = "S886_S17"] = 2;
    values[valuesById[3] = "S886_S18"] = 3;
    values[valuesById[4] = "S886_S19"] = 4;
    values[valuesById[5] = "S886_S20"] = 5;
    values[valuesById[6] = "S886_S21"] = 6;
    values[valuesById[7] = "S886_S22"] = 7;
    values[valuesById[8] = "S886_PlayerWins"] = 8;
    values[valuesById[9] = "S886_Draw"] = 9;
    values[valuesById[10] = "S886_DealerWins"] = 10;
    values[valuesById[11] = "S886_Wins"] = 11;
    return values;
})();

/**
 * KindEvent886 enum.
 * @exports KindEvent886
 * @enum {string}
 * @property {number} S886_KindEvent_undefined=0 S886_KindEvent_undefined value
 * @property {number} S886_WhoWillWin=1 S886_WhoWillWin value
 * @property {number} S886_DealerScore=2 S886_DealerScore value
 * @property {number} S886_PvD=3 S886_PvD value
 */
$root.KindEvent886 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "S886_KindEvent_undefined"] = 0;
    values[valuesById[1] = "S886_WhoWillWin"] = 1;
    values[valuesById[2] = "S886_DealerScore"] = 2;
    values[valuesById[3] = "S886_PvD"] = 3;
    return values;
})();

/**
 * Player886 enum.
 * @exports Player886
 * @enum {string}
 * @property {number} S886_Player_undefined=0 S886_Player_undefined value
 * @property {number} S886_P1=1 S886_P1 value
 * @property {number} S886_P2=2 S886_P2 value
 * @property {number} S886_P3=3 S886_P3 value
 * @property {number} S886_P4=4 S886_P4 value
 * @property {number} S886_P5=5 S886_P5 value
 * @property {number} S886_P6=6 S886_P6 value
 * @property {number} S886_Dealer=7 S886_Dealer value
 */
$root.Player886 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "S886_Player_undefined"] = 0;
    values[valuesById[1] = "S886_P1"] = 1;
    values[valuesById[2] = "S886_P2"] = 2;
    values[valuesById[3] = "S886_P3"] = 3;
    values[valuesById[4] = "S886_P4"] = 4;
    values[valuesById[5] = "S886_P5"] = 5;
    values[valuesById[6] = "S886_P6"] = 6;
    values[valuesById[7] = "S886_Dealer"] = 7;
    return values;
})();

/**
 * Period886 enum.
 * @exports Period886
 * @enum {string}
 * @property {number} S886_Period_undefined=0 S886_Period_undefined value
 * @property {number} S886_Period1=1 S886_Period1 value
 * @property {number} S886_Period2=2 S886_Period2 value
 * @property {number} S886_Period3=3 S886_Period3 value
 * @property {number} S886_Period4=4 S886_Period4 value
 */
$root.Period886 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "S886_Period_undefined"] = 0;
    values[valuesById[1] = "S886_Period1"] = 1;
    values[valuesById[2] = "S886_Period2"] = 2;
    values[valuesById[3] = "S886_Period3"] = 3;
    values[valuesById[4] = "S886_Period4"] = 4;
    return values;
})();

$root.Score886 = (function() {

    /**
     * Properties of a Score886.
     * @exports IScore886
     * @interface IScore886
     * @property {number|null} [value] Score886 value
     * @property {boolean|null} [blackjack] Score886 blackjack
     */

    /**
     * Constructs a new Score886.
     * @exports Score886
     * @classdesc Represents a Score886.
     * @implements IScore886
     * @constructor
     * @param {IScore886=} [properties] Properties to set
     */
    function Score886(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Score886 value.
     * @member {number} value
     * @memberof Score886
     * @instance
     */
    Score886.prototype.value = 0;

    /**
     * Score886 blackjack.
     * @member {boolean} blackjack
     * @memberof Score886
     * @instance
     */
    Score886.prototype.blackjack = false;

    /**
     * Creates a new Score886 instance using the specified properties.
     * @function create
     * @memberof Score886
     * @static
     * @param {IScore886=} [properties] Properties to set
     * @returns {Score886} Score886 instance
     */
    Score886.create = function create(properties) {
        return new Score886(properties);
    };

    /**
     * Encodes the specified Score886 message. Does not implicitly {@link Score886.verify|verify} messages.
     * @function encode
     * @memberof Score886
     * @static
     * @param {IScore886} message Score886 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Score886.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
        if (message.blackjack != null && message.hasOwnProperty("blackjack"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.blackjack);
        return writer;
    };

    /**
     * Decodes a Score886 message from the specified reader or buffer.
     * @function decode
     * @memberof Score886
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Score886} Score886
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Score886.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Score886();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.uint32();
                break;
            case 2:
                message.blackjack = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Score886;
})();

$root.Bet886 = (function() {

    /**
     * Properties of a Bet886.
     * @exports IBet886
     * @interface IBet886
     * @property {number|Long|null} [id] Bet886 id
     * @property {string|null} [odd] Bet886 odd
     * @property {number|Long|null} [round] Bet886 round
     * @property {Period886|null} [period] Bet886 period
     * @property {Player886|null} [player] Bet886 player
     * @property {Event886|null} [event] Bet886 event
     * @property {KindEvent886|null} [kindEvent] Bet886 kindEvent
     */

    /**
     * Constructs a new Bet886.
     * @exports Bet886
     * @classdesc Represents a Bet886.
     * @implements IBet886
     * @constructor
     * @param {IBet886=} [properties] Properties to set
     */
    function Bet886(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet886 id.
     * @member {number|Long} id
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet886 odd.
     * @member {string} odd
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.odd = "";

    /**
     * Bet886 round.
     * @member {number|Long} round
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet886 period.
     * @member {Period886} period
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.period = 0;

    /**
     * Bet886 player.
     * @member {Player886} player
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.player = 0;

    /**
     * Bet886 event.
     * @member {Event886} event
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.event = 0;

    /**
     * Bet886 kindEvent.
     * @member {KindEvent886} kindEvent
     * @memberof Bet886
     * @instance
     */
    Bet886.prototype.kindEvent = 0;

    /**
     * Creates a new Bet886 instance using the specified properties.
     * @function create
     * @memberof Bet886
     * @static
     * @param {IBet886=} [properties] Properties to set
     * @returns {Bet886} Bet886 instance
     */
    Bet886.create = function create(properties) {
        return new Bet886(properties);
    };

    /**
     * Encodes the specified Bet886 message. Does not implicitly {@link Bet886.verify|verify} messages.
     * @function encode
     * @memberof Bet886
     * @static
     * @param {IBet886} message Bet886 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet886.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
        if (message.odd != null && message.hasOwnProperty("odd"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.odd);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.period);
        if (message.player != null && message.hasOwnProperty("player"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.player);
        if (message.event != null && message.hasOwnProperty("event"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.event);
        if (message.kindEvent != null && message.hasOwnProperty("kindEvent"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.kindEvent);
        return writer;
    };

    /**
     * Decodes a Bet886 message from the specified reader or buffer.
     * @function decode
     * @memberof Bet886
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet886} Bet886
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet886.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet886();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint64();
                break;
            case 2:
                message.odd = reader.string();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                message.period = reader.int32();
                break;
            case 5:
                message.player = reader.int32();
                break;
            case 6:
                message.event = reader.int32();
                break;
            case 7:
                message.kindEvent = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Bet886;
})();

$root.GameState886 = (function() {

    /**
     * Properties of a GameState886.
     * @exports IGameState886
     * @interface IGameState886
     * @property {ITimers|null} [timers] GameState886 timers
     * @property {Period886|null} [period] GameState886 period
     * @property {number|Long|null} [round] GameState886 round
     * @property {Array.<GameState886.IHistoryItem>|null} [history] GameState886 history
     * @property {Array.<GameState886.IOdd>|null} [odds] GameState886 odds
     * @property {Array.<GameState886.ICardPack>|null} [cardPacks] GameState886 cardPacks
     * @property {Array.<GameState886.IStakeItem>|null} [stakes] GameState886 stakes
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState886 gameStateCommonFields
     */

    /**
     * Constructs a new GameState886.
     * @exports GameState886
     * @classdesc Represents a GameState886.
     * @implements IGameState886
     * @constructor
     * @param {IGameState886=} [properties] Properties to set
     */
    function GameState886(properties) {
        this.history = [];
        this.odds = [];
        this.cardPacks = [];
        this.stakes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState886 timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.timers = null;

    /**
     * GameState886 period.
     * @member {Period886} period
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.period = 0;

    /**
     * GameState886 round.
     * @member {number|Long} round
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState886 history.
     * @member {Array.<GameState886.IHistoryItem>} history
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.history = $util.emptyArray;

    /**
     * GameState886 odds.
     * @member {Array.<GameState886.IOdd>} odds
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.odds = $util.emptyArray;

    /**
     * GameState886 cardPacks.
     * @member {Array.<GameState886.ICardPack>} cardPacks
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.cardPacks = $util.emptyArray;

    /**
     * GameState886 stakes.
     * @member {Array.<GameState886.IStakeItem>} stakes
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.stakes = $util.emptyArray;

    /**
     * GameState886 gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState886
     * @instance
     */
    GameState886.prototype.gameStateCommonFields = null;

    /**
     * Creates a new GameState886 instance using the specified properties.
     * @function create
     * @memberof GameState886
     * @static
     * @param {IGameState886=} [properties] Properties to set
     * @returns {GameState886} GameState886 instance
     */
    GameState886.create = function create(properties) {
        return new GameState886(properties);
    };

    /**
     * Encodes the specified GameState886 message. Does not implicitly {@link GameState886.verify|verify} messages.
     * @function encode
     * @memberof GameState886
     * @static
     * @param {IGameState886} message GameState886 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState886.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.history != null && message.history.length)
            for (var i = 0; i < message.history.length; ++i)
                $root.GameState886.HistoryItem.encode(message.history[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.odds != null && message.odds.length)
            for (var i = 0; i < message.odds.length; ++i)
                $root.GameState886.Odd.encode(message.odds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.cardPacks != null && message.cardPacks.length)
            for (var i = 0; i < message.cardPacks.length; ++i)
                $root.GameState886.CardPack.encode(message.cardPacks[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.stakes != null && message.stakes.length)
            for (var i = 0; i < message.stakes.length; ++i)
                $root.GameState886.StakeItem.encode(message.stakes[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameState886 message from the specified reader or buffer.
     * @function decode
     * @memberof GameState886
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState886} GameState886
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState886.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState886();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                if (!(message.history && message.history.length))
                    message.history = [];
                message.history.push($root.GameState886.HistoryItem.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.odds && message.odds.length))
                    message.odds = [];
                message.odds.push($root.GameState886.Odd.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.cardPacks && message.cardPacks.length))
                    message.cardPacks = [];
                message.cardPacks.push($root.GameState886.CardPack.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.stakes && message.stakes.length))
                    message.stakes = [];
                message.stakes.push($root.GameState886.StakeItem.decode(reader, reader.uint32()));
                break;
            case 8:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    GameState886.HistoryItem = (function() {

        /**
         * Properties of a HistoryItem.
         * @memberof GameState886
         * @interface IHistoryItem
         * @property {number|Long|null} [round] HistoryItem round
         * @property {Array.<GameState886.HistoryItem.IWincombo>|null} [wincombo] HistoryItem wincombo
         */

        /**
         * Constructs a new HistoryItem.
         * @memberof GameState886
         * @classdesc Represents a HistoryItem.
         * @implements IHistoryItem
         * @constructor
         * @param {GameState886.IHistoryItem=} [properties] Properties to set
         */
        function HistoryItem(properties) {
            this.wincombo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryItem round.
         * @member {number|Long} round
         * @memberof GameState886.HistoryItem
         * @instance
         */
        HistoryItem.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HistoryItem wincombo.
         * @member {Array.<GameState886.HistoryItem.IWincombo>} wincombo
         * @memberof GameState886.HistoryItem
         * @instance
         */
        HistoryItem.prototype.wincombo = $util.emptyArray;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @function create
         * @memberof GameState886.HistoryItem
         * @static
         * @param {GameState886.IHistoryItem=} [properties] Properties to set
         * @returns {GameState886.HistoryItem} HistoryItem instance
         */
        HistoryItem.create = function create(properties) {
            return new HistoryItem(properties);
        };

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState886.HistoryItem.verify|verify} messages.
         * @function encode
         * @memberof GameState886.HistoryItem
         * @static
         * @param {GameState886.IHistoryItem} message HistoryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
            if (message.wincombo != null && message.wincombo.length)
                for (var i = 0; i < message.wincombo.length; ++i)
                    $root.GameState886.HistoryItem.Wincombo.encode(message.wincombo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState886.HistoryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState886.HistoryItem} HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState886.HistoryItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    if (!(message.wincombo && message.wincombo.length))
                        message.wincombo = [];
                    message.wincombo.push($root.GameState886.HistoryItem.Wincombo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        HistoryItem.Wincombo = (function() {

            /**
             * Properties of a Wincombo.
             * @memberof GameState886.HistoryItem
             * @interface IWincombo
             * @property {Player886|null} [player] Wincombo player
             * @property {IScore886|null} [score] Wincombo score
             */

            /**
             * Constructs a new Wincombo.
             * @memberof GameState886.HistoryItem
             * @classdesc Represents a Wincombo.
             * @implements IWincombo
             * @constructor
             * @param {GameState886.HistoryItem.IWincombo=} [properties] Properties to set
             */
            function Wincombo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Wincombo player.
             * @member {Player886} player
             * @memberof GameState886.HistoryItem.Wincombo
             * @instance
             */
            Wincombo.prototype.player = 0;

            /**
             * Wincombo score.
             * @member {IScore886|null|undefined} score
             * @memberof GameState886.HistoryItem.Wincombo
             * @instance
             */
            Wincombo.prototype.score = null;

            /**
             * Creates a new Wincombo instance using the specified properties.
             * @function create
             * @memberof GameState886.HistoryItem.Wincombo
             * @static
             * @param {GameState886.HistoryItem.IWincombo=} [properties] Properties to set
             * @returns {GameState886.HistoryItem.Wincombo} Wincombo instance
             */
            Wincombo.create = function create(properties) {
                return new Wincombo(properties);
            };

            /**
             * Encodes the specified Wincombo message. Does not implicitly {@link GameState886.HistoryItem.Wincombo.verify|verify} messages.
             * @function encode
             * @memberof GameState886.HistoryItem.Wincombo
             * @static
             * @param {GameState886.HistoryItem.IWincombo} message Wincombo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Wincombo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.player != null && message.hasOwnProperty("player"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.player);
                if (message.score != null && message.hasOwnProperty("score"))
                    $root.Score886.encode(message.score, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Wincombo message from the specified reader or buffer.
             * @function decode
             * @memberof GameState886.HistoryItem.Wincombo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameState886.HistoryItem.Wincombo} Wincombo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Wincombo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState886.HistoryItem.Wincombo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.player = reader.int32();
                        break;
                    case 2:
                        message.score = $root.Score886.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Wincombo;
        })();

        return HistoryItem;
    })();

    GameState886.Odd = (function() {

        /**
         * Properties of an Odd.
         * @memberof GameState886
         * @interface IOdd
         * @property {number|Long|null} [id] Odd id
         * @property {string|null} [odd] Odd odd
         * @property {Player886|null} [player] Odd player
         * @property {Event886|null} [event] Odd event
         * @property {KindEvent886|null} [kindEvent] Odd kindEvent
         * @property {GameState886.Odd.Status|null} [status] Odd status
         */

        /**
         * Constructs a new Odd.
         * @memberof GameState886
         * @classdesc Represents an Odd.
         * @implements IOdd
         * @constructor
         * @param {GameState886.IOdd=} [properties] Properties to set
         */
        function Odd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Odd id.
         * @member {number|Long} id
         * @memberof GameState886.Odd
         * @instance
         */
        Odd.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Odd odd.
         * @member {string} odd
         * @memberof GameState886.Odd
         * @instance
         */
        Odd.prototype.odd = "";

        /**
         * Odd player.
         * @member {Player886} player
         * @memberof GameState886.Odd
         * @instance
         */
        Odd.prototype.player = 0;

        /**
         * Odd event.
         * @member {Event886} event
         * @memberof GameState886.Odd
         * @instance
         */
        Odd.prototype.event = 0;

        /**
         * Odd kindEvent.
         * @member {KindEvent886} kindEvent
         * @memberof GameState886.Odd
         * @instance
         */
        Odd.prototype.kindEvent = 0;

        /**
         * Odd status.
         * @member {GameState886.Odd.Status} status
         * @memberof GameState886.Odd
         * @instance
         */
        Odd.prototype.status = 0;

        /**
         * Creates a new Odd instance using the specified properties.
         * @function create
         * @memberof GameState886.Odd
         * @static
         * @param {GameState886.IOdd=} [properties] Properties to set
         * @returns {GameState886.Odd} Odd instance
         */
        Odd.create = function create(properties) {
            return new Odd(properties);
        };

        /**
         * Encodes the specified Odd message. Does not implicitly {@link GameState886.Odd.verify|verify} messages.
         * @function encode
         * @memberof GameState886.Odd
         * @static
         * @param {GameState886.IOdd} message Odd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Odd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.odd != null && message.hasOwnProperty("odd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.odd);
            if (message.player != null && message.hasOwnProperty("player"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.player);
            if (message.event != null && message.hasOwnProperty("event"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.event);
            if (message.kindEvent != null && message.hasOwnProperty("kindEvent"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.kindEvent);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Decodes an Odd message from the specified reader or buffer.
         * @function decode
         * @memberof GameState886.Odd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState886.Odd} Odd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Odd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState886.Odd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.odd = reader.string();
                    break;
                case 3:
                    message.player = reader.int32();
                    break;
                case 4:
                    message.event = reader.int32();
                    break;
                case 5:
                    message.kindEvent = reader.int32();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Status enum.
         * @name GameState886.Odd.Status
         * @enum {string}
         * @property {number} active=0 active value
         * @property {number} loose=1 loose value
         * @property {number} win=2 win value
         */
        Odd.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "active"] = 0;
            values[valuesById[1] = "loose"] = 1;
            values[valuesById[2] = "win"] = 2;
            return values;
        })();

        return Odd;
    })();

    GameState886.CardPack = (function() {

        /**
         * Properties of a CardPack.
         * @memberof GameState886
         * @interface ICardPack
         * @property {Player886|null} [owner] CardPack owner
         * @property {Array.<IPlayingCard>|null} [cards] CardPack cards
         * @property {IScore886|null} [score] CardPack score
         * @property {boolean|null} [hit] CardPack hit
         */

        /**
         * Constructs a new CardPack.
         * @memberof GameState886
         * @classdesc Represents a CardPack.
         * @implements ICardPack
         * @constructor
         * @param {GameState886.ICardPack=} [properties] Properties to set
         */
        function CardPack(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardPack owner.
         * @member {Player886} owner
         * @memberof GameState886.CardPack
         * @instance
         */
        CardPack.prototype.owner = 0;

        /**
         * CardPack cards.
         * @member {Array.<IPlayingCard>} cards
         * @memberof GameState886.CardPack
         * @instance
         */
        CardPack.prototype.cards = $util.emptyArray;

        /**
         * CardPack score.
         * @member {IScore886|null|undefined} score
         * @memberof GameState886.CardPack
         * @instance
         */
        CardPack.prototype.score = null;

        /**
         * CardPack hit.
         * @member {boolean} hit
         * @memberof GameState886.CardPack
         * @instance
         */
        CardPack.prototype.hit = false;

        /**
         * Creates a new CardPack instance using the specified properties.
         * @function create
         * @memberof GameState886.CardPack
         * @static
         * @param {GameState886.ICardPack=} [properties] Properties to set
         * @returns {GameState886.CardPack} CardPack instance
         */
        CardPack.create = function create(properties) {
            return new CardPack(properties);
        };

        /**
         * Encodes the specified CardPack message. Does not implicitly {@link GameState886.CardPack.verify|verify} messages.
         * @function encode
         * @memberof GameState886.CardPack
         * @static
         * @param {GameState886.ICardPack} message CardPack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardPack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.owner);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.PlayingCard.encode(message.cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.score != null && message.hasOwnProperty("score"))
                $root.Score886.encode(message.score, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.hit != null && message.hasOwnProperty("hit"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hit);
            return writer;
        };

        /**
         * Decodes a CardPack message from the specified reader or buffer.
         * @function decode
         * @memberof GameState886.CardPack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState886.CardPack} CardPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardPack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState886.CardPack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.owner = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.PlayingCard.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.score = $root.Score886.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.hit = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CardPack;
    })();

    GameState886.StakeItem = (function() {

        /**
         * Properties of a StakeItem.
         * @memberof GameState886
         * @interface IStakeItem
         * @property {Player886|null} [player] StakeItem player
         * @property {number|Long|null} [value] StakeItem value
         */

        /**
         * Constructs a new StakeItem.
         * @memberof GameState886
         * @classdesc Represents a StakeItem.
         * @implements IStakeItem
         * @constructor
         * @param {GameState886.IStakeItem=} [properties] Properties to set
         */
        function StakeItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StakeItem player.
         * @member {Player886} player
         * @memberof GameState886.StakeItem
         * @instance
         */
        StakeItem.prototype.player = 0;

        /**
         * StakeItem value.
         * @member {number|Long} value
         * @memberof GameState886.StakeItem
         * @instance
         */
        StakeItem.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new StakeItem instance using the specified properties.
         * @function create
         * @memberof GameState886.StakeItem
         * @static
         * @param {GameState886.IStakeItem=} [properties] Properties to set
         * @returns {GameState886.StakeItem} StakeItem instance
         */
        StakeItem.create = function create(properties) {
            return new StakeItem(properties);
        };

        /**
         * Encodes the specified StakeItem message. Does not implicitly {@link GameState886.StakeItem.verify|verify} messages.
         * @function encode
         * @memberof GameState886.StakeItem
         * @static
         * @param {GameState886.IStakeItem} message StakeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StakeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.player);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
            return writer;
        };

        /**
         * Decodes a StakeItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState886.StakeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState886.StakeItem} StakeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StakeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState886.StakeItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = reader.int32();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StakeItem;
    })();

    return GameState886;
})();

$root.Bet1013 = (function() {

    /**
     * Properties of a Bet1013.
     * @exports IBet1013
     * @interface IBet1013
     * @property {number|Long|null} [round] Bet1013 round
     * @property {Bet1013.Body|null} [body] Bet1013 body
     */

    /**
     * Constructs a new Bet1013.
     * @exports Bet1013
     * @classdesc Represents a Bet1013.
     * @implements IBet1013
     * @constructor
     * @param {IBet1013=} [properties] Properties to set
     */
    function Bet1013(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet1013 round.
     * @member {number|Long} round
     * @memberof Bet1013
     * @instance
     */
    Bet1013.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet1013 body.
     * @member {Bet1013.Body} body
     * @memberof Bet1013
     * @instance
     */
    Bet1013.prototype.body = 0;

    /**
     * Creates a new Bet1013 instance using the specified properties.
     * @function create
     * @memberof Bet1013
     * @static
     * @param {IBet1013=} [properties] Properties to set
     * @returns {Bet1013} Bet1013 instance
     */
    Bet1013.create = function create(properties) {
        return new Bet1013(properties);
    };

    /**
     * Encodes the specified Bet1013 message. Does not implicitly {@link Bet1013.verify|verify} messages.
     * @function encode
     * @memberof Bet1013
     * @static
     * @param {IBet1013} message Bet1013 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet1013.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
        if (message.body != null && message.hasOwnProperty("body"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.body);
        return writer;
    };

    /**
     * Decodes a Bet1013 message from the specified reader or buffer.
     * @function decode
     * @memberof Bet1013
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet1013} Bet1013
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet1013.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet1013();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.round = reader.uint64();
                break;
            case 2:
                message.body = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Body enum.
     * @name Bet1013.Body
     * @enum {string}
     * @property {number} N0=0 N0 value
     * @property {number} N1=1 N1 value
     * @property {number} N2=2 N2 value
     * @property {number} N3=3 N3 value
     * @property {number} N4=4 N4 value
     * @property {number} N5=5 N5 value
     * @property {number} N6=6 N6 value
     * @property {number} N7=7 N7 value
     * @property {number} N8=8 N8 value
     * @property {number} N9=9 N9 value
     * @property {number} N10=10 N10 value
     * @property {number} N11=11 N11 value
     * @property {number} N12=12 N12 value
     * @property {number} N13=13 N13 value
     * @property {number} N14=14 N14 value
     * @property {number} N15=15 N15 value
     * @property {number} N16=16 N16 value
     * @property {number} N17=17 N17 value
     * @property {number} N18=18 N18 value
     * @property {number} red=19 red value
     * @property {number} yellow=20 yellow value
     * @property {number} purple=21 purple value
     * @property {number} odd=22 odd value
     * @property {number} even=23 even value
     * @property {number} half1=24 half1 value
     * @property {number} half2=25 half2 value
     * @property {number} third1=26 third1 value
     * @property {number} third2=27 third2 value
     * @property {number} third3=28 third3 value
     * @property {number} red_even=29 red_even value
     * @property {number} red_odd=30 red_odd value
     * @property {number} yellow_even=31 yellow_even value
     * @property {number} yellow_odd=32 yellow_odd value
     * @property {number} purple_even=33 purple_even value
     * @property {number} purple_odd=34 purple_odd value
     */
    Bet1013.Body = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "N0"] = 0;
        values[valuesById[1] = "N1"] = 1;
        values[valuesById[2] = "N2"] = 2;
        values[valuesById[3] = "N3"] = 3;
        values[valuesById[4] = "N4"] = 4;
        values[valuesById[5] = "N5"] = 5;
        values[valuesById[6] = "N6"] = 6;
        values[valuesById[7] = "N7"] = 7;
        values[valuesById[8] = "N8"] = 8;
        values[valuesById[9] = "N9"] = 9;
        values[valuesById[10] = "N10"] = 10;
        values[valuesById[11] = "N11"] = 11;
        values[valuesById[12] = "N12"] = 12;
        values[valuesById[13] = "N13"] = 13;
        values[valuesById[14] = "N14"] = 14;
        values[valuesById[15] = "N15"] = 15;
        values[valuesById[16] = "N16"] = 16;
        values[valuesById[17] = "N17"] = 17;
        values[valuesById[18] = "N18"] = 18;
        values[valuesById[19] = "red"] = 19;
        values[valuesById[20] = "yellow"] = 20;
        values[valuesById[21] = "purple"] = 21;
        values[valuesById[22] = "odd"] = 22;
        values[valuesById[23] = "even"] = 23;
        values[valuesById[24] = "half1"] = 24;
        values[valuesById[25] = "half2"] = 25;
        values[valuesById[26] = "third1"] = 26;
        values[valuesById[27] = "third2"] = 27;
        values[valuesById[28] = "third3"] = 28;
        values[valuesById[29] = "red_even"] = 29;
        values[valuesById[30] = "red_odd"] = 30;
        values[valuesById[31] = "yellow_even"] = 31;
        values[valuesById[32] = "yellow_odd"] = 32;
        values[valuesById[33] = "purple_even"] = 33;
        values[valuesById[34] = "purple_odd"] = 34;
        return values;
    })();

    return Bet1013;
})();

$root.F18MaxBets = (function() {

    /**
     * Properties of a F18MaxBets.
     * @exports IF18MaxBets
     * @interface IF18MaxBets
     * @property {number|null} [N1] F18MaxBets N1
     * @property {number|null} [red] F18MaxBets red
     * @property {number|null} [yellow] F18MaxBets yellow
     * @property {number|null} [purple] F18MaxBets purple
     * @property {number|null} [odd] F18MaxBets odd
     * @property {number|null} [even] F18MaxBets even
     * @property {number|null} [half1] F18MaxBets half1
     * @property {number|null} [half2] F18MaxBets half2
     * @property {number|null} [third1] F18MaxBets third1
     * @property {number|null} [third2] F18MaxBets third2
     * @property {number|null} [third3] F18MaxBets third3
     * @property {number|null} [redEven] F18MaxBets redEven
     * @property {number|null} [redOdd] F18MaxBets redOdd
     * @property {number|null} [yellowEven] F18MaxBets yellowEven
     * @property {number|null} [yellowOdd] F18MaxBets yellowOdd
     * @property {number|null} [purpleEven] F18MaxBets purpleEven
     * @property {number|null} [purpleOdd] F18MaxBets purpleOdd
     * @property {number|null} [allRound] F18MaxBets allRound
     */

    /**
     * Constructs a new F18MaxBets.
     * @exports F18MaxBets
     * @classdesc Represents a F18MaxBets.
     * @implements IF18MaxBets
     * @constructor
     * @param {IF18MaxBets=} [properties] Properties to set
     */
    function F18MaxBets(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * F18MaxBets N1.
     * @member {number} N1
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.N1 = 0;

    /**
     * F18MaxBets red.
     * @member {number} red
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.red = 0;

    /**
     * F18MaxBets yellow.
     * @member {number} yellow
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.yellow = 0;

    /**
     * F18MaxBets purple.
     * @member {number} purple
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.purple = 0;

    /**
     * F18MaxBets odd.
     * @member {number} odd
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.odd = 0;

    /**
     * F18MaxBets even.
     * @member {number} even
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.even = 0;

    /**
     * F18MaxBets half1.
     * @member {number} half1
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.half1 = 0;

    /**
     * F18MaxBets half2.
     * @member {number} half2
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.half2 = 0;

    /**
     * F18MaxBets third1.
     * @member {number} third1
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.third1 = 0;

    /**
     * F18MaxBets third2.
     * @member {number} third2
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.third2 = 0;

    /**
     * F18MaxBets third3.
     * @member {number} third3
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.third3 = 0;

    /**
     * F18MaxBets redEven.
     * @member {number} redEven
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.redEven = 0;

    /**
     * F18MaxBets redOdd.
     * @member {number} redOdd
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.redOdd = 0;

    /**
     * F18MaxBets yellowEven.
     * @member {number} yellowEven
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.yellowEven = 0;

    /**
     * F18MaxBets yellowOdd.
     * @member {number} yellowOdd
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.yellowOdd = 0;

    /**
     * F18MaxBets purpleEven.
     * @member {number} purpleEven
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.purpleEven = 0;

    /**
     * F18MaxBets purpleOdd.
     * @member {number} purpleOdd
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.purpleOdd = 0;

    /**
     * F18MaxBets allRound.
     * @member {number} allRound
     * @memberof F18MaxBets
     * @instance
     */
    F18MaxBets.prototype.allRound = 0;

    /**
     * Creates a new F18MaxBets instance using the specified properties.
     * @function create
     * @memberof F18MaxBets
     * @static
     * @param {IF18MaxBets=} [properties] Properties to set
     * @returns {F18MaxBets} F18MaxBets instance
     */
    F18MaxBets.create = function create(properties) {
        return new F18MaxBets(properties);
    };

    /**
     * Encodes the specified F18MaxBets message. Does not implicitly {@link F18MaxBets.verify|verify} messages.
     * @function encode
     * @memberof F18MaxBets
     * @static
     * @param {IF18MaxBets} message F18MaxBets message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    F18MaxBets.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.N1 != null && message.hasOwnProperty("N1"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.N1);
        if (message.red != null && message.hasOwnProperty("red"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.red);
        if (message.yellow != null && message.hasOwnProperty("yellow"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.yellow);
        if (message.purple != null && message.hasOwnProperty("purple"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.purple);
        if (message.odd != null && message.hasOwnProperty("odd"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.odd);
        if (message.even != null && message.hasOwnProperty("even"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.even);
        if (message.half1 != null && message.hasOwnProperty("half1"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.half1);
        if (message.half2 != null && message.hasOwnProperty("half2"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.half2);
        if (message.third1 != null && message.hasOwnProperty("third1"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.third1);
        if (message.third2 != null && message.hasOwnProperty("third2"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.third2);
        if (message.third3 != null && message.hasOwnProperty("third3"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.third3);
        if (message.redEven != null && message.hasOwnProperty("redEven"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.redEven);
        if (message.redOdd != null && message.hasOwnProperty("redOdd"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.redOdd);
        if (message.yellowEven != null && message.hasOwnProperty("yellowEven"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.yellowEven);
        if (message.yellowOdd != null && message.hasOwnProperty("yellowOdd"))
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.yellowOdd);
        if (message.purpleEven != null && message.hasOwnProperty("purpleEven"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.purpleEven);
        if (message.purpleOdd != null && message.hasOwnProperty("purpleOdd"))
            writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.purpleOdd);
        if (message.allRound != null && message.hasOwnProperty("allRound"))
            writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.allRound);
        return writer;
    };

    /**
     * Decodes a F18MaxBets message from the specified reader or buffer.
     * @function decode
     * @memberof F18MaxBets
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {F18MaxBets} F18MaxBets
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    F18MaxBets.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.F18MaxBets();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.N1 = reader.uint32();
                break;
            case 2:
                message.red = reader.uint32();
                break;
            case 3:
                message.yellow = reader.uint32();
                break;
            case 4:
                message.purple = reader.uint32();
                break;
            case 5:
                message.odd = reader.uint32();
                break;
            case 6:
                message.even = reader.uint32();
                break;
            case 7:
                message.half1 = reader.uint32();
                break;
            case 8:
                message.half2 = reader.uint32();
                break;
            case 9:
                message.third1 = reader.uint32();
                break;
            case 10:
                message.third2 = reader.uint32();
                break;
            case 11:
                message.third3 = reader.uint32();
                break;
            case 12:
                message.redEven = reader.uint32();
                break;
            case 13:
                message.redOdd = reader.uint32();
                break;
            case 14:
                message.yellowEven = reader.uint32();
                break;
            case 15:
                message.yellowOdd = reader.uint32();
                break;
            case 16:
                message.purpleEven = reader.uint32();
                break;
            case 17:
                message.purpleOdd = reader.uint32();
                break;
            case 18:
                message.allRound = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return F18MaxBets;
})();

$root.GameState1013 = (function() {

    /**
     * Properties of a GameState1013.
     * @exports IGameState1013
     * @interface IGameState1013
     * @property {ITimers|null} [timers] GameState1013 timers
     * @property {GameState1013.Period|null} [period] GameState1013 period
     * @property {number|Long|null} [round] GameState1013 round
     * @property {Array.<GameState1013.IHistory>|null} [fullHistory] GameState1013 fullHistory
     * @property {number|Long|null} [stopstamp] GameState1013 stopstamp
     * @property {number|null} [ball] GameState1013 ball
     * @property {Array.<GameState1013.IStakeItem>|null} [stakes] GameState1013 stakes
     * @property {IF18MaxBets|null} [maxbets] GameState1013 maxbets
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState1013 gameStateCommonFields
     */

    /**
     * Constructs a new GameState1013.
     * @exports GameState1013
     * @classdesc Represents a GameState1013.
     * @implements IGameState1013
     * @constructor
     * @param {IGameState1013=} [properties] Properties to set
     */
    function GameState1013(properties) {
        this.fullHistory = [];
        this.stakes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState1013 timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.timers = null;

    /**
     * GameState1013 period.
     * @member {GameState1013.Period} period
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.period = 0;

    /**
     * GameState1013 round.
     * @member {number|Long} round
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState1013 fullHistory.
     * @member {Array.<GameState1013.IHistory>} fullHistory
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.fullHistory = $util.emptyArray;

    /**
     * GameState1013 stopstamp.
     * @member {number|Long} stopstamp
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.stopstamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState1013 ball.
     * @member {number} ball
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.ball = 0;

    /**
     * GameState1013 stakes.
     * @member {Array.<GameState1013.IStakeItem>} stakes
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.stakes = $util.emptyArray;

    /**
     * GameState1013 maxbets.
     * @member {IF18MaxBets|null|undefined} maxbets
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.maxbets = null;

    /**
     * GameState1013 gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState1013
     * @instance
     */
    GameState1013.prototype.gameStateCommonFields = null;

    /**
     * Creates a new GameState1013 instance using the specified properties.
     * @function create
     * @memberof GameState1013
     * @static
     * @param {IGameState1013=} [properties] Properties to set
     * @returns {GameState1013} GameState1013 instance
     */
    GameState1013.create = function create(properties) {
        return new GameState1013(properties);
    };

    /**
     * Encodes the specified GameState1013 message. Does not implicitly {@link GameState1013.verify|verify} messages.
     * @function encode
     * @memberof GameState1013
     * @static
     * @param {IGameState1013} message GameState1013 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState1013.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.fullHistory != null && message.fullHistory.length)
            for (var i = 0; i < message.fullHistory.length; ++i)
                $root.GameState1013.History.encode(message.fullHistory[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.stopstamp != null && message.hasOwnProperty("stopstamp"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.stopstamp);
        if (message.ball != null && message.hasOwnProperty("ball"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.ball);
        if (message.stakes != null && message.stakes.length)
            for (var i = 0; i < message.stakes.length; ++i)
                $root.GameState1013.StakeItem.encode(message.stakes[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.maxbets != null && message.hasOwnProperty("maxbets"))
            $root.F18MaxBets.encode(message.maxbets, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameState1013 message from the specified reader or buffer.
     * @function decode
     * @memberof GameState1013
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState1013} GameState1013
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState1013.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1013();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                if (!(message.fullHistory && message.fullHistory.length))
                    message.fullHistory = [];
                message.fullHistory.push($root.GameState1013.History.decode(reader, reader.uint32()));
                break;
            case 5:
                message.stopstamp = reader.uint64();
                break;
            case 6:
                message.ball = reader.uint32();
                break;
            case 7:
                if (!(message.stakes && message.stakes.length))
                    message.stakes = [];
                message.stakes.push($root.GameState1013.StakeItem.decode(reader, reader.uint32()));
                break;
            case 8:
                message.maxbets = $root.F18MaxBets.decode(reader, reader.uint32());
                break;
            case 9:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState1013.Period
     * @enum {string}
     * @property {number} betting=0 betting value
     * @property {number} playing=1 playing value
     */
    GameState1013.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "betting"] = 0;
        values[valuesById[1] = "playing"] = 1;
        return values;
    })();

    GameState1013.StakeItem = (function() {

        /**
         * Properties of a StakeItem.
         * @memberof GameState1013
         * @interface IStakeItem
         * @property {Bet1013.Body|null} [combo] StakeItem combo
         * @property {number|Long|null} [value] StakeItem value
         */

        /**
         * Constructs a new StakeItem.
         * @memberof GameState1013
         * @classdesc Represents a StakeItem.
         * @implements IStakeItem
         * @constructor
         * @param {GameState1013.IStakeItem=} [properties] Properties to set
         */
        function StakeItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StakeItem combo.
         * @member {Bet1013.Body} combo
         * @memberof GameState1013.StakeItem
         * @instance
         */
        StakeItem.prototype.combo = 0;

        /**
         * StakeItem value.
         * @member {number|Long} value
         * @memberof GameState1013.StakeItem
         * @instance
         */
        StakeItem.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new StakeItem instance using the specified properties.
         * @function create
         * @memberof GameState1013.StakeItem
         * @static
         * @param {GameState1013.IStakeItem=} [properties] Properties to set
         * @returns {GameState1013.StakeItem} StakeItem instance
         */
        StakeItem.create = function create(properties) {
            return new StakeItem(properties);
        };

        /**
         * Encodes the specified StakeItem message. Does not implicitly {@link GameState1013.StakeItem.verify|verify} messages.
         * @function encode
         * @memberof GameState1013.StakeItem
         * @static
         * @param {GameState1013.IStakeItem} message StakeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StakeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.combo != null && message.hasOwnProperty("combo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.combo);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
            return writer;
        };

        /**
         * Decodes a StakeItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState1013.StakeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState1013.StakeItem} StakeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StakeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1013.StakeItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.combo = reader.int32();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StakeItem;
    })();

    GameState1013.History = (function() {

        /**
         * Properties of a History.
         * @memberof GameState1013
         * @interface IHistory
         * @property {number|Long|null} [round] History round
         * @property {number|null} [ball] History ball
         */

        /**
         * Constructs a new History.
         * @memberof GameState1013
         * @classdesc Represents a History.
         * @implements IHistory
         * @constructor
         * @param {GameState1013.IHistory=} [properties] Properties to set
         */
        function History(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * History round.
         * @member {number|Long} round
         * @memberof GameState1013.History
         * @instance
         */
        History.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * History ball.
         * @member {number} ball
         * @memberof GameState1013.History
         * @instance
         */
        History.prototype.ball = 0;

        /**
         * Creates a new History instance using the specified properties.
         * @function create
         * @memberof GameState1013.History
         * @static
         * @param {GameState1013.IHistory=} [properties] Properties to set
         * @returns {GameState1013.History} History instance
         */
        History.create = function create(properties) {
            return new History(properties);
        };

        /**
         * Encodes the specified History message. Does not implicitly {@link GameState1013.History.verify|verify} messages.
         * @function encode
         * @memberof GameState1013.History
         * @static
         * @param {GameState1013.IHistory} message History message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        History.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
            if (message.ball != null && message.hasOwnProperty("ball"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ball);
            return writer;
        };

        /**
         * Decodes a History message from the specified reader or buffer.
         * @function decode
         * @memberof GameState1013.History
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState1013.History} History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        History.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState1013.History();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    message.ball = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return History;
    })();

    return GameState1013;
})();

$root.Bet999XX = (function() {

    /**
     * Properties of a Bet999XX.
     * @exports IBet999XX
     * @interface IBet999XX
     * @property {number|Long|null} [round] Bet999XX round
     * @property {Array.<number>|null} [body] Bet999XX body
     */

    /**
     * Constructs a new Bet999XX.
     * @exports Bet999XX
     * @classdesc Represents a Bet999XX.
     * @implements IBet999XX
     * @constructor
     * @param {IBet999XX=} [properties] Properties to set
     */
    function Bet999XX(properties) {
        this.body = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet999XX round.
     * @member {number|Long} round
     * @memberof Bet999XX
     * @instance
     */
    Bet999XX.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet999XX body.
     * @member {Array.<number>} body
     * @memberof Bet999XX
     * @instance
     */
    Bet999XX.prototype.body = $util.emptyArray;

    /**
     * Creates a new Bet999XX instance using the specified properties.
     * @function create
     * @memberof Bet999XX
     * @static
     * @param {IBet999XX=} [properties] Properties to set
     * @returns {Bet999XX} Bet999XX instance
     */
    Bet999XX.create = function create(properties) {
        return new Bet999XX(properties);
    };

    /**
     * Encodes the specified Bet999XX message. Does not implicitly {@link Bet999XX.verify|verify} messages.
     * @function encode
     * @memberof Bet999XX
     * @static
     * @param {IBet999XX} message Bet999XX message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet999XX.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
        if (message.body != null && message.body.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.body.length; ++i)
                writer.uint32(message.body[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Decodes a Bet999XX message from the specified reader or buffer.
     * @function decode
     * @memberof Bet999XX
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet999XX} Bet999XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet999XX.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet999XX();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.round = reader.uint64();
                break;
            case 2:
                if (!(message.body && message.body.length))
                    message.body = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.body.push(reader.uint32());
                } else
                    message.body.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Bet999XX;
})();

$root.GameState999XX = (function() {

    /**
     * Properties of a GameState999XX.
     * @exports IGameState999XX
     * @interface IGameState999XX
     * @property {ITimers|null} [timers] GameState999XX timers
     * @property {GameState999XX.Period|null} [period] GameState999XX period
     * @property {number|Long|null} [round] GameState999XX round
     * @property {Array.<GameState999XX.IHistoryItem>|null} [history] GameState999XX history
     * @property {Array.<number|Long>|null} [stakes] GameState999XX stakes
     * @property {Array.<GameState999XX.IStatisticItem>|null} [statistic] GameState999XX statistic
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState999XX gameStateCommonFields
     */

    /**
     * Constructs a new GameState999XX.
     * @exports GameState999XX
     * @classdesc Represents a GameState999XX.
     * @implements IGameState999XX
     * @constructor
     * @param {IGameState999XX=} [properties] Properties to set
     */
    function GameState999XX(properties) {
        this.history = [];
        this.stakes = [];
        this.statistic = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState999XX timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.timers = null;

    /**
     * GameState999XX period.
     * @member {GameState999XX.Period} period
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.period = 0;

    /**
     * GameState999XX round.
     * @member {number|Long} round
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState999XX history.
     * @member {Array.<GameState999XX.IHistoryItem>} history
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.history = $util.emptyArray;

    /**
     * GameState999XX stakes.
     * @member {Array.<number|Long>} stakes
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.stakes = $util.emptyArray;

    /**
     * GameState999XX statistic.
     * @member {Array.<GameState999XX.IStatisticItem>} statistic
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.statistic = $util.emptyArray;

    /**
     * GameState999XX gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState999XX
     * @instance
     */
    GameState999XX.prototype.gameStateCommonFields = null;

    /**
     * Creates a new GameState999XX instance using the specified properties.
     * @function create
     * @memberof GameState999XX
     * @static
     * @param {IGameState999XX=} [properties] Properties to set
     * @returns {GameState999XX} GameState999XX instance
     */
    GameState999XX.create = function create(properties) {
        return new GameState999XX(properties);
    };

    /**
     * Encodes the specified GameState999XX message. Does not implicitly {@link GameState999XX.verify|verify} messages.
     * @function encode
     * @memberof GameState999XX
     * @static
     * @param {IGameState999XX} message GameState999XX message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState999XX.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.history != null && message.history.length)
            for (var i = 0; i < message.history.length; ++i)
                $root.GameState999XX.HistoryItem.encode(message.history[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.stakes != null && message.stakes.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.stakes.length; ++i)
                writer.uint64(message.stakes[i]);
            writer.ldelim();
        }
        if (message.statistic != null && message.statistic.length)
            for (var i = 0; i < message.statistic.length; ++i)
                $root.GameState999XX.StatisticItem.encode(message.statistic[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameState999XX message from the specified reader or buffer.
     * @function decode
     * @memberof GameState999XX
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState999XX} GameState999XX
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState999XX.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState999XX();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                if (!(message.history && message.history.length))
                    message.history = [];
                message.history.push($root.GameState999XX.HistoryItem.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.stakes && message.stakes.length))
                    message.stakes = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.stakes.push(reader.uint64());
                } else
                    message.stakes.push(reader.uint64());
                break;
            case 6:
                if (!(message.statistic && message.statistic.length))
                    message.statistic = [];
                message.statistic.push($root.GameState999XX.StatisticItem.decode(reader, reader.uint32()));
                break;
            case 7:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState999XX.Period
     * @enum {string}
     * @property {number} betting=0 betting value
     * @property {number} playing=1 playing value
     */
    GameState999XX.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "betting"] = 0;
        values[valuesById[1] = "playing"] = 1;
        return values;
    })();

    GameState999XX.HistoryItem = (function() {

        /**
         * Properties of a HistoryItem.
         * @memberof GameState999XX
         * @interface IHistoryItem
         * @property {number|Long|null} [round] HistoryItem round
         * @property {Array.<number>|null} [wincombo] HistoryItem wincombo
         */

        /**
         * Constructs a new HistoryItem.
         * @memberof GameState999XX
         * @classdesc Represents a HistoryItem.
         * @implements IHistoryItem
         * @constructor
         * @param {GameState999XX.IHistoryItem=} [properties] Properties to set
         */
        function HistoryItem(properties) {
            this.wincombo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryItem round.
         * @member {number|Long} round
         * @memberof GameState999XX.HistoryItem
         * @instance
         */
        HistoryItem.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * HistoryItem wincombo.
         * @member {Array.<number>} wincombo
         * @memberof GameState999XX.HistoryItem
         * @instance
         */
        HistoryItem.prototype.wincombo = $util.emptyArray;

        /**
         * Creates a new HistoryItem instance using the specified properties.
         * @function create
         * @memberof GameState999XX.HistoryItem
         * @static
         * @param {GameState999XX.IHistoryItem=} [properties] Properties to set
         * @returns {GameState999XX.HistoryItem} HistoryItem instance
         */
        HistoryItem.create = function create(properties) {
            return new HistoryItem(properties);
        };

        /**
         * Encodes the specified HistoryItem message. Does not implicitly {@link GameState999XX.HistoryItem.verify|verify} messages.
         * @function encode
         * @memberof GameState999XX.HistoryItem
         * @static
         * @param {GameState999XX.IHistoryItem} message HistoryItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
            if (message.wincombo != null && message.wincombo.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.wincombo.length; ++i)
                    writer.uint32(message.wincombo[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a HistoryItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState999XX.HistoryItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState999XX.HistoryItem} HistoryItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState999XX.HistoryItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.uint64();
                    break;
                case 2:
                    if (!(message.wincombo && message.wincombo.length))
                        message.wincombo = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.wincombo.push(reader.uint32());
                    } else
                        message.wincombo.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return HistoryItem;
    })();

    GameState999XX.StatisticItem = (function() {

        /**
         * Properties of a StatisticItem.
         * @memberof GameState999XX
         * @interface IStatisticItem
         * @property {number|null} [win] StatisticItem win
         * @property {number|null} [count] StatisticItem count
         */

        /**
         * Constructs a new StatisticItem.
         * @memberof GameState999XX
         * @classdesc Represents a StatisticItem.
         * @implements IStatisticItem
         * @constructor
         * @param {GameState999XX.IStatisticItem=} [properties] Properties to set
         */
        function StatisticItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StatisticItem win.
         * @member {number} win
         * @memberof GameState999XX.StatisticItem
         * @instance
         */
        StatisticItem.prototype.win = 0;

        /**
         * StatisticItem count.
         * @member {number} count
         * @memberof GameState999XX.StatisticItem
         * @instance
         */
        StatisticItem.prototype.count = 0;

        /**
         * Creates a new StatisticItem instance using the specified properties.
         * @function create
         * @memberof GameState999XX.StatisticItem
         * @static
         * @param {GameState999XX.IStatisticItem=} [properties] Properties to set
         * @returns {GameState999XX.StatisticItem} StatisticItem instance
         */
        StatisticItem.create = function create(properties) {
            return new StatisticItem(properties);
        };

        /**
         * Encodes the specified StatisticItem message. Does not implicitly {@link GameState999XX.StatisticItem.verify|verify} messages.
         * @function encode
         * @memberof GameState999XX.StatisticItem
         * @static
         * @param {GameState999XX.IStatisticItem} message StatisticItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatisticItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.win != null && message.hasOwnProperty("win"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.win);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Decodes a StatisticItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameState999XX.StatisticItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState999XX.StatisticItem} StatisticItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatisticItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState999XX.StatisticItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.win = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return StatisticItem;
    })();

    return GameState999XX;
})();

$root.Odd4001 = (function() {

    /**
     * Properties of an Odd4001.
     * @exports IOdd4001
     * @interface IOdd4001
     * @property {number|Long|null} [odd] Odd4001 odd
     * @property {number|Long|null} [kind] Odd4001 kind
     * @property {number|null} [handicap] Odd4001 handicap
     * @property {number|null} [total] Odd4001 total
     * @property {number|null} [goals] Odd4001 goals
     * @property {number|Long|null} [teamA] Odd4001 teamA
     * @property {number|Long|null} [teamB] Odd4001 teamB
     * @property {Dynamics|null} [dynamics] Odd4001 dynamics
     */

    /**
     * Constructs a new Odd4001.
     * @exports Odd4001
     * @classdesc Represents an Odd4001.
     * @implements IOdd4001
     * @constructor
     * @param {IOdd4001=} [properties] Properties to set
     */
    function Odd4001(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Odd4001 odd.
     * @member {number|Long} odd
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.odd = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Odd4001 kind.
     * @member {number|Long} kind
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.kind = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Odd4001 handicap.
     * @member {number} handicap
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.handicap = 0;

    /**
     * Odd4001 total.
     * @member {number} total
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.total = 0;

    /**
     * Odd4001 goals.
     * @member {number} goals
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.goals = 0;

    /**
     * Odd4001 teamA.
     * @member {number|Long} teamA
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.teamA = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Odd4001 teamB.
     * @member {number|Long} teamB
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.teamB = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Odd4001 dynamics.
     * @member {Dynamics} dynamics
     * @memberof Odd4001
     * @instance
     */
    Odd4001.prototype.dynamics = 0;

    /**
     * Creates a new Odd4001 instance using the specified properties.
     * @function create
     * @memberof Odd4001
     * @static
     * @param {IOdd4001=} [properties] Properties to set
     * @returns {Odd4001} Odd4001 instance
     */
    Odd4001.create = function create(properties) {
        return new Odd4001(properties);
    };

    /**
     * Encodes the specified Odd4001 message. Does not implicitly {@link Odd4001.verify|verify} messages.
     * @function encode
     * @memberof Odd4001
     * @static
     * @param {IOdd4001} message Odd4001 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Odd4001.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.odd != null && message.hasOwnProperty("odd"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.odd);
        if (message.kind != null && message.hasOwnProperty("kind"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.kind);
        if (message.handicap != null && message.hasOwnProperty("handicap"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.handicap);
        if (message.total != null && message.hasOwnProperty("total"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
        if (message.goals != null && message.hasOwnProperty("goals"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.goals);
        if (message.teamA != null && message.hasOwnProperty("teamA"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.teamA);
        if (message.teamB != null && message.hasOwnProperty("teamB"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.teamB);
        if (message.dynamics != null && message.hasOwnProperty("dynamics"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.dynamics);
        return writer;
    };

    /**
     * Decodes an Odd4001 message from the specified reader or buffer.
     * @function decode
     * @memberof Odd4001
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Odd4001} Odd4001
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Odd4001.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Odd4001();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.odd = reader.uint64();
                break;
            case 2:
                message.kind = reader.uint64();
                break;
            case 3:
                message.handicap = reader.int32();
                break;
            case 4:
                message.total = reader.int32();
                break;
            case 5:
                message.goals = reader.int32();
                break;
            case 6:
                message.teamA = reader.uint64();
                break;
            case 7:
                message.teamB = reader.uint64();
                break;
            case 8:
                message.dynamics = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Odd4001;
})();

$root.Bet4001 = (function() {

    /**
     * Properties of a Bet4001.
     * @exports IBet4001
     * @interface IBet4001
     * @property {number|Long|null} [round] Bet4001 round
     * @property {IOdd4001|null} [odd] Bet4001 odd
     * @property {string|null} [team_AName] Bet4001 team_AName
     * @property {string|null} [team_BName] Bet4001 team_BName
     */

    /**
     * Constructs a new Bet4001.
     * @exports Bet4001
     * @classdesc Represents a Bet4001.
     * @implements IBet4001
     * @constructor
     * @param {IBet4001=} [properties] Properties to set
     */
    function Bet4001(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet4001 round.
     * @member {number|Long} round
     * @memberof Bet4001
     * @instance
     */
    Bet4001.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Bet4001 odd.
     * @member {IOdd4001|null|undefined} odd
     * @memberof Bet4001
     * @instance
     */
    Bet4001.prototype.odd = null;

    /**
     * Bet4001 team_AName.
     * @member {string} team_AName
     * @memberof Bet4001
     * @instance
     */
    Bet4001.prototype.team_AName = "";

    /**
     * Bet4001 team_BName.
     * @member {string} team_BName
     * @memberof Bet4001
     * @instance
     */
    Bet4001.prototype.team_BName = "";

    /**
     * Creates a new Bet4001 instance using the specified properties.
     * @function create
     * @memberof Bet4001
     * @static
     * @param {IBet4001=} [properties] Properties to set
     * @returns {Bet4001} Bet4001 instance
     */
    Bet4001.create = function create(properties) {
        return new Bet4001(properties);
    };

    /**
     * Encodes the specified Bet4001 message. Does not implicitly {@link Bet4001.verify|verify} messages.
     * @function encode
     * @memberof Bet4001
     * @static
     * @param {IBet4001} message Bet4001 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet4001.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.round);
        if (message.odd != null && message.hasOwnProperty("odd"))
            $root.Odd4001.encode(message.odd, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.team_AName != null && message.hasOwnProperty("team_AName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.team_AName);
        if (message.team_BName != null && message.hasOwnProperty("team_BName"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.team_BName);
        return writer;
    };

    /**
     * Decodes a Bet4001 message from the specified reader or buffer.
     * @function decode
     * @memberof Bet4001
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet4001} Bet4001
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet4001.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet4001();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.round = reader.uint64();
                break;
            case 2:
                message.odd = $root.Odd4001.decode(reader, reader.uint32());
                break;
            case 3:
                message.team_AName = reader.string();
                break;
            case 4:
                message.team_BName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    return Bet4001;
})();

$root.GameState4001 = (function() {

    /**
     * Properties of a GameState4001.
     * @exports IGameState4001
     * @interface IGameState4001
     * @property {ITimers|null} [timers] GameState4001 timers
     * @property {GameState4001.Period|null} [period] GameState4001 period
     * @property {number|Long|null} [round] GameState4001 round
     * @property {Array.<GameState4001.ITotalHistory>|null} [totalHistory] GameState4001 totalHistory
     * @property {Array.<GameState4001.IRoundTeamsHistory>|null} [roundTeamsHistory] GameState4001 roundTeamsHistory
     * @property {string|null} [video] GameState4001 video
     * @property {Array.<IOdd4001>|null} [odds] GameState4001 odds
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState4001 gameStateCommonFields
     * @property {string|null} [team_AName] GameState4001 team_AName
     * @property {string|null} [team_BName] GameState4001 team_BName
     */

    /**
     * Constructs a new GameState4001.
     * @exports GameState4001
     * @classdesc Represents a GameState4001.
     * @implements IGameState4001
     * @constructor
     * @param {IGameState4001=} [properties] Properties to set
     */
    function GameState4001(properties) {
        this.totalHistory = [];
        this.roundTeamsHistory = [];
        this.odds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState4001 timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.timers = null;

    /**
     * GameState4001 period.
     * @member {GameState4001.Period} period
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.period = 0;

    /**
     * GameState4001 round.
     * @member {number|Long} round
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * GameState4001 totalHistory.
     * @member {Array.<GameState4001.ITotalHistory>} totalHistory
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.totalHistory = $util.emptyArray;

    /**
     * GameState4001 roundTeamsHistory.
     * @member {Array.<GameState4001.IRoundTeamsHistory>} roundTeamsHistory
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.roundTeamsHistory = $util.emptyArray;

    /**
     * GameState4001 video.
     * @member {string} video
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.video = "";

    /**
     * GameState4001 odds.
     * @member {Array.<IOdd4001>} odds
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.odds = $util.emptyArray;

    /**
     * GameState4001 gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.gameStateCommonFields = null;

    /**
     * GameState4001 team_AName.
     * @member {string} team_AName
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.team_AName = "";

    /**
     * GameState4001 team_BName.
     * @member {string} team_BName
     * @memberof GameState4001
     * @instance
     */
    GameState4001.prototype.team_BName = "";

    /**
     * Creates a new GameState4001 instance using the specified properties.
     * @function create
     * @memberof GameState4001
     * @static
     * @param {IGameState4001=} [properties] Properties to set
     * @returns {GameState4001} GameState4001 instance
     */
    GameState4001.create = function create(properties) {
        return new GameState4001(properties);
    };

    /**
     * Encodes the specified GameState4001 message. Does not implicitly {@link GameState4001.verify|verify} messages.
     * @function encode
     * @memberof GameState4001
     * @static
     * @param {IGameState4001} message GameState4001 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState4001.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.round);
        if (message.totalHistory != null && message.totalHistory.length)
            for (var i = 0; i < message.totalHistory.length; ++i)
                $root.GameState4001.TotalHistory.encode(message.totalHistory[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.roundTeamsHistory != null && message.roundTeamsHistory.length)
            for (var i = 0; i < message.roundTeamsHistory.length; ++i)
                $root.GameState4001.RoundTeamsHistory.encode(message.roundTeamsHistory[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.video != null && message.hasOwnProperty("video"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.video);
        if (message.odds != null && message.odds.length)
            for (var i = 0; i < message.odds.length; ++i)
                $root.Odd4001.encode(message.odds[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.team_AName != null && message.hasOwnProperty("team_AName"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.team_AName);
        if (message.team_BName != null && message.hasOwnProperty("team_BName"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.team_BName);
        return writer;
    };

    /**
     * Decodes a GameState4001 message from the specified reader or buffer.
     * @function decode
     * @memberof GameState4001
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState4001} GameState4001
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState4001.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState4001();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.round = reader.uint64();
                break;
            case 4:
                if (!(message.totalHistory && message.totalHistory.length))
                    message.totalHistory = [];
                message.totalHistory.push($root.GameState4001.TotalHistory.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.roundTeamsHistory && message.roundTeamsHistory.length))
                    message.roundTeamsHistory = [];
                message.roundTeamsHistory.push($root.GameState4001.RoundTeamsHistory.decode(reader, reader.uint32()));
                break;
            case 6:
                message.video = reader.string();
                break;
            case 7:
                if (!(message.odds && message.odds.length))
                    message.odds = [];
                message.odds.push($root.Odd4001.decode(reader, reader.uint32()));
                break;
            case 8:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            case 9:
                message.team_AName = reader.string();
                break;
            case 10:
                message.team_BName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState4001.Period
     * @enum {string}
     * @property {number} betting=0 betting value
     * @property {number} playing=1 playing value
     */
    GameState4001.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "betting"] = 0;
        values[valuesById[1] = "playing"] = 1;
        return values;
    })();

    GameState4001.TotalHistory = (function() {

        /**
         * Properties of a TotalHistory.
         * @memberof GameState4001
         * @interface ITotalHistory
         * @property {Array.<IOdd4001>|null} [totalOdds] TotalHistory totalOdds
         * @property {string|null} [team_AName] TotalHistory team_AName
         * @property {string|null} [team_BName] TotalHistory team_BName
         * @property {Array.<IOdd4001>|null} [winningOdds] TotalHistory winningOdds
         * @property {number|Long|null} [roundId] TotalHistory roundId
         * @property {number|null} [team_A_Score] TotalHistory team_A_Score
         * @property {number|null} [team_B_Score] TotalHistory team_B_Score
         */

        /**
         * Constructs a new TotalHistory.
         * @memberof GameState4001
         * @classdesc Represents a TotalHistory.
         * @implements ITotalHistory
         * @constructor
         * @param {GameState4001.ITotalHistory=} [properties] Properties to set
         */
        function TotalHistory(properties) {
            this.totalOdds = [];
            this.winningOdds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TotalHistory totalOdds.
         * @member {Array.<IOdd4001>} totalOdds
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.totalOdds = $util.emptyArray;

        /**
         * TotalHistory team_AName.
         * @member {string} team_AName
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.team_AName = "";

        /**
         * TotalHistory team_BName.
         * @member {string} team_BName
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.team_BName = "";

        /**
         * TotalHistory winningOdds.
         * @member {Array.<IOdd4001>} winningOdds
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.winningOdds = $util.emptyArray;

        /**
         * TotalHistory roundId.
         * @member {number|Long} roundId
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.roundId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TotalHistory team_A_Score.
         * @member {number} team_A_Score
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.team_A_Score = 0;

        /**
         * TotalHistory team_B_Score.
         * @member {number} team_B_Score
         * @memberof GameState4001.TotalHistory
         * @instance
         */
        TotalHistory.prototype.team_B_Score = 0;

        /**
         * Creates a new TotalHistory instance using the specified properties.
         * @function create
         * @memberof GameState4001.TotalHistory
         * @static
         * @param {GameState4001.ITotalHistory=} [properties] Properties to set
         * @returns {GameState4001.TotalHistory} TotalHistory instance
         */
        TotalHistory.create = function create(properties) {
            return new TotalHistory(properties);
        };

        /**
         * Encodes the specified TotalHistory message. Does not implicitly {@link GameState4001.TotalHistory.verify|verify} messages.
         * @function encode
         * @memberof GameState4001.TotalHistory
         * @static
         * @param {GameState4001.ITotalHistory} message TotalHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TotalHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalOdds != null && message.totalOdds.length)
                for (var i = 0; i < message.totalOdds.length; ++i)
                    $root.Odd4001.encode(message.totalOdds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.team_AName != null && message.hasOwnProperty("team_AName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.team_AName);
            if (message.team_BName != null && message.hasOwnProperty("team_BName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.team_BName);
            if (message.winningOdds != null && message.winningOdds.length)
                for (var i = 0; i < message.winningOdds.length; ++i)
                    $root.Odd4001.encode(message.winningOdds[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.roundId);
            if (message.team_A_Score != null && message.hasOwnProperty("team_A_Score"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.team_A_Score);
            if (message.team_B_Score != null && message.hasOwnProperty("team_B_Score"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.team_B_Score);
            return writer;
        };

        /**
         * Decodes a TotalHistory message from the specified reader or buffer.
         * @function decode
         * @memberof GameState4001.TotalHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState4001.TotalHistory} TotalHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TotalHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState4001.TotalHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.totalOdds && message.totalOdds.length))
                        message.totalOdds = [];
                    message.totalOdds.push($root.Odd4001.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.team_AName = reader.string();
                    break;
                case 3:
                    message.team_BName = reader.string();
                    break;
                case 4:
                    if (!(message.winningOdds && message.winningOdds.length))
                        message.winningOdds = [];
                    message.winningOdds.push($root.Odd4001.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.roundId = reader.uint64();
                    break;
                case 6:
                    message.team_A_Score = reader.uint32();
                    break;
                case 7:
                    message.team_B_Score = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TotalHistory;
    })();

    GameState4001.RoundTeamsHistory = (function() {

        /**
         * Properties of a RoundTeamsHistory.
         * @memberof GameState4001
         * @interface IRoundTeamsHistory
         * @property {number|null} [team_AScore] RoundTeamsHistory team_AScore
         * @property {number|null} [team_BScore] RoundTeamsHistory team_BScore
         * @property {string|null} [team_AName] RoundTeamsHistory team_AName
         * @property {string|null} [team_BName] RoundTeamsHistory team_BName
         * @property {Array.<IOdd4001>|null} [winningOdds] RoundTeamsHistory winningOdds
         * @property {number|Long|null} [roundId] RoundTeamsHistory roundId
         */

        /**
         * Constructs a new RoundTeamsHistory.
         * @memberof GameState4001
         * @classdesc Represents a RoundTeamsHistory.
         * @implements IRoundTeamsHistory
         * @constructor
         * @param {GameState4001.IRoundTeamsHistory=} [properties] Properties to set
         */
        function RoundTeamsHistory(properties) {
            this.winningOdds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundTeamsHistory team_AScore.
         * @member {number} team_AScore
         * @memberof GameState4001.RoundTeamsHistory
         * @instance
         */
        RoundTeamsHistory.prototype.team_AScore = 0;

        /**
         * RoundTeamsHistory team_BScore.
         * @member {number} team_BScore
         * @memberof GameState4001.RoundTeamsHistory
         * @instance
         */
        RoundTeamsHistory.prototype.team_BScore = 0;

        /**
         * RoundTeamsHistory team_AName.
         * @member {string} team_AName
         * @memberof GameState4001.RoundTeamsHistory
         * @instance
         */
        RoundTeamsHistory.prototype.team_AName = "";

        /**
         * RoundTeamsHistory team_BName.
         * @member {string} team_BName
         * @memberof GameState4001.RoundTeamsHistory
         * @instance
         */
        RoundTeamsHistory.prototype.team_BName = "";

        /**
         * RoundTeamsHistory winningOdds.
         * @member {Array.<IOdd4001>} winningOdds
         * @memberof GameState4001.RoundTeamsHistory
         * @instance
         */
        RoundTeamsHistory.prototype.winningOdds = $util.emptyArray;

        /**
         * RoundTeamsHistory roundId.
         * @member {number|Long} roundId
         * @memberof GameState4001.RoundTeamsHistory
         * @instance
         */
        RoundTeamsHistory.prototype.roundId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RoundTeamsHistory instance using the specified properties.
         * @function create
         * @memberof GameState4001.RoundTeamsHistory
         * @static
         * @param {GameState4001.IRoundTeamsHistory=} [properties] Properties to set
         * @returns {GameState4001.RoundTeamsHistory} RoundTeamsHistory instance
         */
        RoundTeamsHistory.create = function create(properties) {
            return new RoundTeamsHistory(properties);
        };

        /**
         * Encodes the specified RoundTeamsHistory message. Does not implicitly {@link GameState4001.RoundTeamsHistory.verify|verify} messages.
         * @function encode
         * @memberof GameState4001.RoundTeamsHistory
         * @static
         * @param {GameState4001.IRoundTeamsHistory} message RoundTeamsHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundTeamsHistory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_AScore != null && message.hasOwnProperty("team_AScore"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.team_AScore);
            if (message.team_BScore != null && message.hasOwnProperty("team_BScore"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team_BScore);
            if (message.team_AName != null && message.hasOwnProperty("team_AName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.team_AName);
            if (message.team_BName != null && message.hasOwnProperty("team_BName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.team_BName);
            if (message.winningOdds != null && message.winningOdds.length)
                for (var i = 0; i < message.winningOdds.length; ++i)
                    $root.Odd4001.encode(message.winningOdds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.roundId);
            return writer;
        };

        /**
         * Decodes a RoundTeamsHistory message from the specified reader or buffer.
         * @function decode
         * @memberof GameState4001.RoundTeamsHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState4001.RoundTeamsHistory} RoundTeamsHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundTeamsHistory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState4001.RoundTeamsHistory();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.team_AScore = reader.uint32();
                    break;
                case 2:
                    message.team_BScore = reader.uint32();
                    break;
                case 3:
                    message.team_AName = reader.string();
                    break;
                case 4:
                    message.team_BName = reader.string();
                    break;
                case 5:
                    if (!(message.winningOdds && message.winningOdds.length))
                        message.winningOdds = [];
                    message.winningOdds.push($root.Odd4001.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.roundId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoundTeamsHistory;
    })();

    return GameState4001;
})();

/**
 * PokerHand enum.
 * @exports PokerHand
 * @enum {string}
 * @property {number} NoPair=0 NoPair value
 * @property {number} OnePair=1 OnePair value
 * @property {number} TwoPair=2 TwoPair value
 * @property {number} Trips=3 Trips value
 * @property {number} Straight=4 Straight value
 * @property {number} Flush=5 Flush value
 * @property {number} FlHouse=6 FlHouse value
 * @property {number} Quads=7 Quads value
 * @property {number} StFlush=8 StFlush value
 */
$root.PokerHand = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NoPair"] = 0;
    values[valuesById[1] = "OnePair"] = 1;
    values[valuesById[2] = "TwoPair"] = 2;
    values[valuesById[3] = "Trips"] = 3;
    values[valuesById[4] = "Straight"] = 4;
    values[valuesById[5] = "Flush"] = 5;
    values[valuesById[6] = "FlHouse"] = 6;
    values[valuesById[7] = "Quads"] = 7;
    values[valuesById[8] = "StFlush"] = 8;
    return values;
})();

/**
 * PokerStep enum.
 * @exports PokerStep
 * @enum {string}
 * @property {number} PreFlop=0 PreFlop value
 * @property {number} Flop=1 Flop value
 * @property {number} Turn=2 Turn value
 * @property {number} River=3 River value
 */
$root.PokerStep = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PreFlop"] = 0;
    values[valuesById[1] = "Flop"] = 1;
    values[valuesById[2] = "Turn"] = 2;
    values[valuesById[3] = "River"] = 3;
    return values;
})();

$root.GameState888 = (function() {

    /**
     * Properties of a GameState888.
     * @exports IGameState888
     * @interface IGameState888
     * @property {ITimers|null} [timers] GameState888 timers
     * @property {GameState888.Period|null} [period] GameState888 period
     * @property {PokerStep|null} [step] GameState888 step
     * @property {number|Long|null} [round] GameState888 round
     * @property {Array.<GameState888.ITable>|null} [tables] GameState888 tables
     * @property {Array.<GameState888.IHistory>|null} [history] GameState888 history
     * @property {IGameStateCommonFields|null} [gameStateCommonFields] GameState888 gameStateCommonFields
     */

    /**
     * Constructs a new GameState888.
     * @exports GameState888
     * @classdesc Represents a GameState888.
     * @implements IGameState888
     * @constructor
     * @param {IGameState888=} [properties] Properties to set
     */
    function GameState888(properties) {
        this.tables = [];
        this.history = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameState888 timers.
     * @member {ITimers|null|undefined} timers
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.timers = null;

    /**
     * GameState888 period.
     * @member {GameState888.Period} period
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.period = 0;

    /**
     * GameState888 step.
     * @member {PokerStep} step
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.step = 0;

    /**
     * GameState888 round.
     * @member {number|Long} round
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.round = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameState888 tables.
     * @member {Array.<GameState888.ITable>} tables
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.tables = $util.emptyArray;

    /**
     * GameState888 history.
     * @member {Array.<GameState888.IHistory>} history
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.history = $util.emptyArray;

    /**
     * GameState888 gameStateCommonFields.
     * @member {IGameStateCommonFields|null|undefined} gameStateCommonFields
     * @memberof GameState888
     * @instance
     */
    GameState888.prototype.gameStateCommonFields = null;

    /**
     * Creates a new GameState888 instance using the specified properties.
     * @function create
     * @memberof GameState888
     * @static
     * @param {IGameState888=} [properties] Properties to set
     * @returns {GameState888} GameState888 instance
     */
    GameState888.create = function create(properties) {
        return new GameState888(properties);
    };

    /**
     * Encodes the specified GameState888 message. Does not implicitly {@link GameState888.verify|verify} messages.
     * @function encode
     * @memberof GameState888
     * @static
     * @param {IGameState888} message GameState888 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameState888.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timers != null && message.hasOwnProperty("timers"))
            $root.Timers.encode(message.timers, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.period);
        if (message.step != null && message.hasOwnProperty("step"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.step);
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.round);
        if (message.tables != null && message.tables.length)
            for (var i = 0; i < message.tables.length; ++i)
                $root.GameState888.Table.encode(message.tables[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.history != null && message.history.length)
            for (var i = 0; i < message.history.length; ++i)
                $root.GameState888.History.encode(message.history[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.gameStateCommonFields != null && message.hasOwnProperty("gameStateCommonFields"))
            $root.GameStateCommonFields.encode(message.gameStateCommonFields, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a GameState888 message from the specified reader or buffer.
     * @function decode
     * @memberof GameState888
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameState888} GameState888
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameState888.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState888();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timers = $root.Timers.decode(reader, reader.uint32());
                break;
            case 2:
                message.period = reader.int32();
                break;
            case 3:
                message.step = reader.int32();
                break;
            case 4:
                message.round = reader.int64();
                break;
            case 5:
                if (!(message.tables && message.tables.length))
                    message.tables = [];
                message.tables.push($root.GameState888.Table.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.history && message.history.length))
                    message.history = [];
                message.history.push($root.GameState888.History.decode(reader, reader.uint32()));
                break;
            case 7:
                message.gameStateCommonFields = $root.GameStateCommonFields.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Period enum.
     * @name GameState888.Period
     * @enum {string}
     * @property {number} bet=0 bet value
     * @property {number} win=1 win value
     */
    GameState888.Period = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "bet"] = 0;
        values[valuesById[1] = "win"] = 1;
        return values;
    })();

    GameState888.Table = (function() {

        /**
         * Properties of a Table.
         * @memberof GameState888
         * @interface ITable
         * @property {number|null} [tableId] Table tableId
         * @property {Array.<IPlayingCard>|null} [communityCards] Table communityCards
         * @property {PokerHand|null} [winHand] Table winHand
         * @property {Array.<GameState888.Table.IPlayer>|null} [players] Table players
         * @property {Array.<GameState888.Table.IHandOdds>|null} [handsOdds] Table handsOdds
         */

        /**
         * Constructs a new Table.
         * @memberof GameState888
         * @classdesc Represents a Table.
         * @implements ITable
         * @constructor
         * @param {GameState888.ITable=} [properties] Properties to set
         */
        function Table(properties) {
            this.communityCards = [];
            this.players = [];
            this.handsOdds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Table tableId.
         * @member {number} tableId
         * @memberof GameState888.Table
         * @instance
         */
        Table.prototype.tableId = 0;

        /**
         * Table communityCards.
         * @member {Array.<IPlayingCard>} communityCards
         * @memberof GameState888.Table
         * @instance
         */
        Table.prototype.communityCards = $util.emptyArray;

        /**
         * Table winHand.
         * @member {PokerHand} winHand
         * @memberof GameState888.Table
         * @instance
         */
        Table.prototype.winHand = 0;

        /**
         * Table players.
         * @member {Array.<GameState888.Table.IPlayer>} players
         * @memberof GameState888.Table
         * @instance
         */
        Table.prototype.players = $util.emptyArray;

        /**
         * Table handsOdds.
         * @member {Array.<GameState888.Table.IHandOdds>} handsOdds
         * @memberof GameState888.Table
         * @instance
         */
        Table.prototype.handsOdds = $util.emptyArray;

        /**
         * Creates a new Table instance using the specified properties.
         * @function create
         * @memberof GameState888.Table
         * @static
         * @param {GameState888.ITable=} [properties] Properties to set
         * @returns {GameState888.Table} Table instance
         */
        Table.create = function create(properties) {
            return new Table(properties);
        };

        /**
         * Encodes the specified Table message. Does not implicitly {@link GameState888.Table.verify|verify} messages.
         * @function encode
         * @memberof GameState888.Table
         * @static
         * @param {GameState888.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
            if (message.communityCards != null && message.communityCards.length)
                for (var i = 0; i < message.communityCards.length; ++i)
                    $root.PlayingCard.encode(message.communityCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.winHand != null && message.hasOwnProperty("winHand"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.winHand);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.GameState888.Table.Player.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.handsOdds != null && message.handsOdds.length)
                for (var i = 0; i < message.handsOdds.length; ++i)
                    $root.GameState888.Table.HandOdds.encode(message.handsOdds[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @function decode
         * @memberof GameState888.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState888.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState888.Table();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.int32();
                    break;
                case 2:
                    if (!(message.communityCards && message.communityCards.length))
                        message.communityCards = [];
                    message.communityCards.push($root.PlayingCard.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.winHand = reader.int32();
                    break;
                case 4:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.GameState888.Table.Player.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.handsOdds && message.handsOdds.length))
                        message.handsOdds = [];
                    message.handsOdds.push($root.GameState888.Table.HandOdds.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Table.Player = (function() {

            /**
             * Properties of a Player.
             * @memberof GameState888.Table
             * @interface IPlayer
             * @property {number|null} [playerId] Player playerId
             * @property {number|null} [winCoeff] Player winCoeff
             * @property {Array.<IPlayingCard>|null} [pocketCards] Player pocketCards
             */

            /**
             * Constructs a new Player.
             * @memberof GameState888.Table
             * @classdesc Represents a Player.
             * @implements IPlayer
             * @constructor
             * @param {GameState888.Table.IPlayer=} [properties] Properties to set
             */
            function Player(properties) {
                this.pocketCards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Player playerId.
             * @member {number} playerId
             * @memberof GameState888.Table.Player
             * @instance
             */
            Player.prototype.playerId = 0;

            /**
             * Player winCoeff.
             * @member {number} winCoeff
             * @memberof GameState888.Table.Player
             * @instance
             */
            Player.prototype.winCoeff = 0;

            /**
             * Player pocketCards.
             * @member {Array.<IPlayingCard>} pocketCards
             * @memberof GameState888.Table.Player
             * @instance
             */
            Player.prototype.pocketCards = $util.emptyArray;

            /**
             * Creates a new Player instance using the specified properties.
             * @function create
             * @memberof GameState888.Table.Player
             * @static
             * @param {GameState888.Table.IPlayer=} [properties] Properties to set
             * @returns {GameState888.Table.Player} Player instance
             */
            Player.create = function create(properties) {
                return new Player(properties);
            };

            /**
             * Encodes the specified Player message. Does not implicitly {@link GameState888.Table.Player.verify|verify} messages.
             * @function encode
             * @memberof GameState888.Table.Player
             * @static
             * @param {GameState888.Table.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
                if (message.winCoeff != null && message.hasOwnProperty("winCoeff"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winCoeff);
                if (message.pocketCards != null && message.pocketCards.length)
                    for (var i = 0; i < message.pocketCards.length; ++i)
                        $root.PlayingCard.encode(message.pocketCards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Decodes a Player message from the specified reader or buffer.
             * @function decode
             * @memberof GameState888.Table.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameState888.Table.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState888.Table.Player();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int32();
                        break;
                    case 2:
                        message.winCoeff = reader.int32();
                        break;
                    case 3:
                        if (!(message.pocketCards && message.pocketCards.length))
                            message.pocketCards = [];
                        message.pocketCards.push($root.PlayingCard.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Player;
        })();

        Table.HandOdds = (function() {

            /**
             * Properties of a HandOdds.
             * @memberof GameState888.Table
             * @interface IHandOdds
             * @property {PokerHand|null} [hand] HandOdds hand
             * @property {number|null} [winCoeff] HandOdds winCoeff
             */

            /**
             * Constructs a new HandOdds.
             * @memberof GameState888.Table
             * @classdesc Represents a HandOdds.
             * @implements IHandOdds
             * @constructor
             * @param {GameState888.Table.IHandOdds=} [properties] Properties to set
             */
            function HandOdds(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HandOdds hand.
             * @member {PokerHand} hand
             * @memberof GameState888.Table.HandOdds
             * @instance
             */
            HandOdds.prototype.hand = 0;

            /**
             * HandOdds winCoeff.
             * @member {number} winCoeff
             * @memberof GameState888.Table.HandOdds
             * @instance
             */
            HandOdds.prototype.winCoeff = 0;

            /**
             * Creates a new HandOdds instance using the specified properties.
             * @function create
             * @memberof GameState888.Table.HandOdds
             * @static
             * @param {GameState888.Table.IHandOdds=} [properties] Properties to set
             * @returns {GameState888.Table.HandOdds} HandOdds instance
             */
            HandOdds.create = function create(properties) {
                return new HandOdds(properties);
            };

            /**
             * Encodes the specified HandOdds message. Does not implicitly {@link GameState888.Table.HandOdds.verify|verify} messages.
             * @function encode
             * @memberof GameState888.Table.HandOdds
             * @static
             * @param {GameState888.Table.IHandOdds} message HandOdds message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HandOdds.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hand != null && message.hasOwnProperty("hand"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hand);
                if (message.winCoeff != null && message.hasOwnProperty("winCoeff"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winCoeff);
                return writer;
            };

            /**
             * Decodes a HandOdds message from the specified reader or buffer.
             * @function decode
             * @memberof GameState888.Table.HandOdds
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameState888.Table.HandOdds} HandOdds
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HandOdds.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState888.Table.HandOdds();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.hand = reader.int32();
                        break;
                    case 2:
                        message.winCoeff = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return HandOdds;
        })();

        return Table;
    })();

    GameState888.History = (function() {

        /**
         * Properties of a History.
         * @memberof GameState888
         * @interface IHistory
         * @property {number|Long|null} [roundId] History roundId
         * @property {Array.<GameState888.History.ITable>|null} [tables] History tables
         */

        /**
         * Constructs a new History.
         * @memberof GameState888
         * @classdesc Represents a History.
         * @implements IHistory
         * @constructor
         * @param {GameState888.IHistory=} [properties] Properties to set
         */
        function History(properties) {
            this.tables = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * History roundId.
         * @member {number|Long} roundId
         * @memberof GameState888.History
         * @instance
         */
        History.prototype.roundId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * History tables.
         * @member {Array.<GameState888.History.ITable>} tables
         * @memberof GameState888.History
         * @instance
         */
        History.prototype.tables = $util.emptyArray;

        /**
         * Creates a new History instance using the specified properties.
         * @function create
         * @memberof GameState888.History
         * @static
         * @param {GameState888.IHistory=} [properties] Properties to set
         * @returns {GameState888.History} History instance
         */
        History.create = function create(properties) {
            return new History(properties);
        };

        /**
         * Encodes the specified History message. Does not implicitly {@link GameState888.History.verify|verify} messages.
         * @function encode
         * @memberof GameState888.History
         * @static
         * @param {GameState888.IHistory} message History message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        History.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roundId);
            if (message.tables != null && message.tables.length)
                for (var i = 0; i < message.tables.length; ++i)
                    $root.GameState888.History.Table.encode(message.tables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a History message from the specified reader or buffer.
         * @function decode
         * @memberof GameState888.History
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameState888.History} History
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        History.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState888.History();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roundId = reader.int64();
                    break;
                case 2:
                    if (!(message.tables && message.tables.length))
                        message.tables = [];
                    message.tables.push($root.GameState888.History.Table.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        History.Table = (function() {

            /**
             * Properties of a Table.
             * @memberof GameState888.History
             * @interface ITable
             * @property {number|null} [tableId] Table tableId
             * @property {Array.<number>|null} [winPlayerIds] Table winPlayerIds
             * @property {PokerHand|null} [winHand] Table winHand
             */

            /**
             * Constructs a new Table.
             * @memberof GameState888.History
             * @classdesc Represents a Table.
             * @implements ITable
             * @constructor
             * @param {GameState888.History.ITable=} [properties] Properties to set
             */
            function Table(properties) {
                this.winPlayerIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Table tableId.
             * @member {number} tableId
             * @memberof GameState888.History.Table
             * @instance
             */
            Table.prototype.tableId = 0;

            /**
             * Table winPlayerIds.
             * @member {Array.<number>} winPlayerIds
             * @memberof GameState888.History.Table
             * @instance
             */
            Table.prototype.winPlayerIds = $util.emptyArray;

            /**
             * Table winHand.
             * @member {PokerHand} winHand
             * @memberof GameState888.History.Table
             * @instance
             */
            Table.prototype.winHand = 0;

            /**
             * Creates a new Table instance using the specified properties.
             * @function create
             * @memberof GameState888.History.Table
             * @static
             * @param {GameState888.History.ITable=} [properties] Properties to set
             * @returns {GameState888.History.Table} Table instance
             */
            Table.create = function create(properties) {
                return new Table(properties);
            };

            /**
             * Encodes the specified Table message. Does not implicitly {@link GameState888.History.Table.verify|verify} messages.
             * @function encode
             * @memberof GameState888.History.Table
             * @static
             * @param {GameState888.History.ITable} message Table message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Table.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tableId != null && message.hasOwnProperty("tableId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
                if (message.winPlayerIds != null && message.winPlayerIds.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.winPlayerIds.length; ++i)
                        writer.int32(message.winPlayerIds[i]);
                    writer.ldelim();
                }
                if (message.winHand != null && message.hasOwnProperty("winHand"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.winHand);
                return writer;
            };

            /**
             * Decodes a Table message from the specified reader or buffer.
             * @function decode
             * @memberof GameState888.History.Table
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameState888.History.Table} Table
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Table.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameState888.History.Table();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tableId = reader.int32();
                        break;
                    case 2:
                        if (!(message.winPlayerIds && message.winPlayerIds.length))
                            message.winPlayerIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.winPlayerIds.push(reader.int32());
                        } else
                            message.winPlayerIds.push(reader.int32());
                        break;
                    case 3:
                        message.winHand = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            return Table;
        })();

        return History;
    })();

    return GameState888;
})();

$root.Bet888 = (function() {

    /**
     * Properties of a Bet888.
     * @exports IBet888
     * @interface IBet888
     * @property {number|Long|null} [round] Bet888 round
     * @property {PokerStep|null} [step] Bet888 step
     * @property {Array.<Bet888.IPlayerEvent>|null} [playerEvents] Bet888 playerEvents
     * @property {Array.<Bet888.IHandEvent>|null} [handEvents] Bet888 handEvents
     * @property {number|Long|null} [winCoeff] Bet888 winCoeff
     */

    /**
     * Constructs a new Bet888.
     * @exports Bet888
     * @classdesc Represents a Bet888.
     * @implements IBet888
     * @constructor
     * @param {IBet888=} [properties] Properties to set
     */
    function Bet888(properties) {
        this.playerEvents = [];
        this.handEvents = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bet888 round.
     * @member {number|Long} round
     * @memberof Bet888
     * @instance
     */
    Bet888.prototype.round = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Bet888 step.
     * @member {PokerStep} step
     * @memberof Bet888
     * @instance
     */
    Bet888.prototype.step = 0;

    /**
     * Bet888 playerEvents.
     * @member {Array.<Bet888.IPlayerEvent>} playerEvents
     * @memberof Bet888
     * @instance
     */
    Bet888.prototype.playerEvents = $util.emptyArray;

    /**
     * Bet888 handEvents.
     * @member {Array.<Bet888.IHandEvent>} handEvents
     * @memberof Bet888
     * @instance
     */
    Bet888.prototype.handEvents = $util.emptyArray;

    /**
     * Bet888 winCoeff.
     * @member {number|Long} winCoeff
     * @memberof Bet888
     * @instance
     */
    Bet888.prototype.winCoeff = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Bet888 instance using the specified properties.
     * @function create
     * @memberof Bet888
     * @static
     * @param {IBet888=} [properties] Properties to set
     * @returns {Bet888} Bet888 instance
     */
    Bet888.create = function create(properties) {
        return new Bet888(properties);
    };

    /**
     * Encodes the specified Bet888 message. Does not implicitly {@link Bet888.verify|verify} messages.
     * @function encode
     * @memberof Bet888
     * @static
     * @param {IBet888} message Bet888 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bet888.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && message.hasOwnProperty("round"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.round);
        if (message.step != null && message.hasOwnProperty("step"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.step);
        if (message.playerEvents != null && message.playerEvents.length)
            for (var i = 0; i < message.playerEvents.length; ++i)
                $root.Bet888.PlayerEvent.encode(message.playerEvents[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.handEvents != null && message.handEvents.length)
            for (var i = 0; i < message.handEvents.length; ++i)
                $root.Bet888.HandEvent.encode(message.handEvents[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.winCoeff != null && message.hasOwnProperty("winCoeff"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.winCoeff);
        return writer;
    };

    /**
     * Decodes a Bet888 message from the specified reader or buffer.
     * @function decode
     * @memberof Bet888
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bet888} Bet888
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bet888.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet888();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.round = reader.int64();
                break;
            case 2:
                message.step = reader.int32();
                break;
            case 3:
                if (!(message.playerEvents && message.playerEvents.length))
                    message.playerEvents = [];
                message.playerEvents.push($root.Bet888.PlayerEvent.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.handEvents && message.handEvents.length))
                    message.handEvents = [];
                message.handEvents.push($root.Bet888.HandEvent.decode(reader, reader.uint32()));
                break;
            case 5:
                message.winCoeff = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    Bet888.PlayerEvent = (function() {

        /**
         * Properties of a PlayerEvent.
         * @memberof Bet888
         * @interface IPlayerEvent
         * @property {number|null} [tableId] PlayerEvent tableId
         * @property {number|null} [playerId] PlayerEvent playerId
         */

        /**
         * Constructs a new PlayerEvent.
         * @memberof Bet888
         * @classdesc Represents a PlayerEvent.
         * @implements IPlayerEvent
         * @constructor
         * @param {Bet888.IPlayerEvent=} [properties] Properties to set
         */
        function PlayerEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerEvent tableId.
         * @member {number} tableId
         * @memberof Bet888.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.tableId = 0;

        /**
         * PlayerEvent playerId.
         * @member {number} playerId
         * @memberof Bet888.PlayerEvent
         * @instance
         */
        PlayerEvent.prototype.playerId = 0;

        /**
         * Creates a new PlayerEvent instance using the specified properties.
         * @function create
         * @memberof Bet888.PlayerEvent
         * @static
         * @param {Bet888.IPlayerEvent=} [properties] Properties to set
         * @returns {Bet888.PlayerEvent} PlayerEvent instance
         */
        PlayerEvent.create = function create(properties) {
            return new PlayerEvent(properties);
        };

        /**
         * Encodes the specified PlayerEvent message. Does not implicitly {@link Bet888.PlayerEvent.verify|verify} messages.
         * @function encode
         * @memberof Bet888.PlayerEvent
         * @static
         * @param {Bet888.IPlayerEvent} message PlayerEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            return writer;
        };

        /**
         * Decodes a PlayerEvent message from the specified reader or buffer.
         * @function decode
         * @memberof Bet888.PlayerEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bet888.PlayerEvent} PlayerEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet888.PlayerEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.int32();
                    break;
                case 2:
                    message.playerId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return PlayerEvent;
    })();

    Bet888.HandEvent = (function() {

        /**
         * Properties of a HandEvent.
         * @memberof Bet888
         * @interface IHandEvent
         * @property {number|null} [tableId] HandEvent tableId
         * @property {PokerHand|null} [hand] HandEvent hand
         */

        /**
         * Constructs a new HandEvent.
         * @memberof Bet888
         * @classdesc Represents a HandEvent.
         * @implements IHandEvent
         * @constructor
         * @param {Bet888.IHandEvent=} [properties] Properties to set
         */
        function HandEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandEvent tableId.
         * @member {number} tableId
         * @memberof Bet888.HandEvent
         * @instance
         */
        HandEvent.prototype.tableId = 0;

        /**
         * HandEvent hand.
         * @member {PokerHand} hand
         * @memberof Bet888.HandEvent
         * @instance
         */
        HandEvent.prototype.hand = 0;

        /**
         * Creates a new HandEvent instance using the specified properties.
         * @function create
         * @memberof Bet888.HandEvent
         * @static
         * @param {Bet888.IHandEvent=} [properties] Properties to set
         * @returns {Bet888.HandEvent} HandEvent instance
         */
        HandEvent.create = function create(properties) {
            return new HandEvent(properties);
        };

        /**
         * Encodes the specified HandEvent message. Does not implicitly {@link Bet888.HandEvent.verify|verify} messages.
         * @function encode
         * @memberof Bet888.HandEvent
         * @static
         * @param {Bet888.IHandEvent} message HandEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
            if (message.hand != null && message.hasOwnProperty("hand"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hand);
            return writer;
        };

        /**
         * Decodes a HandEvent message from the specified reader or buffer.
         * @function decode
         * @memberof Bet888.HandEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Bet888.HandEvent} HandEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bet888.HandEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.int32();
                    break;
                case 2:
                    message.hand = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return HandEvent;
    })();

    return Bet888;
})();

module.exports = $root;
