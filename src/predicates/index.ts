/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ALL_TYPES } from "../types";
import type { PredicateBuilder } from "./builder";

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

export type P<T> = PredicateBuilder<T, string>;

type IsBooleanD = P<never>;
//   ^?

type IsBooleanA = P<"a" | 1>;
//   ^?

type IsBooleanBbc = P<true | false>;
//   ^?
type IsBooleanBb = P<undefined | null>;
//   ^?
//   ^?

type IsBooleanBc = P<"null">;
//   ^?

// ------------------------------

type IsBooleanBa = P<1 | 2>;
//   ^?

type IsBooleanC = P<"a" | 1>;
//   ^?

type x = ["a" | "1"] extends Exclude<ALL_TYPES, boolean> ? true : false;
