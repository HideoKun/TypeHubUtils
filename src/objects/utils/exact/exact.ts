import type { ConsistentSimpleObject } from "../../../testData/index";
import type { ExactObj } from "./exactObj";
import type { ExactUnion } from "./exactUnion";

// TODO: move to ./universal
export type Exact<A, B = never> = [A] extends [B]
  ? ExactUnion<A, B>
  : A extends any[]
  ? never
  : A extends object
  ? ExactObj<A>
  : never;

// TESTS ----------------------------
type TestExactObj = Exact<ConsistentSimpleObject>;
//   ^?
// @ts-expect-error
const testExactObj: TestExactObj = { a: "a", b: 1, c: true, d: "d" };

type TestExactUnionA = Exact<"a" | "b", "a" | "b">;
//   ^?
const testExactUnionA: TestExactUnionA = "a";

type TestExactUnionB = Exact<"a", "b">;
//   ^?
// @ts-expect-error
const testExactUnionB: TestExactUnionB = "a";

type TestExactUnionC = Exact<string[]>;
//   ^?
