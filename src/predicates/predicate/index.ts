import type { ValidateAll$ } from "../../validators/validateAll";
import type { ERROR, PRED_MODE } from "./config";
import type { Catch$ } from "./utils";

export type _Predicate<T, Match, Mode extends PRED_MODE = ERROR> = [T] extends [
  Match,
]
  ? true
  : Mode extends ERROR
    ? Catch$<T, Match> // never: reachable, but not single
    : false;

type _Try<E, T, Match, Mode extends PRED_MODE = ERROR> = [E] extends [never]
  ? _Predicate<T, Match, Mode>
  : E;

// ------------------------------------------------

export type Predicate<T, Match, Mode extends PRED_MODE = ERROR> = _Try<
  ValidateAll$<[T, Match, Mode]>,
  //
  T,
  Match,
  Mode
>;
