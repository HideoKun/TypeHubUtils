import type { IsStringLiteral } from "../isStringLiteral";

// TODO: convert StrLength to const array + never
// export type DepthInc = [ ...Array<keyof StrLength>, never];
// TODO: move to types
export type DepthInc = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  never,
];

// TODO: GetStringLength - how to make it work with str of any length?

/**
 * A type that calculates the length of a string literal type `Str`.
 * If `Str` is not a string literal type, it returns `never`.
 *
 * @template Str - The string literal type to process.
 * @template Depth - The current depth of recursion, used to count the characters.
 * @returns {number | never} - Returns the length of the string if it is a string literal type, otherwise `never`.
 */
export type GetStringLength<
  Str extends string, //TODO: limit input to 50 chars
  Depth extends number = 0,
> =
  IsStringLiteral<Str> extends never
    ? never
    : Str extends `${infer StrFirst}${infer StrRest}`
      ? GetStringLength<StrRest, DepthInc[Depth]>
      : Depth;
