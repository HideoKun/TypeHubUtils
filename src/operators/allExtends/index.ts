/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsTrueArr } from "../../predicates/isArr";
import type { IsError } from "../../predicates/isError";
import type { EX_MODES } from "../../types/other";
import type { Validate } from "../../validators";
import type { isAssignable } from "../extends";

type Logic<
  Data extends unknown[],
  Match,
  Mode extends EX_MODES,
  Acc extends boolean[],
> = Data extends [infer First, ...infer Rest]
  ? Logic<Rest, Match, Mode, [...Acc, isAssignable<First, Match, Mode>]>
  : IsTrueArr<Acc> extends true
    ? // collect errors here
      true
    : false;

// fix with PTA
type InValidateEach<Data extends unknown[], Acc = never> = Data extends [
  infer First,
  ...infer Rest,
]
  ? // never is ok in union context, when checked on output
    InValidateEach<Rest, Acc | IsError<Validate<First>>> //IsError<
  : isAssignable<Acc, false>;

// 2Pass pattern for errors

// variadic version
export type AreAssignable<
  Data extends unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = InValidateEach<[Data, Match, Mode]>; // might be better with obj, array got no origin context - values: any -> e | never -> e
// ? logic
// : error with values and context -  2Pass pattern for errors, compute upstream and check for errors
// use mapped object to collect args as errors

type EE = AreAssignable<[null | string, 2, 3], string, "BOX">;
//   ^?
type EE_Open = AreAssignable<[1, 2, 3], "any", never>;
//   ^?
