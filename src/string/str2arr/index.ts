import type { $Catch } from "../../operators/catch";
import type { Validate$ } from "../../validators/validate";
import type { _StrToArr_Back } from "./algo";

type Try<Err$, Str> = [Err$] extends [never]
  ? $Catch<_StrToArr_Back<Str>, "StrToArr">
  : Err$;

// filter Error before?

export type StrToArr<Str extends string> = Try<Validate$<Str, "flat">, Str>;
export type StrToArr_BACK<Str> = Try<Validate$<Str, "flat">, Str>;
