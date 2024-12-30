import type { $Catch } from "../../operators/catch";
import type { _ValidateUsableSting } from "../../validators/validateUsableSting";
import type { _GetStringLength_Back } from "./algo";

type Try<Err$, Str> = [Err$] extends [never]
  ? $Catch<_GetStringLength_Back<Str>, "GetStringLength_Try">
  : Err$;

export type GetStringLength<Str extends string> = Try<
  _ValidateUsableSting<Str>,
  Str
>;
export type GetStringLength_BACK<Str> = Try<_ValidateUsableSting<Str>, Str>;
