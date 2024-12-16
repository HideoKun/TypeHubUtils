import { expectTypeOf, it } from "vitest";
import type { NEVER_ERROR } from ".";
import type { PRIMITIVE } from "../primitives";

it("should work", () => {
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<NEVER_ERROR>();
});

it("should not work", () => {
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<PRIMITIVE>();
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<string>();
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<"string">();
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<number>();
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<1>();
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<boolean>();
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<{}>();
  // @ts-expect-error
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<object>();
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expectTypeOf<NEVER_ERROR>().toEqualTypeOf<any[]>();
});
