/* eslint-disable @typescript-eslint/no-unused-vars */

// TODO: add class support
// TODO: add symbol support

/**
 *
 * - wide
 * - deep wide?
 *
 * apply widening to a type
 */

// TODO: what about open type?
export type $Wide<T> =
  // PRIMITIVES
  T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends null
          ? null
          : T extends undefined
            ? undefined
            : // OBJECTS
              T extends (infer A)[]
              ? $Wide<A>
              : T extends object
                ? object
                : never;

// TODO: TESTS
type a = $Wide<"a">;
//   ^?
type b = $Wide<0>;
//   ^?
type c = $Wide<true>;
//   ^?
type d = $Wide<{ a: 1 }>; // TODO: fix, keep object, resolve value to Wide<Values>
//   ^?
type e = $Wide<string[]>;
//   ^?
type f = $Wide<Array<string[]>>;
//   ^?

// TODO: support other types
// type f = Wide<never>
// type g = Wide<unknown>
// type h = Wide<null>
// type i = Wide<undefined>
// type j = Wide<symbol>
// type k = Wide<Function>
// type l = Wide<Zero>
// type m = Wide<bigint>
// type n = Wide<Error>
// type o = Wide<RegExp>
// type p = Wide<Function>
// type q = Wide<Promise<any>>
// type r = Wide<Generator>
// type s = Wide<GeneratorFunction>
// type t = Wide<AsyncGenerator>
// type u = Wide<AsyncGeneratorFunction>
// type v = Wide<AsyncFunction>
