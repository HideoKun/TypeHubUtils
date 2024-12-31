/* eslint-disable @typescript-eslint/no-explicit-any */
import type { _Extends } from "../../operators/extends";
import type { GENERIC_ERROR } from "../../types";

// TODO: add modes, and brackets
export type IsError<T> = [T] extends [{ [key: string]: any }]
  ? [_Extends<keyof GENERIC_ERROR, keyof T>] extends [true]
    ? true
    : false
  : false;
