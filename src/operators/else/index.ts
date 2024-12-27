import type { IsOpenType } from "../../predicates/is";

// should we add NIL here?
export type $Else<A, B> = [IsOpenType<A>] extends [true] ? B : A;
