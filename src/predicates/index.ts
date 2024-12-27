/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ALL_TYPES, GenericError } from "../types";
import type { IsError } from "./isError";
import type { Predicate } from "./predicate";

/*
- isFlat/Unary Union
- isHomogenicUnion
*/

type IsBooleanX<T> = [true] extends [T]
  ? [false] extends [T]
    ? true
    : false
  : false;

type XXX = IsBooleanX<boolean>;
type GenericErrorD = IsError<"a" | GenericError>;

export type P<T> = Predicate<T, string, { mode: "bool" }>;

// -------------------

type GenericErrorA = P<"a">;
//   ^?

type GenericErrorBc = P<1>;
//   ^?

type GenericErrorBbc = P<"a" | 1>;
//   ^?
type GenericErrorBb = P<undefined | null>;
//   ^?
//   ^?

// ------------------------------

type GenericErrorBa = P<1 | 2>;
//   ^?

type GenericErrorC = P<"a" | 1>;
//   ^?

type x = ["a" | "1"] extends Exclude<ALL_TYPES, boolean> ? true : false;

// [IsError<T>] extends [true]
type Uppercase$<T> = T extends string ? Uppercase<T> : never;

type Up<T extends string | GenericError> = [IsError<T>] extends [true]
  ? T
  : Uppercase$<T>;

//type Test = Up<P<"a" | 1>>;;

//---
// if this func is going to be used in recu
// it will become an issue

//
type GuardedType$<T extends string> = T extends string ? Uppercase<T> : never;

type A<T extends string> = T extends string ? Uppercase<T> : never;
