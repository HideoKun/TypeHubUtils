import type { Validate$ } from "../../validators/validate";

export type $StrToArr$<
  Str extends string,
  Acc extends string[],
> = Str extends `${infer First}${infer Rest}`
  ? $StrToArr$<Rest, [...Acc, First]>
  : Acc;

export type In<E$, Str extends string> = [E$] extends [never]
  ? $StrToArr$<Str, []>
  : E$;

// ------------------------------------------------
/**
 * A type that coverts a string into array of chars
 *
 * @template Str - The string to change into array.
 * @returns {Array<string>} - Returns array of strings or an empty array for empty string
 */
export type StrToArr<Str extends string> = In<
  Validate$<Str>,
  //
  Str
>;
