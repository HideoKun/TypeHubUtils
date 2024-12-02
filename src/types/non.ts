import type { ALL_TYPES, PRIMITIVE } from "./primitives";
import type { StrictObject } from "./strict";

export type NON_ARRAY = StrictObject | PRIMITIVE;

export type NON_STRING = Exclude<ALL_TYPES, string>;
export type NON_NUMBER = Exclude<ALL_TYPES, number>;
export type NON_BOOLEAN = Exclude<ALL_TYPES, boolean>;

// export type NON_OBJECT = Exclude<ALL_TYPES, object>
// export type NON_FUNCTION = Exclude<ALL_TYPES, Function>
// export type NON_ARRAY = Exclude<ALL_TYPES, any[]>
// export type NON_NULL = Exclude<ALL_TYPES, null>
// export type NON_UNDEFINED = Exclude<ALL_TYPES, undefined>
// export type NON_SYMBOL = Exclude<ALL_TYPES, symbol>
// export type NON_BIGINT = Exclude<ALL_TYPES, bigint>
// export type NON_PROMISE = Exclude<ALL_TYPES, Promise<any>>
// export type NON_REGEXP = Exclude<ALL_TYPES, RegExp>
