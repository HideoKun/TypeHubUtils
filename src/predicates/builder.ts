/* eslint-disable @typescript-eslint/no-unused-vars */
import type { $Wide } from "../operators/wide";
import type { NEVER_ERROR, NON_HOMOGENIC_ERROR } from "../types/errors";
import type { ALL_TYPES } from "../types/primitives";
import type { IsOpenType } from "./is";
import type { IsEqual } from "./isEqual";

// operator
// boolean switch
export type _AnyMatch<U, T> = U extends T ? true : false;
// export type IsHomogenic<T, Match> =_AnyMatch<Exclude<ALL_TYPES, Match>, T>

// use recursive loop, to check in any union member is true
// union to array

/*
- is assginable to anything
*/

// TODO: this is broken, isHomogenic vs isWideHomogenic
/*
- collect all types
- try to assign to each type
*/

export type IsHomogenic<All, T> =
  All extends $Wide<T> // 'a'
    ? // TODO: add Wider<T> for boolean -> true | false, so conditional type dist can be removed
      IsEqual<All, $Wide<T>>
    : never;

type X = IsHomogenic<string | number, string>;
//   ^?

type XB = IsHomogenic<string | number | boolean, true | "number">;
//   ^?

type Z = IsEqual<string | number | boolean, "string" | "number">;
//   ^?

type XBT = IsHomogenic<string | number | boolean, boolean>;
//   ^?

type Y = $Wide<true>;
type XX = IsHomogenic<string | number, Exclude<ALL_TYPES, string>>;
//   ^?

// TODO: Pattern: Progressive Type Definition
export type PredicateBuilder<T, Match> = [IsOpenType<T>] extends [true]
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
