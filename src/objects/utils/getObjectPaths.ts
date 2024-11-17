// prettier-ignore
import type { ArrObjArrObj, ConsistentDeepObj } from "../../testData";

// TODO: what is the name for this pattern?
export type DecrementDepth = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: add support for arrays
export type GetObjPaths<
  T extends object | any [],
  Depth extends number = 10
> = Depth extends never
  ? never
  : T extends any[]
    ? never
    : T extends object
      ? {
          [K in keyof T]: K | K extends string
            ? T[K] extends object
              ? `${K}.${GetObjPaths<T[K], DecrementDepth[Depth]>}`
              : K
            : never;
        }[keyof T]
      : never;

// TESTS
// TODO: add non nullable to remove undefined from union
type TestA = GetObjPaths<ConsistentDeepObj>;
//   ^?

type TestB = GetObjPaths<ArrObjArrObj>;
//   ^?
