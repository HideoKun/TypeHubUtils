import type { ValidateAll$ } from "../../validators/validateAll";

// how will it work with union?
// TODO: name - plain, flat, buggy,
// we have to had all possible bugy functions as well!!!
// maybe same file, same logic + $funcName$
// so no $ means: no input/ output check
// - square

// modes here

export type _IsLiteral<T, Match> = [T] extends [Match]
  ? [Match] extends [T]
    ? false
    : true
  : false;

type Try<$E, T, Match> = [$E] extends [never] ? _IsLiteral<T, Match> : $E;

type PreSet<T$, Match$> = Try<
  ValidateAll$<[T$, Match$]>,
  //
  T$,
  Match$
>;

export type IsStringLiteral<T> = PreSet<T, string>;

/*

- isStringLiteral
- isNumberLiteral
- isBooleanLiteral
- isBigIntLiteral
- isSymbolLiteral
- isUndefinedLiteral
- isNullLiteral
- isNeverLiteral
- isVoidLiteral

*/
