import { expectTypeOf, it } from "vitest";
import type { GetStringLength } from ".";
import type { PRIMITIVE } from "../../types";

type NonString = Exclude<PRIMITIVE, string> // TODO: rethink

it("should not work for non string", () => {
  // @ts-expect-error
  expectTypeOf<string>().toEqualTypeOf<GetStringLength<string, 1>>();
});

it("should return never for non string literal", () => {
  expectTypeOf<GetStringLength<string>>().toBeNever();
});

it("should work with string literals", () => {
  expectTypeOf<0>().toEqualTypeOf<GetStringLength<"">>();
  expectTypeOf<1>().toEqualTypeOf<GetStringLength<"A">>();
  expectTypeOf<2>().toEqualTypeOf<GetStringLength<"AB">>();
  expectTypeOf<3>().toEqualTypeOf<GetStringLength<"ABC">>();

  expectTypeOf<GetStringLength<string>>().toBeNever();
});

it("hack: should add offset value to number", () => {
  expectTypeOf<13>().toEqualTypeOf<GetStringLength<"ABC", 10>>();
  expectTypeOf<23>().toEqualTypeOf<GetStringLength<"ABC", 20>>();
  expectTypeOf<33>().toEqualTypeOf<GetStringLength<"ABC", 30>>();
});
