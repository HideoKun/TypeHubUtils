import type { _Extends } from "../operators/extends";
import type { GenericError } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type _AssertError$<T> = T extends { [key: string]: any }
  ? _Extends<keyof GenericError, keyof T> extends true
    ? true
    : never
  : never;
