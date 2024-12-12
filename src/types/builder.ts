/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsExactUnion } from "../objects/utils";
import type { IsNever } from "../predicates/is";
import type { NEVER_ERROR, NON_HOMOGENIC_ERROR } from "./brokenType";
import type { ALL_TYPES } from "./primitives";
import type { Wider } from "./widening";

// operator
// boolean switch
export type _AnyMatch<U, T> = U extends T ? true : false;
// export type IsHomogenic<T, Match> =_AnyMatch<Exclude<ALL_TYPES, Match>, T>

// use recursive loop, to check in any union member is true
// union to array

/*
- is assginable to anything
*/

export type IsHomogenic<All, T> =
  All extends Wider<T> // 'a'
    ? // TODO: add Wider<T> for boolean -> true | false, so conditional type dist can be removed
      IsExactUnion<All, Wider<T>>
    : never;

type X = IsHomogenic<string | number, string>;
//   ^?

type XB = IsHomogenic<string | number | boolean, true | "number">;
//   ^?

type Z = IsExactUnion<string | number | boolean, "string" | "number">;
//   ^?

type XBT = IsHomogenic<string | number | boolean, boolean>;
//   ^?

type Y = Wider<true>;
type XX = IsHomogenic<string | number, Exclude<ALL_TYPES, string>>;
//   ^?

// TODO: Pattern: Progressive Type Definition
export type PredicateBuilder<T, Match> = [IsNever<T>] extends [true]
  ? NEVER_ERROR
  : [T] extends [Match] // wider?
    ? // : T extends Match // wider?
      true
    : // Is Any Kind Of Homogenic Union
      //: [T] extends [Exclude<ALL_TYPES, Match>]
      // upstream hack rejecting false and boolean
      IsHomogenic<ALL_TYPES, T> extends true // [Exclude<ALL_TYPES, Match>]
      ? false // 1 | 'a'
      : NON_HOMOGENIC_ERROR;
