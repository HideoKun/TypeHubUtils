import type { InferPost, InferPre } from "../../string";
import type { ConsistentDeepObj } from "../../testData/index";
import type { DecrementDepth, GetObjPaths } from "../utils/getObjectPaths";

type HasMiddleDot<T extends string> = T extends `${string}.${string}`
  ? T
  : never;

// TODO: add array support
// TODO: add union support
// TODO: rename to SafeGet or Get
export type SafePick<
  Obj extends Record<string, any>,
  Keys extends GetObjPaths<Obj, Depth>,
  Depth extends number = 10
> = Keys extends HasMiddleDot<Keys>
  ? {
      [K in InferPre<Keys>]: SafePick<
        Obj[K],
        Extract<InferPost<Keys>, GetObjPaths<Obj[K], DecrementDepth[Depth]>>,
        DecrementDepth[Depth]
      >;
    }[InferPre<Keys>] // remove mid objects
  : {
      [K in Keys]: Obj[K];
    }[Keys];

// @ts-expect-error
type A = SafePick<ConsistentDeepObj, "b.b1.c">;
//   ^?
type B = SafePick<ConsistentDeepObj, "a">;
//   ^?
// TODO: should we preserve object structure?
type C = SafePick<ConsistentDeepObj, "a" | "b.b2">;
//   ^?
