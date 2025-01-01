import type { IsError } from "../predicates/isError";
import type { NewError } from "../types";

/*
TODO;
AndEx<A> extends true
? DoA
: AndEx<A, B> extends true
? DoAB
: AndEx<A, B, C> extends true
? DoABC
*/

export type $InValidateNever<T> = [T] extends [never]
  ? NewError<"NeverError", "InValidateNever", T>
  : T;

export type InValidateAny<T> = [IsError<T>] extends [true]
  ? T
  : 0 extends 1 & T
    ? NewError<"AnyError", "InValidateAny", T>
    : T;

// export type InValidateUnknown<T> = [T] extends [GenericError] // overlap: any to Error
export type InValidateUnknown<T> = [IsError<T>] extends [true] // this is better, no overlap
  ? T
  : [unknown] extends [T]
    ? NewError<"UnknownError", "InValidateUnknown", T>
    : T;
