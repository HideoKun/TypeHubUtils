import { expectTypeOf, it } from "vitest";
import type { ConsistentSimpleObject } from "../../testData";
import type { SafeExtract } from "./safeExtract";

it("should work", () => {
  expectTypeOf<string>().toEqualTypeOf<
    SafeExtract<ConsistentSimpleObject, "a">
  >();
  expectTypeOf<number>().toEqualTypeOf<
    SafeExtract<ConsistentSimpleObject, "b">
  >();
  expectTypeOf<boolean>().toEqualTypeOf<
    SafeExtract<ConsistentSimpleObject, "c">
  >();
});

it("should not work", () => {
  //@ts-expect-error
  expectTypeOf<SafeExtract<ConsistentSimpleArr, 0>>().toBeNever();

  // @ts-expect-error
  expectTypeOf<SafeExtract<ConsistentSimpleObject, "z">>().toBeNever();

  // @ts-expect-error
  expectTypeOf<string>().toEqualTypeOf<SafeExtract<{}, "z">>();

  // @ts-expect-error
  expectTypeOf<"ABC">().toEqualTypeOf<SafeExtract<ConsistentSimpleObject, 3>>();
});
