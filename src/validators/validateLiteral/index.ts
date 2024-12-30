import type { _AssertError$ } from "../../assertions";
import type { _FilterError$ } from "../../filters";
import type { NewError } from "../../types/errors";

// TODO:
// - missing common version with never
// - missing mode for never | error
export type __ValidateLiteral<T, Match> = [T] extends [Match]
  ? [Match] extends [T]
    ? NewError<"NonLiteralError", "_ValidateLiteral", T>
    : T
  : NewError<"MismatchError", "_ValidateLiteral", T>;

type Try<T, Match> = [_AssertError$<T>] extends [never]
  ? __ValidateLiteral<T, Match>
  : _FilterError$<T>;

type PreSet<T$, Match> = Try<T$, Match>;

export type _ValidateStringLiteral<T> = PreSet<T, string>;
export type _ValidateNumberLiteral<T> = PreSet<T, number>;
