import type { IsStringLiteral } from "../isStringLiteral";

/**
 * A type that reverses a string literal type `Str`.
 * It accumulates the reversed characters in `Acc`.
 * If `Str` is not a string literal type, it returns `Acc`.
 *
 * @template Str - The string literal type to reverse.
 * @template Acc - The accumulator string that stores the reversed characters.
 * @returns {string} - Returns the reversed string.
 */
export type ReverseString<
  Str extends string,
  Acc extends string = ""
> = IsStringLiteral<Str> extends never
  ? never
  : Str extends `${infer First}${infer Last}`
    ? ReverseString<Last, `${First}${Acc}`>
    : Acc;
