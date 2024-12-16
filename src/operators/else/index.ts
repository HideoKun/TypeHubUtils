import type { IsOpenType } from "../../predicates/is";

export type Else<A, B> = [IsOpenType<A>] extends [true] ? B : A;
