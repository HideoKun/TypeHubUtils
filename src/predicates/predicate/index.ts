import type { ValidateAll$ } from "../../validators/validateAll";
import type { ERROR, MODE } from "./config";
import type { Catch$ } from "./utils";

export type $Predicate$<T, Match, Mode extends MODE = ERROR> = [T] extends [
  Match,
]
  ? true
  : Mode extends ERROR
    ? Catch$<T, Match> // never: reachable, but not single
    : false;

type In<E, T, Match, Mode extends MODE = ERROR> = [E] extends [never]
  ? $Predicate$<T, Match, Mode>
  : E;

// ------------------------------------------------

export type Predicate<T, Match, Mode extends MODE = ERROR> = In<
  ValidateAll$<[T, Match, Mode]>,
  //
  T,
  Match,
  Mode
>;
