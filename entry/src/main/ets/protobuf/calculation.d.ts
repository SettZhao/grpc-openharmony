import $protobuf from "@ohos/protobufjs";
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()
/** Namespace calculation. */
export namespace calculation {

    /** Represents a CalculationService */
    class CalculationService extends $protobuf.rpc.Service {

        /**
         * Constructs a new CalculationService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new CalculationService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CalculationService;

        /**
         * Calls Add.
         * @param request AddRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddResponse
         */
        public add(request: calculation.IAddRequest, callback: calculation.CalculationService.AddCallback): void;

        /**
         * Calls Add.
         * @param request AddRequest message or plain object
         * @returns Promise
         */
        public add(request: calculation.IAddRequest): Promise<calculation.AddResponse>;

        /**
         * Calls Subtract.
         * @param request SubtractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SubtractResponse
         */
        public subtract(request: calculation.ISubtractRequest, callback: calculation.CalculationService.SubtractCallback): void;

        /**
         * Calls Subtract.
         * @param request SubtractRequest message or plain object
         * @returns Promise
         */
        public subtract(request: calculation.ISubtractRequest): Promise<calculation.SubtractResponse>;
    }

    namespace CalculationService {

        /**
         * Callback as used by {@link calculation.CalculationService#add}.
         * @param error Error, if any
         * @param [response] AddResponse
         */
        type AddCallback = (error: (Error|null), response?: calculation.AddResponse) => void;

        /**
         * Callback as used by {@link calculation.CalculationService#subtract}.
         * @param error Error, if any
         * @param [response] SubtractResponse
         */
        type SubtractCallback = (error: (Error|null), response?: calculation.SubtractResponse) => void;
    }

    /** Properties of an AddRequest. */
    interface IAddRequest {

        /** AddRequest num1 */
        num1?: (number|null);

        /** AddRequest num2 */
        num2?: (number|null);
    }

    /** Represents an AddRequest. */
    class AddRequest implements IAddRequest {

        /**
         * Constructs a new AddRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculation.IAddRequest);

        /** AddRequest num1. */
        public num1: number;

        /** AddRequest num2. */
        public num2: number;

        /**
         * Creates a new AddRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddRequest instance
         */
        public static create(properties?: calculation.IAddRequest): calculation.AddRequest;

        /**
         * Encodes the specified AddRequest message. Does not implicitly {@link calculation.AddRequest.verify|verify} messages.
         * @param message AddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculation.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link calculation.AddRequest.verify|verify} messages.
         * @param message AddRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculation.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculation.AddRequest;

        /**
         * Decodes an AddRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculation.AddRequest;

        /**
         * Verifies an AddRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddRequest
         */
        public static fromObject(object: { [k: string]: any }): calculation.AddRequest;

        /**
         * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
         * @param message AddRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculation.AddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddResponse. */
    interface IAddResponse {

        /** AddResponse result */
        result?: (number|null);
    }

    /** Represents an AddResponse. */
    class AddResponse implements IAddResponse {

        /**
         * Constructs a new AddResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculation.IAddResponse);

        /** AddResponse result. */
        public result: number;

        /**
         * Creates a new AddResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddResponse instance
         */
        public static create(properties?: calculation.IAddResponse): calculation.AddResponse;

        /**
         * Encodes the specified AddResponse message. Does not implicitly {@link calculation.AddResponse.verify|verify} messages.
         * @param message AddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculation.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link calculation.AddResponse.verify|verify} messages.
         * @param message AddResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculation.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculation.AddResponse;

        /**
         * Decodes an AddResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculation.AddResponse;

        /**
         * Verifies an AddResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddResponse
         */
        public static fromObject(object: { [k: string]: any }): calculation.AddResponse;

        /**
         * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
         * @param message AddResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculation.AddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubtractRequest. */
    interface ISubtractRequest {

        /** SubtractRequest num1 */
        num1?: (number|null);

        /** SubtractRequest num2 */
        num2?: (number|null);
    }

    /** Represents a SubtractRequest. */
    class SubtractRequest implements ISubtractRequest {

        /**
         * Constructs a new SubtractRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculation.ISubtractRequest);

        /** SubtractRequest num1. */
        public num1: number;

        /** SubtractRequest num2. */
        public num2: number;

        /**
         * Creates a new SubtractRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubtractRequest instance
         */
        public static create(properties?: calculation.ISubtractRequest): calculation.SubtractRequest;

        /**
         * Encodes the specified SubtractRequest message. Does not implicitly {@link calculation.SubtractRequest.verify|verify} messages.
         * @param message SubtractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculation.ISubtractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubtractRequest message, length delimited. Does not implicitly {@link calculation.SubtractRequest.verify|verify} messages.
         * @param message SubtractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculation.ISubtractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubtractRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculation.SubtractRequest;

        /**
         * Decodes a SubtractRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculation.SubtractRequest;

        /**
         * Verifies a SubtractRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubtractRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubtractRequest
         */
        public static fromObject(object: { [k: string]: any }): calculation.SubtractRequest;

        /**
         * Creates a plain object from a SubtractRequest message. Also converts values to other types if specified.
         * @param message SubtractRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculation.SubtractRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubtractRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubtractRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubtractResponse. */
    interface ISubtractResponse {

        /** SubtractResponse result */
        result?: (number|null);
    }

    /** Represents a SubtractResponse. */
    class SubtractResponse implements ISubtractResponse {

        /**
         * Constructs a new SubtractResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: calculation.ISubtractResponse);

        /** SubtractResponse result. */
        public result: number;

        /**
         * Creates a new SubtractResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubtractResponse instance
         */
        public static create(properties?: calculation.ISubtractResponse): calculation.SubtractResponse;

        /**
         * Encodes the specified SubtractResponse message. Does not implicitly {@link calculation.SubtractResponse.verify|verify} messages.
         * @param message SubtractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: calculation.ISubtractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubtractResponse message, length delimited. Does not implicitly {@link calculation.SubtractResponse.verify|verify} messages.
         * @param message SubtractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: calculation.ISubtractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubtractResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubtractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): calculation.SubtractResponse;

        /**
         * Decodes a SubtractResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubtractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): calculation.SubtractResponse;

        /**
         * Verifies a SubtractResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubtractResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubtractResponse
         */
        public static fromObject(object: { [k: string]: any }): calculation.SubtractResponse;

        /**
         * Creates a plain object from a SubtractResponse message. Also converts values to other types if specified.
         * @param message SubtractResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: calculation.SubtractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubtractResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubtractResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
