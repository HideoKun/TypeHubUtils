import type { IsOpenType } from "./is";
import type { IsError } from "./isError";

export type IsValid<T> = [IsOpenType<T>] extends [true]
  ? false
  : [IsError<T>] extends [true]
    ? false
    : true;
