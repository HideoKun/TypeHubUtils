import { expectTypeOf, it } from "vitest";
import type { DropFirst } from ".";
it("should work", () => {
  expectTypeOf<"">().toEqualTypeOf<DropFirst<"A">>();
  expectTypeOf<"B">().toEqualTypeOf<DropFirst<"AB">>();

  expectTypeOf<DropFirst<"">>().toBeNever();
  expectTypeOf<DropFirst<string>>().toBeNever();
});
