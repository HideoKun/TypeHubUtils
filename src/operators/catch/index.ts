import type { NewError } from "../../types";
import type { Validate$ } from "../../validators/validate";

export type $Catch<T, Context extends string> = [Validate$<T>] extends [never]
  ? T
  : NewError<"OutputError", Context, T>;
