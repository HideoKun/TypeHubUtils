import type { ObjUnion } from "../../testData";
import type { StrictObject } from "../../types";
import type { UnionToIntersection } from "../utils/unionToIntersection";

/**
 * Join - removes '&' from intersection type
 */
// https://millsp.github.io/ts-toolbelt/modules/any_compute.html
// https://github.com/sindresorhus/type-fest/blob/c0e163ddc95306033f92507620822f59f05790fb/source/simplify.d.ts
// TODO: name - join vs compute vs simplify vs normalize vs prettify
export type Join<T extends StrictObject> = {
    [K in keyof T]: T[K]
}

// TESTS
type TestIntersection = UnionToIntersection<ObjUnion>
//   ^?
type TestObj = Join<{a:1} & {b: { c: string[]}}>
//   ^?
