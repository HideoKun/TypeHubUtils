import type { StrLength } from "../../types";
import type { IsStringLiteral } from "../isStringLiteral";

/**
 * A type that slices the front part of a string literal type `Str` based on the length of `LengthPattern`.
 * It accumulates the sliced characters in `Acc`.
 * If `Str` is not a string literal type, it returns `never`.
 *
 * @template Str - The string literal type to process.
 * @template LengthPattern - The pattern string used to determine the length of the slice.
 * @template Acc - The accumulator string that stores the sliced characters.
 * @returns {string | never} - Returns the accumulated string if `Str` is a string literal type, otherwise `never`.
 */
export type _SliceFront<
  Str extends string,
  LengthPattern extends string,
  Acc extends string = "",
> = IsStringLiteral<Str> extends Str
  ? Str extends `${infer StrFirst}${infer StrRest}`
    ? LengthPattern extends `${infer PatternFirst}${infer PatternRest}`
      ? _SliceFront<StrRest, PatternRest, `${Acc}${StrFirst}`>
      : Acc
    : never
  : never

export type SliceFront<
  Str extends string, //TODO: limit input to 50 chars
  Num extends keyof StrLength,
  Acc extends string = "",
> = _SliceFront<Str, StrLength[Num], Acc>
