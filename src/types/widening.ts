/* eslint-disable @typescript-eslint/no-unused-vars */

// TODO: rethink array usage
// TODO: rethink object usage
// TODO: add class support
// TODO: add symbol support

/**
 *
 * - wide
 * - deep wide?
 *
 * apply widening to a type
 */

// operator?
export type Wider<T> =
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
              ? Wider<A>
              : T extends object
                ? object
                : never;

// TODO: TESTS
type a = Wider<"a">;
//   ^?
type b = Wider<0>;
//   ^?
type c = Wider<true>;
//   ^?
type d = Wider<{ a: 1 }>; // TODO: fix, keep object, resolve value to Wide<Values>
//   ^?
type e = Wider<string[]>;
//   ^?
type f = Wider<Array<string[]>>;
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
