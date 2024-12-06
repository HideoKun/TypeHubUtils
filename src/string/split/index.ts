import type { BLANK_SIGN, WHITE_SPACE } from "../../types";
import type { IsStringLiteral } from "../isStringLiteral";

/**
 * A type that splits the string literal type `S` into an array of substrings separated by the `Separator`.
 * It recursively processes the string, accumulating substrings in an array based on the specified separator.
 * If either `S` or `Separator` is not a string literal type, it returns `never`.
 *
 * - If `Separator` is a blank string (`""`), the result will be an array where each character of `S` is an element.
 *
 * @template S - The string literal type to split.
 * @template Separator - The string literal type used as the separator (default: `BLANK_SIGN`).
 * @template Agr - The accumulator array for the substrings (used internally, defaults to `[]`).
 * @returns {string[] | never} - Returns an array of substrings split by the separator, or `never` if `S` or `Separator` is not a string literal type.
 *
 * @example
 * type SomeStr = "Velit Lorem consectetur do occaecat.";
 *
 * // Example 1: Splitting by a whitespace separator.
 * type CheckSplit = Split<SomeStr, WHITE_SPACE>; // Result: ["Velit", "Lorem", "consectetur", "do", "occaecat."]
 *
 * // Example 2: Splitting with a blank separator.
 * type CheckSplitBlank = Split<SomeStr, "">; // Result: ["V", "e", "l", "i", "t", " ", "L", "o", "r", "e", "m", " ", "c", "o", "n", "s", "e", "c", "t", "e", "t", "u", "r", " ", "d", "o", " ", "o", "c", "c", "a", "e", "c", "a", "t", "."]
 */

type Split<S extends string, Separator extends string = BLANK_SIGN, Agr extends string[] = []> =
  IsStringLiteral<S> extends never
    ? never
  : IsStringLiteral<Separator> extends never
    ? never
  : Separator extends BLANK_SIGN
    ? S extends `${infer FirstLetter}${infer Rest}`
        ? Split<Rest, Separator, [...Agr, FirstLetter]>
        : Agr
    : S extends `${infer Pre}${Separator}${infer Post}`
      ? Split<Post, Separator, [...Agr, Pre]>
        : S extends `${infer Post}`
          ? [...Agr, Post]
      : Agr;


type SomeStr = "Velit Lorem consectetur do occaecat."

// Example 1: Splitting by whitespace.
type CheckSplit = Split<SomeStr, WHITE_SPACE>;
//   ^?

// Example 2: Splitting with a blank separator.
type CheckSplitWithBlankSeparator = Split<SomeStr, BLANK_SIGN>;
//   ^?
