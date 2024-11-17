/**
 * If booth types are equal use second arg as type definition/ pointer
 *
 * @template A - The first type to compare.
 * @template B - The second type to compare.
 */

export type As<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? B
    : A
  : 'A';

// TESTS

type X = { x: string, y: number }
type Y =  { z?: boolean }
type Z = {  a: number }

type A  = X  & Y & Z
type Combo = {
  x: string,
  y: number,
  z?: boolean,
  a: number
}

type Check = As<Combo, A>
//   ^?
