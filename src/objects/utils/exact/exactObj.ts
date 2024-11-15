import type { ConsistentSimpleObject } from "../../../testData/index";

export type ExactObj<T extends object> = { [K in keyof T]: T[K] };

// TESTS

type TestObj = ExactObj<ConsistentSimpleObject>;
//   ^?
// @ts-expect-error
const testObj: TestObj = { a: "a", b: 1, c: true, d: "d" };
