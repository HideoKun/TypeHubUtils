/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsTrueArr } from "../../predicates/isArr";
import type { IsError } from "../../predicates/isError";
import type { EX_MODES } from "../../types/other";
import type { Validate$ } from "../../validators/validate";
import type { ValidateAll$ } from "../../validators/validateAll";
import type { Extends } from "../extends";

type Logic<
  Data extends unknown[],
  Match,
  Mode extends EX_MODES,
  Acc extends boolean[],
> = Data extends [infer First, ...infer Rest]
  ? Logic<Rest, Match, Mode, [...Acc, Extends<First, Match, Mode>]>
  : IsTrueArr<Acc> extends true
    ? // collect errors here
      true
    : false;

// fix with PTA, one?
export type ValidateAllOrg<Data extends unknown[], Acc = never> = Data extends [
  infer First,
  ...infer Rest,
]
  ? // never is ok in union context, when checked on output
    ValidateAll$<Rest, Acc | IsError<Validate$<First>>> //IsError<
  : Extends<Acc, false>;

export type In<
  E,
  Data extends unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = [E] extends [never] ? Logic<Data, Match, Mode, []> : E;

// ------------------------------------------------

export type AllExtends<
  Data extends unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = In<
  ValidateAll$<[Data, Match, Mode]>,
  //
  Data,
  Match,
  Mode
>;

// : error with values and context -  2Pass pattern for errors, compute upstream and check for errors
// use mapped object to collect args as errors

// broken
type EE_Open = AllExtends<[never, 2, 3], number>;
//   ^?
