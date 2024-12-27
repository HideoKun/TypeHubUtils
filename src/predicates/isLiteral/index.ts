import type { ValidateAll$ } from "../../validators/validateAll";

// how will it work with union?
// TODO: name - plain, flat, buggy,
// we have to had all possible bugy functions as well!!!
// maybe same file, same logic + $funcName$
// so no $ means: no input/ output check
// - square

export type $IsLiteral$<T, Match> = T extends Match
  ? Match extends T
    ? false
    : true
  : false;

type In<E$, T, Match> = [E$] extends [never] ? $IsLiteral$<T, Match> : E$;

type Final<T$, Match> = In<
  ValidateAll$<[T$, Match]>,
  //
  T$,
  Match
>;

export type IsStringLiteral<T> = Final<T, string>;

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
