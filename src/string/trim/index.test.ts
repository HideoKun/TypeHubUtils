import { expectTypeOf, it } from "vitest";
import type { TrimEnd, TrimStart, Trim } from ".";
import type { WHITE_SPACE } from "../../types";
import type { DropFirst } from "../dropFirst";

type TestStr = "test";

it("should work", () => {
  expectTypeOf<"test">().toEqualTypeOf < TrimStart<"test ">();
  expectTypeOf<"test">().toEqualTypeOf <
    TrimEnd<`${TestStr}${WHITE_SPACE}`, WHITE_SPACE>();
  expectTypeOf<"test">().toEqualTypeOf <
    Trim<`${WHITE_SPACE}${TestStr}${WHITE_SPACE}`, WHITE_SPACE>();
});

it("should work", () => {
  expectTypeOf<"">().toEqualTypeOf<DropFirst<"A">>();
  expectTypeOf<"B">().toEqualTypeOf<DropFirst<"AB">>();

  expectTypeOf<DropFirst<"">>().toBeNever();
  expectTypeOf<DropFirst<string>>().toBeNever();
});
