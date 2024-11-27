import { expectTypeOf, it } from "vitest";
import type { StartsWith, EndsWith} from ".";

type TestStr = "Hello, World!";

it("should work", () => {
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "Hello">>();
  expectTypeOf<"World!">().toEqualTypeOf<EndsWith<TestStr, "World!">>();

  expectTypeOf<StartsWith<string, string>>().toBeNever();
  expectTypeOf<EndsWith<string, string>>().toBeNever();

});

it("shouldn't work", () => {
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "hello">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "World!">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "42">>();
  // @ts-expect-error
  expectTypeOf<"World!">().toEqualTypeOf<EndsWith<TestStr, "world!">>();
  // @ts-expect-error
  expectTypeOf<"World!">().toEqualTypeOf<EndsWith<TestStr, "Hello">>();
  // @ts-expect-error
  expectTypeOf<"World!">().toEqualTypeOf<EndsWith<TestStr, "42">>();
});
