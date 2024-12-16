import type { IsOpenType } from "../../predicates/is";
import type { OPEN_TYPE_ERROR } from "../../types";

declare const __brand: unique symbol;

type $Brand<B> = { [__brand]: B };

export type Branded<T, B extends string> = [IsOpenType<T>] extends [true]
  ? OPEN_TYPE_ERROR
  : T & $Brand<B>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type x = Branded<"issue", Uppercase<string>>;
