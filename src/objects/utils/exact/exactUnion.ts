// TODO: IsExactUnion -> boolean
export type ExactUnion<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? A
    : never
  : never;

// TESTS
type TestUnionA = ExactUnion<"a" | "b", "a" | "b">;
//   ^?
const testUnionA: TestUnionA = "a";

type TestUnionB = ExactUnion<"a" | "b" | "c", "a" | "b">;
//   ^?
// @ts-expect-error
const testUnionB: TestUnionB = "a";

type TestUnionC = ExactUnion<"a" | "b", "a" | "b" | "c">;
//   ^?
// @ts-expect-error
const testUnionC: TestUnionC = "a";
