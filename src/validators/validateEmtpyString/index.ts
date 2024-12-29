import type { NewError } from "../../types/errors";
import type { Validate$ } from "../validate";

// like this or ? should we selected mode?
// export type ValidateEmptyString<T> = [T] extends ['']
export type _ValidateEmptyString<T> = T extends ""
  ? NewError<"NonLiteralError", "ValidateEmptyString", T>
  : never;

type _Try<$E, T> = [$E] extends [never] ? _ValidateEmptyString<T> : $E;

export type ValidateEmptyString<T> = _Try<Validate$<T>, T>;
