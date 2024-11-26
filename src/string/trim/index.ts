import type { WHITE_SPACE } from "../../types/string";

/**
 * A type that removes all leading occurrences of characters specified by `Space` from the string literal type `S`.
 * It recursively matches and removes the characters from the start of the string.
 * If `S` is not a string literal type, it returns `never`.
 *
 * @template S - The string literal type to process.
 * @template Space - The characters to be removed from the start (default: `WHITE_SPACE`).
 * @returns {string | never} - Returns the resulting string literal type with leading characters removed, or `never` if `S` is not a string literal type.
 *
 * @example
 * type CheckTrimStart = TrimStart<"  Hello World  ">; // Result: "Hello World  "
 */

export type TrimStart<
  S extends string,
  Space extends string = WHITE_SPACE
> = S extends `${Space}${infer U}` ? TrimStart<U> : S;

type CheckTrimStart = TrimStart<"  Test   ">;
//    ^?

/**
 * A type that removes all trailing occurrences of characters specified by `Space` from the string literal type `S`.
 * It recursively matches and removes the characters from the end of the string.
 * If `S` is not a string literal type, it returns `never`.
 *
 * @template S - The string literal type to process.
 * @template Space - The characters to be removed from the end (default: `WHITE_SPACE`).
 * @returns {string | never} - Returns the resulting string literal type with trailing characters removed, or `never` if `S` is not a string literal type.
 *
 * @example
 * type CheckTrimEnd = TrimEnd<"  Hello World  ">; // Result: "  Hello World"
 */

export type TrimEnd<
  S extends string,
  Space extends string = WHITE_SPACE
> = S extends `${infer U}${Space}` ? TrimEnd<U> : S;

type CheckTrimEnd = TrimEnd<"  Test   ">;
//    ^?

/**
 * A type that removes all leading and trailing occurrences of characters specified by `Space` from the string literal type `S`.
 * This is achieved by first applying `TrimEnd` to remove trailing characters, then `TrimStart` to remove leading characters.
 * If `S` is not a string literal type, it returns `never`.
 *
 * @template S - The string literal type to process.
 * @template Space - The characters to be removed from both ends (default: `WHITE_SPACE`).
 * @returns {string | never} - Returns the resulting string literal type with leading and trailing characters removed, or `never` if `S` is not a string literal type.
 *
 * @example
 * type CheckTrim = Trim<"  Hello World  ">; // Result: "Hello World"
 */

export type Trim<
  S extends string,
  Space extends string = WHITE_SPACE
> = TrimStart<TrimEnd<S, Space>, Space>;

type CheckTrim = Trim<"  Test   ">;
//    ^?
