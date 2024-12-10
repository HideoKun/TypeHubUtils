/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: IsExactUnion -> boolean
export type IsExactUnion<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

// TESTS
type TestUnionA = IsExactUnion<"a" | 1, "a" | 1>;
//   ^?
const testUnionA: TestUnionA = true;

type TestUnionB = IsExactUnion<"a" | "b" | "c", "a" | "b">;
//   ^?
// @ts-expect-error
const testUnionB: TestUnionB = "a";

type TestUnionC = IsExactUnion<"a" | "b", "a" | "b" | "c">;
//   ^?
// @ts-expect-error
const testUnionC: TestUnionC = "a";
