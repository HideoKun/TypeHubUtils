import { expectTypeOf, it } from 'vitest';
import type { SliceFront } from '.';

type TestStr = "ABC"

// TODO: what to do with '""'
type TODO1 = SliceFront<string, 3>
// TODO: this should return ABC not never; fix with GetStrLength
type TODO2 = SliceFront<TestStr, 3>
//   ^?

it('should work', () => {
  expectTypeOf<''>().toEqualTypeOf<SliceFront<TestStr, 0>>()
  expectTypeOf<'A'>().toEqualTypeOf<SliceFront<TestStr, 1>>()
  expectTypeOf<'AB'>().toEqualTypeOf<SliceFront<TestStr, 2>>()

  expectTypeOf<SliceFront<string, 1>>().toBeNever()
})

it('should not work', () => {
  // @ts-expect-error
  expectTypeOf<string>().toEqualTypeOf<SliceFront<string, 1>>()

  // TODO: fix one below
  // @ts-expect-error
  expectTypeOf<'ABC'>().toEqualTypeOf<SliceFront<TestStr, 3>>()

})

it('should add prefix to sliced part', () => {
  expectTypeOf<'your-prefix-A'>().toEqualTypeOf<SliceFront<TestStr, 1, 'your-prefix-'>>()
})
