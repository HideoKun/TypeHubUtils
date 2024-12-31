import type { IsError } from "../predicates/isError";
import type { GENERIC_ERROR, NewError } from "../types";

/*
-> replace with url to repo

validator
- return: T | Error
- role: throw errors
*/

// we should use module as never boundry
// never should be managable at module level
// allow never at module level
// mark with comment how never is handled

// ----

// BOX_Extends<A, B> : CTA_Extends<A, B>;

// isString + CTA
// getStrings + debug

// export type IsError

/*

type A = PipeABC<T>
type B = IsXXX<T> extends true
? GetStrings<T>
: GetNumbers<T>

isSth extends true
? A
: B


type AndEx = And<Extends<A, B>, Extends<B, A>>;

AndEx<A> extends true
? DoA
: AndEx<A, B> extends true
? DoAB
: AndEx<A, B, C> extends true
? DoABC
*/

export type $InValidateNever<T> = [T] extends [never] ? GENERIC_ERROR : T;

export type InValidateAny<T> = [IsError<T>] extends [true]
  ? T
  : 0 extends 1 & T
    ? NewError<"AnyError", "SliceFront", T>
    : T;

// export type InValidateUnknown<T> = [T] extends [GenericError] // overlap: any to Error
export type InValidateUnknown<T> = [IsError<T>] extends [true] // this is better, no overlap
  ? T
  : [unknown] extends [T]
    ? NewError<"UnknownError", "SliceFront", T>
    : T;
