import type { ANY_ERROR, NEVER_ERROR, UNKNOWN_ERROR } from "../../types/errors";

// TODO: add context to errors

export type Validate$<T$, IsChainable extends "chain" | "flat" = "chain"> = [
  T$,
] extends [never] // isNever
  ? NEVER_ERROR
  : 0 extends 1 & T$ // isAny
    ? ANY_ERROR
    : [unknown] extends [T$] // isUnknown
      ? UNKNOWN_ERROR
      : IsChainable extends "chain"
        ? T$
        : never;
