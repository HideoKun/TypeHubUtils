import type { _AssertError$ } from "../../assertions";
import type { _FilterError$ } from "../../filters";
import type { NewError } from "../../types/errors";

type LocalValidateEmptyString<
  T,
  ErrContext extends string = "_ValidateEmptyString",
> = T extends "" ? NewError<"EmptyStringError", ErrContext, T> : T;

// TODO: check with union mixed with errors
export type _ValidateEmptyString<T> = [_AssertError$<T>] extends [never]
  ? LocalValidateEmptyString<T>
  : _FilterError$<T>; // TODO: this filter might be unnecessary
