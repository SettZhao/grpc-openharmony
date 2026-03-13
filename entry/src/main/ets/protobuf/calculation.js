/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "@ohos/protobufjs";
$protobuf.util.Long=undefined
$protobuf.configure()
// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const calculation = $root.calculation = (() => {

    /**
     * Namespace calculation.
     * @exports calculation
     * @namespace
     */
    const calculation = {};

    calculation.CalculationService = (function() {

        /**
         * Constructs a new CalculationService service.
         * @memberof calculation
         * @classdesc Represents a CalculationService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CalculationService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CalculationService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CalculationService;

        /**
         * Creates new CalculationService service using the specified rpc implementation.
         * @function create
         * @memberof calculation.CalculationService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CalculationService} RPC service. Useful where requests and/or responses are streamed.
         */
        CalculationService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link calculation.CalculationService#add}.
         * @memberof calculation.CalculationService
         * @typedef AddCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {calculation.AddResponse} [response] AddResponse
         */

        /**
         * Calls Add.
         * @function add
         * @memberof calculation.CalculationService
         * @instance
         * @param {calculation.IAddRequest} request AddRequest message or plain object
         * @param {calculation.CalculationService.AddCallback} callback Node-style callback called with the error, if any, and AddResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CalculationService.prototype.add = function add(request, callback) {
            return this.rpcCall(add, $root.calculation.AddRequest, $root.calculation.AddResponse, request, callback);
        }, "name", { value: "Add" });

        /**
         * Calls Add.
         * @function add
         * @memberof calculation.CalculationService
         * @instance
         * @param {calculation.IAddRequest} request AddRequest message or plain object
         * @returns {Promise<calculation.AddResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link calculation.CalculationService#subtract}.
         * @memberof calculation.CalculationService
         * @typedef SubtractCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {calculation.SubtractResponse} [response] SubtractResponse
         */

        /**
         * Calls Subtract.
         * @function subtract
         * @memberof calculation.CalculationService
         * @instance
         * @param {calculation.ISubtractRequest} request SubtractRequest message or plain object
         * @param {calculation.CalculationService.SubtractCallback} callback Node-style callback called with the error, if any, and SubtractResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CalculationService.prototype.subtract = function subtract(request, callback) {
            return this.rpcCall(subtract, $root.calculation.SubtractRequest, $root.calculation.SubtractResponse, request, callback);
        }, "name", { value: "Subtract" });

        /**
         * Calls Subtract.
         * @function subtract
         * @memberof calculation.CalculationService
         * @instance
         * @param {calculation.ISubtractRequest} request SubtractRequest message or plain object
         * @returns {Promise<calculation.SubtractResponse>} Promise
         * @variation 2
         */

        return CalculationService;
    })();

    calculation.AddRequest = (function() {

        /**
         * Properties of an AddRequest.
         * @memberof calculation
         * @interface IAddRequest
         * @property {number|null} [num1] AddRequest num1
         * @property {number|null} [num2] AddRequest num2
         */

        /**
         * Constructs a new AddRequest.
         * @memberof calculation
         * @classdesc Represents an AddRequest.
         * @implements IAddRequest
         * @constructor
         * @param {calculation.IAddRequest=} [properties] Properties to set
         */
        function AddRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddRequest num1.
         * @member {number} num1
         * @memberof calculation.AddRequest
         * @instance
         */
        AddRequest.prototype.num1 = 0;

        /**
         * AddRequest num2.
         * @member {number} num2
         * @memberof calculation.AddRequest
         * @instance
         */
        AddRequest.prototype.num2 = 0;

        /**
         * Creates a new AddRequest instance using the specified properties.
         * @function create
         * @memberof calculation.AddRequest
         * @static
         * @param {calculation.IAddRequest=} [properties] Properties to set
         * @returns {calculation.AddRequest} AddRequest instance
         */
        AddRequest.create = function create(properties) {
            return new AddRequest(properties);
        };

        /**
         * Encodes the specified AddRequest message. Does not implicitly {@link calculation.AddRequest.verify|verify} messages.
         * @function encode
         * @memberof calculation.AddRequest
         * @static
         * @param {calculation.IAddRequest} message AddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num1 != null && Object.hasOwnProperty.call(message, "num1"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.num1);
            if (message.num2 != null && Object.hasOwnProperty.call(message, "num2"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.num2);
            return writer;
        };

        /**
         * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link calculation.AddRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculation.AddRequest
         * @static
         * @param {calculation.IAddRequest} message AddRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddRequest message from the specified reader or buffer.
         * @function decode
         * @memberof calculation.AddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculation.AddRequest} AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculation.AddRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.num1 = reader.double();
                        break;
                    }
                case 2: {
                        message.num2 = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculation.AddRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculation.AddRequest} AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddRequest message.
         * @function verify
         * @memberof calculation.AddRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num1 != null && message.hasOwnProperty("num1"))
                if (typeof message.num1 !== "number")
                    return "num1: number expected";
            if (message.num2 != null && message.hasOwnProperty("num2"))
                if (typeof message.num2 !== "number")
                    return "num2: number expected";
            return null;
        };

        /**
         * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculation.AddRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculation.AddRequest} AddRequest
         */
        AddRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.calculation.AddRequest)
                return object;
            let message = new $root.calculation.AddRequest();
            if (object.num1 != null)
                message.num1 = Number(object.num1);
            if (object.num2 != null)
                message.num2 = Number(object.num2);
            return message;
        };

        /**
         * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculation.AddRequest
         * @static
         * @param {calculation.AddRequest} message AddRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.num1 = 0;
                object.num2 = 0;
            }
            if (message.num1 != null && message.hasOwnProperty("num1"))
                object.num1 = options.json && !isFinite(message.num1) ? String(message.num1) : message.num1;
            if (message.num2 != null && message.hasOwnProperty("num2"))
                object.num2 = options.json && !isFinite(message.num2) ? String(message.num2) : message.num2;
            return object;
        };

        /**
         * Converts this AddRequest to JSON.
         * @function toJSON
         * @memberof calculation.AddRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddRequest
         * @function getTypeUrl
         * @memberof calculation.AddRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/calculation.AddRequest";
        };

        return AddRequest;
    })();

    calculation.AddResponse = (function() {

        /**
         * Properties of an AddResponse.
         * @memberof calculation
         * @interface IAddResponse
         * @property {number|null} [result] AddResponse result
         */

        /**
         * Constructs a new AddResponse.
         * @memberof calculation
         * @classdesc Represents an AddResponse.
         * @implements IAddResponse
         * @constructor
         * @param {calculation.IAddResponse=} [properties] Properties to set
         */
        function AddResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddResponse result.
         * @member {number} result
         * @memberof calculation.AddResponse
         * @instance
         */
        AddResponse.prototype.result = 0;

        /**
         * Creates a new AddResponse instance using the specified properties.
         * @function create
         * @memberof calculation.AddResponse
         * @static
         * @param {calculation.IAddResponse=} [properties] Properties to set
         * @returns {calculation.AddResponse} AddResponse instance
         */
        AddResponse.create = function create(properties) {
            return new AddResponse(properties);
        };

        /**
         * Encodes the specified AddResponse message. Does not implicitly {@link calculation.AddResponse.verify|verify} messages.
         * @function encode
         * @memberof calculation.AddResponse
         * @static
         * @param {calculation.IAddResponse} message AddResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.result);
            return writer;
        };

        /**
         * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link calculation.AddResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculation.AddResponse
         * @static
         * @param {calculation.IAddResponse} message AddResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddResponse message from the specified reader or buffer.
         * @function decode
         * @memberof calculation.AddResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculation.AddResponse} AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculation.AddResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.result = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculation.AddResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculation.AddResponse} AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddResponse message.
         * @function verify
         * @memberof calculation.AddResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result !== "number")
                    return "result: number expected";
            return null;
        };

        /**
         * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculation.AddResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculation.AddResponse} AddResponse
         */
        AddResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.calculation.AddResponse)
                return object;
            let message = new $root.calculation.AddResponse();
            if (object.result != null)
                message.result = Number(object.result);
            return message;
        };

        /**
         * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculation.AddResponse
         * @static
         * @param {calculation.AddResponse} message AddResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.json && !isFinite(message.result) ? String(message.result) : message.result;
            return object;
        };

        /**
         * Converts this AddResponse to JSON.
         * @function toJSON
         * @memberof calculation.AddResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddResponse
         * @function getTypeUrl
         * @memberof calculation.AddResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/calculation.AddResponse";
        };

        return AddResponse;
    })();

    calculation.SubtractRequest = (function() {

        /**
         * Properties of a SubtractRequest.
         * @memberof calculation
         * @interface ISubtractRequest
         * @property {number|null} [num1] SubtractRequest num1
         * @property {number|null} [num2] SubtractRequest num2
         */

        /**
         * Constructs a new SubtractRequest.
         * @memberof calculation
         * @classdesc Represents a SubtractRequest.
         * @implements ISubtractRequest
         * @constructor
         * @param {calculation.ISubtractRequest=} [properties] Properties to set
         */
        function SubtractRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubtractRequest num1.
         * @member {number} num1
         * @memberof calculation.SubtractRequest
         * @instance
         */
        SubtractRequest.prototype.num1 = 0;

        /**
         * SubtractRequest num2.
         * @member {number} num2
         * @memberof calculation.SubtractRequest
         * @instance
         */
        SubtractRequest.prototype.num2 = 0;

        /**
         * Creates a new SubtractRequest instance using the specified properties.
         * @function create
         * @memberof calculation.SubtractRequest
         * @static
         * @param {calculation.ISubtractRequest=} [properties] Properties to set
         * @returns {calculation.SubtractRequest} SubtractRequest instance
         */
        SubtractRequest.create = function create(properties) {
            return new SubtractRequest(properties);
        };

        /**
         * Encodes the specified SubtractRequest message. Does not implicitly {@link calculation.SubtractRequest.verify|verify} messages.
         * @function encode
         * @memberof calculation.SubtractRequest
         * @static
         * @param {calculation.ISubtractRequest} message SubtractRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubtractRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.num1 != null && Object.hasOwnProperty.call(message, "num1"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.num1);
            if (message.num2 != null && Object.hasOwnProperty.call(message, "num2"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.num2);
            return writer;
        };

        /**
         * Encodes the specified SubtractRequest message, length delimited. Does not implicitly {@link calculation.SubtractRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculation.SubtractRequest
         * @static
         * @param {calculation.ISubtractRequest} message SubtractRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubtractRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubtractRequest message from the specified reader or buffer.
         * @function decode
         * @memberof calculation.SubtractRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculation.SubtractRequest} SubtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubtractRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculation.SubtractRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.num1 = reader.double();
                        break;
                    }
                case 2: {
                        message.num2 = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubtractRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculation.SubtractRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculation.SubtractRequest} SubtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubtractRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubtractRequest message.
         * @function verify
         * @memberof calculation.SubtractRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubtractRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.num1 != null && message.hasOwnProperty("num1"))
                if (typeof message.num1 !== "number")
                    return "num1: number expected";
            if (message.num2 != null && message.hasOwnProperty("num2"))
                if (typeof message.num2 !== "number")
                    return "num2: number expected";
            return null;
        };

        /**
         * Creates a SubtractRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculation.SubtractRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculation.SubtractRequest} SubtractRequest
         */
        SubtractRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.calculation.SubtractRequest)
                return object;
            let message = new $root.calculation.SubtractRequest();
            if (object.num1 != null)
                message.num1 = Number(object.num1);
            if (object.num2 != null)
                message.num2 = Number(object.num2);
            return message;
        };

        /**
         * Creates a plain object from a SubtractRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculation.SubtractRequest
         * @static
         * @param {calculation.SubtractRequest} message SubtractRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubtractRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.num1 = 0;
                object.num2 = 0;
            }
            if (message.num1 != null && message.hasOwnProperty("num1"))
                object.num1 = options.json && !isFinite(message.num1) ? String(message.num1) : message.num1;
            if (message.num2 != null && message.hasOwnProperty("num2"))
                object.num2 = options.json && !isFinite(message.num2) ? String(message.num2) : message.num2;
            return object;
        };

        /**
         * Converts this SubtractRequest to JSON.
         * @function toJSON
         * @memberof calculation.SubtractRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubtractRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubtractRequest
         * @function getTypeUrl
         * @memberof calculation.SubtractRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubtractRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/calculation.SubtractRequest";
        };

        return SubtractRequest;
    })();

    calculation.SubtractResponse = (function() {

        /**
         * Properties of a SubtractResponse.
         * @memberof calculation
         * @interface ISubtractResponse
         * @property {number|null} [result] SubtractResponse result
         */

        /**
         * Constructs a new SubtractResponse.
         * @memberof calculation
         * @classdesc Represents a SubtractResponse.
         * @implements ISubtractResponse
         * @constructor
         * @param {calculation.ISubtractResponse=} [properties] Properties to set
         */
        function SubtractResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubtractResponse result.
         * @member {number} result
         * @memberof calculation.SubtractResponse
         * @instance
         */
        SubtractResponse.prototype.result = 0;

        /**
         * Creates a new SubtractResponse instance using the specified properties.
         * @function create
         * @memberof calculation.SubtractResponse
         * @static
         * @param {calculation.ISubtractResponse=} [properties] Properties to set
         * @returns {calculation.SubtractResponse} SubtractResponse instance
         */
        SubtractResponse.create = function create(properties) {
            return new SubtractResponse(properties);
        };

        /**
         * Encodes the specified SubtractResponse message. Does not implicitly {@link calculation.SubtractResponse.verify|verify} messages.
         * @function encode
         * @memberof calculation.SubtractResponse
         * @static
         * @param {calculation.ISubtractResponse} message SubtractResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubtractResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.result);
            return writer;
        };

        /**
         * Encodes the specified SubtractResponse message, length delimited. Does not implicitly {@link calculation.SubtractResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof calculation.SubtractResponse
         * @static
         * @param {calculation.ISubtractResponse} message SubtractResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubtractResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubtractResponse message from the specified reader or buffer.
         * @function decode
         * @memberof calculation.SubtractResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {calculation.SubtractResponse} SubtractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubtractResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.calculation.SubtractResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.result = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubtractResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof calculation.SubtractResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {calculation.SubtractResponse} SubtractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubtractResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubtractResponse message.
         * @function verify
         * @memberof calculation.SubtractResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubtractResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result !== "number")
                    return "result: number expected";
            return null;
        };

        /**
         * Creates a SubtractResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof calculation.SubtractResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {calculation.SubtractResponse} SubtractResponse
         */
        SubtractResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.calculation.SubtractResponse)
                return object;
            let message = new $root.calculation.SubtractResponse();
            if (object.result != null)
                message.result = Number(object.result);
            return message;
        };

        /**
         * Creates a plain object from a SubtractResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof calculation.SubtractResponse
         * @static
         * @param {calculation.SubtractResponse} message SubtractResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubtractResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.result = 0;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.json && !isFinite(message.result) ? String(message.result) : message.result;
            return object;
        };

        /**
         * Converts this SubtractResponse to JSON.
         * @function toJSON
         * @memberof calculation.SubtractResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubtractResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubtractResponse
         * @function getTypeUrl
         * @memberof calculation.SubtractResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubtractResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/calculation.SubtractResponse";
        };

        return SubtractResponse;
    })();

    return calculation;
})();

export { $root as default };
