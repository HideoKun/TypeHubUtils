export type SafeExtract<O extends object, K extends keyof O> = K extends keyof O
  ? O[K]
  : never;

// TESTS

// @ts-expect-error
type Test = SafeExtract<ConsistentSimpleObject, "missing-key">;
