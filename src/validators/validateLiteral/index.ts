import type { NewError } from "../../types/errors";
import type { ValidateAll$ } from "../validateAll";

export type _ValidateLiteral<T, Match> = [T] extends [Match]
  ? [Match] extends [T]
    ? NewError<"NonLiteralError", "_ValidateLiteral", T>
    : never
  : never;

type _Try<$E, T, Match> = [$E] extends [never]
  ? _ValidateLiteral<T, Match>
  : $E;

type PreSet<T$, Match> = _Try<
  ValidateAll$<[T$, Match]>,
  //
  T$,
  Match
>;

// ------------------------------

export type ValidateStringLiteral<T> = PreSet<T, string>;
export type ValidateNumberLiteral<T> = PreSet<T, number>;
