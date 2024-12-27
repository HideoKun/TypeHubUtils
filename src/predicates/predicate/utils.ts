import type { NewMismatchError } from "../../types";

export type Catch$<T, Match> = T extends Match
  ? never
  : NewMismatchError<"Predicate", T>;
