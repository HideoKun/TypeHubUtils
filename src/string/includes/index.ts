import type { Str2Arr } from "../str2arr";

/**
 * A type that checkes if a substring is a part of a string
 *
 * @template Str - The string type to check against.
 * @template MatchStr - The substring to check for or substring with wildcard.
 * @returns {true | false} - Returns true if search string is a part of the string or false if its not
 */

export type Includes<MatchStr extends string, Str extends string> =
  //
  _Includes<MatchStr, Str, "">;

type UpdateAcc<
  SearchStr extends string,
  MatchFirst extends string,
  MatchAccumulator extends string,
> = MatchFirst extends Str2Arr<SearchStr>[Str2Arr<MatchAccumulator>["length"]]
  ? `${MatchAccumulator}${MatchFirst}` // build match step by step
  : "";

export type _Includes<
  SearchStr extends string,
  MatchStr extends string,
  MatchAccumulator extends string,
> = SearchStr extends MatchAccumulator
  ? true
  : MatchStr extends `${infer MatchFirst}${infer MatchRest}`
    ? _Includes<
        SearchStr,
        MatchRest,
        UpdateAcc<SearchStr, MatchFirst, MatchAccumulator>
      >
    : false;
