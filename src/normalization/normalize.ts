import type { ConsistentObjIntersection } from "../testData";
import type { StrictObject } from "../types";

/**
 * Normalize - removes '&' from intersection type
 */
// https://millsp.github.io/ts-toolbelt/modules/any_compute.html
// https://github.com/sindresorhus/type-fest/blob/c0e163ddc95306033f92507620822f59f05790fb/source/simplify.d.ts
// TODO: name - join vs compute vs simplify vs normalize vs prettify
export type Normalize<T extends StrictObject> = {
    [K in keyof T]: T[K]
}

// TESTS
type TestObj = Normalize<ConsistentObjIntersection>
//   ^?
