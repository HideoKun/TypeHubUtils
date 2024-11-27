import { expectTypeOf, it } from "vitest";
import type { NEW_LINE, WHITE_SPACE } from "../../types";
import type { Trim, TrimEnd, TrimStart } from ".";

type TestStr = "test";

it("should work", () => {
  expectTypeOf<TestStr>().toEqualTypeOf<TrimStart<`${WHITE_SPACE}${TestStr}`, WHITE_SPACE>>();
  expectTypeOf<TestStr>().toEqualTypeOf<TrimEnd<`${TestStr}${WHITE_SPACE}`, WHITE_SPACE>>();
  expectTypeOf<TestStr>().toEqualTypeOf<Trim<`${WHITE_SPACE}${TestStr}${WHITE_SPACE}`, WHITE_SPACE>>();

  expectTypeOf<Trim<string>>().toBeNever();
});

it("shouldn't work", () => {
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf<TrimStart<`${NEW_LINE}${TestStr}`, WHITE_SPACE>>();
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf<TrimEnd<`${TestStr}${NEW_LINE}`, WHITE_SPACE>>();
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf< Trim<`${NEW_LINE}${TestStr}${NEW_LINE}`, WHITE_SPACE>>();
});

