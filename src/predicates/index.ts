/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ALL_TYPES } from "../types";
import type { PredicateBuilder } from "../types/builder";

export type P<T> = PredicateBuilder<T, null>;

type IsBooleanD = P<never>;
//   ^?

type IsBooleanA = P<"a" | "b">;
//   ^?

type IsBooleanBbc = P<true | false>;
//   ^?
type IsBooleanBb = P<undefined | null>;
//   ^?
//   ^?

type IsBooleanBc = P<boolean>;
//   ^?

// ------------------------------

type IsBooleanBa = P<1 | 2>;
//   ^?

type IsBooleanC = P<"a" | 1>;
//   ^?

type x = ["a" | "1"] extends Exclude<ALL_TYPES, boolean> ? true : false;
