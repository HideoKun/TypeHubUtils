/* eslint-disable @typescript-eslint/no-unused-vars */
import type { GENERIC_ERROR, NewError, NIL } from "../types";
import type { Validate$ } from "../validators/validate";
import type { Predicate } from "./predicate";

export type $IsNever<T> = [T] extends [never] ? true : false;

// --- Nullability Predicates ---
// TODO: possible redundancy []
export type $IsAnyE<T> = [$IsNever<T>] extends [true]
  ? NewError<"AnyError", "IsAny", T>
  : 0 extends 1 & T
    ? true
    : false;

export type $IsUnknownE<T> = [$IsNever<T>] extends [true]
  ? NewError<"UnknownError", "IsUnknown", T>
  : 0 extends 1 & T
    ? false
    : [unknown] extends [T]
      ? true
      : false;

// doesnt work with any
// type XX = $IsUnknownE<any>;
//   ^?

/*
- missing erros
- below func is better - less branches
*/

// no error on return - why? pattern?
// non error validator
// all validators should return boolean | error
// - validate, verify

/*

high level
- return error extends GenericError
- calc one and use second func to return T ? T

*/

//  how to join validate with_Bypass, Pipe
// PTA!!! + callback hell
type Checked_YourLogic<T> = T extends string ? true : false;
// monad chain of quarded funcs
type MonadChain<T> = T extends GENERIC_ERROR ? T : Checked_YourLogic<T>;
type IsPredX<T> = MonadChain<Validate$<T>>;
type TestPred = IsPredX<"any">;
//   ^?

type pred<T> = C<B<A<T>>>;

// monad/ bypass chain of checked funcs
type A<$T> = [$T] extends [never] ? $T : $IsNever<$T>;
type B<$T> = [$T] extends [never] ? $T : $IsAnyE<$T>;
type C<$T> = [$T] extends [never] ? $T : $IsUnknownE<$T>;

// ABC is pipe pattern for single arity

export type IsOpenType<T> = [T] extends [never] // isNever
  ? true
  : 0 extends 1 & T // isAny
    ? true
    : [unknown] extends [T] // isUnknown
      ? true
      : false;

// unions are computed before passing to function
// type a = string | any | never;
// type b = IsOpenType<any | 1>; // true
// type C  =IsOpenType<'' | unknown>
//   ^?

export type IsNil<T> =
  IsOpenType<T> extends true
    ? NewError<"OpenTypeError", "IsNil", T>
    : [T] extends [NIL]
      ? true
      : false;

// --- Empty Predicates ---
export type IsEmpty<T> =
  IsOpenType<T> extends true
    ? true
    : // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      [T] extends [{}]
      ? true
      : "isEmptyArr & isEmptyStr & isEmptyObj"; // isEmptyMap & isEmptySet

// --- Type Predicates ---

export type IsString<T> = Predicate<T, string>;
export type IsNumber<T> = Predicate<T, number>;
export type IsBoolean<T> = Predicate<T, boolean>;

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
