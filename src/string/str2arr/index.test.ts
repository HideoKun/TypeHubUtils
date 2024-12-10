import { expectTypeOf, it } from "vitest";
import type { Str2Arr } from ".";

type TestStr = "Hello";

it("should work", () => {
  expectTypeOf<["H", "e", "l", "l", "o"]>().toEqualTypeOf<Str2Arr<TestStr>>();
});

it("should return empty array to empty string", () => {
  expectTypeOf<[]>().toEqualTypeOf<Str2Arr<"">>();
});
