import type { isAssignable } from "../../operators/extends";
import type { GenericError, NEVER_ERROR } from "../../types";
import type { IsOpenType } from "../is";

// what should happen with unions?
// how to fix this predicate?

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IsError<T> = T extends { [key: string]: any }
  ? // be carefull with unknown!!!!!!!
    // type IsError<T> = T extends { [key: `__${string}`]: any }
    isAssignable<keyof GenericError, keyof T> extends true
    ? true
    : false
  : false;

// trash ------------------------------------

// what is the name for this pattern: do CTD to get any true
// this should be present in name of func

export type xIsError<T> = [T] extends GenericError
  ? true
  : // disable boolean return
    never;

// - split + never by pass

// names should suggest shape of physcial objects/ tools/ moving parts

export type HasAtLeastOneError$<T> = T extends GenericError ? true : never;

// type ^Unreachable<T> = T extends never ? never : never;

// PREDICATES RULES
// - all type should be square, helpers should be singular
export type oldOne_IsError<T> =
  IsOpenType<T> extends true
    ? NEVER_ERROR
    : [HasAtLeastOneError$<T>] extends [true]
      ? true
      : false;

/*
--- OPEN TYPE ---
unknown and any, overrides all types
never could be only singular
[] are not necessary
- - -
$IsInvalidE - might skip E if all funcs from dir might return error

-----------------
Func Types

Conditions:
- true
- false
- [true]
- [false]


Output:
- true
- true | never
- false
- false | never

- boolean
- error

Output Types:
- xxx2 [square check]
- xxxB boolean


hasError
hasSomeErrors

is - singular
TS - all plural

*/

// TOOLS

// HeavyTypes - util to find slower type
