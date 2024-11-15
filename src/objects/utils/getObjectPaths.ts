import type { ConsistentDeepObj } from "../../testData";

// TODO: what is the name for this pattern?
export type DecrementDepth = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: add support for arrays
export type GetObjPaths<
  T extends Record<string, any>,
  Depth extends number = 10
> = Depth extends never
  ? never
  : T extends object
  ? {
      [K in keyof T]:
        | K
        | (T[K] extends object
            ? `${K & string}.${GetObjPaths<T[K], DecrementDepth[Depth]>}`
            : never);
    }[keyof T]
  : never;

// TODO: add non nullable to remove undefined from union
type Test = GetObjPaths<ConsistentDeepObj>;
