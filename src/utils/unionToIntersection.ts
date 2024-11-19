import type { ConsistentObjUnion } from "../testData";

export type UnionToIntersection<U> =
    (U extends any ? (x: U) => void : never) extends (x: infer I) => void
    ? I
    : never;

// TESTS
type TestIntersection = UnionToIntersection<ConsistentObjUnion>
//   ^?
