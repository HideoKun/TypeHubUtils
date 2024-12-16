import type { NEVER_ERROR, NIL } from "../types";
import type { PredicateBuilder } from "./builder";

export type IsNever<T> = [T] extends [never] ? true : false;

// --- Nullability Predicates ---
// TODO: possible redundancy []
export type IsAny<T> = [IsNever<T>] extends [true]
  ? NEVER_ERROR
  : 0 extends 1 & T
    ? true
    : false;

export type IsUnknown<T> = [IsNever<T>] extends [true]
  ? NEVER_ERROR
  : [unknown] extends [T]
    ? true
    : false;

export type IsOpenType<T> = [T] extends [never]
  ? true
  : 0 extends 1 & T // isAny
    ? true
    : [unknown] extends [T] // isUnknown
      ? true
      : false;

// unions are computed before passing to function
// type a = string | any | never;
// type b = IsOpenType<any | 1>; // true
//   ^?

export type IsNil<T> =
  IsOpenType<T> extends true ? NEVER_ERROR : [T] extends [NIL] ? true : false;

// --- Empty Predicates ---
export type IsEmpty<T> =
  IsOpenType<T> extends true
    ? true
    : // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      [T] extends [{}]
      ? true
      : "isEmptyArr & isEmptyStr & isEmptyObj"; // isEmptyMap & isEmptySet

// --- Type Predicates ---

export type IsString<T> = PredicateBuilder<T, string>;
export type IsNumber<T> = PredicateBuilder<T, number>;
export type IsBoolean<T> = PredicateBuilder<T, boolean>;

// export type IsFunction<T> = PredicateBuilder<T, Function> // strict func
// export type IsObject<T> = PredicateBuilder<T, object> // strict object
// export type IsArray<T> = PredicateBuilder<T, any[]> // strict array
// export type IsNull<T> = PredicateBuilder<T, null>
// export type IsUndefined<T> = PredicateBuilder<T, undefined>
// export type IsSymbol<T> = PredicateBuilder<T, symbol>
// export type IsBigInt<T> = PredicateBuilder<T, bigint>
// export type IsPromise<T> = PredicateBuilder<T, Promise<any>>

// export type IsRegExp<T> = PredicateBuilder<T, RegExp>
// export type IsDate<T> = PredicateBuilder<T, Date>
// export type IsError<T> = PredicateBuilder<T, Error>
// export type IsMap<T> = PredicateBuilder<T, Map<any, any>>
// export type IsSet<T> = PredicateBuilder<T, Set<any>>
// export type IsWeakMap<T> = PredicateBuilder<T, WeakMap<any, any>>
// export type IsWeakSet<T> = PredicateBuilder<T, WeakSet<any>>
// export type IsInt8Array<T> = PredicateBuilder<T, Int8Array>
// export type IsUint8Array<T> = PredicateBuilder<T, Uint8Array>
// export type IsUint8ClampedArray<T> = PredicateBuilder<T, Uint8ClampedArray>
// export type IsInt16Array<T> = PredicateBuilder<T, Int16Array>
// export type IsUint16Array<T> = PredicateBuilder<T, Uint16Array>
// export type IsInt32Array<T> = PredicateBuilder<T, Int32Array>
// export type IsUint32Array<T> = PredicateBuilder<T, Uint32Array>
// export type IsFloat32Array<T> = PredicateBuilder<T, Float32Array>
// export type IsFloat64Array<T> = PredicateBuilder<T, Float64Array>
// export type IsBigInt64Array<T> = PredicateBuilder<T, BigInt64Array>
// export type IsBigUint64Array<T> = PredicateBuilder<T, BigUint64Array>
// export type IsArrayBuffer<T> = PredicateBuilder<T, ArrayBuffer>
// export type IsSharedArrayBuffer<T> = PredicateBuilder<T, SharedArrayBuffer>
