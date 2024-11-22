import { expectTypeOf, it } from 'vitest';
import type { SliceFront } from '.';
import type { L0, L1, L2, L3 } from '../../types';

type TestStr = "ABC"

// TODO: what to do with '""'
type TODO1 = SliceFront<string, 'xxx'>
// TODO: this should return ABC not never; fix with GetStrLength
type TODO2 = SliceFront<TestStr, L3>
//   ^?

it('should work', () => {
  expectTypeOf<''>().toEqualTypeOf<SliceFront<TestStr, L0>>()
  expectTypeOf<'A'>().toEqualTypeOf<SliceFront<TestStr, L1>>()
  expectTypeOf<'AB'>().toEqualTypeOf<SliceFront<TestStr, L2>>()

  expectTypeOf<SliceFront<string, L1>>().toBeNever()
})

it('should not work', () => {
  // @ts-expect-error
  expectTypeOf<string>().toEqualTypeOf<SliceFront<string, L1>>()

  // TODO: fix one below
  // @ts-expect-error
  expectTypeOf<'ABC'>().toEqualTypeOf<SliceFront<TestStr, L3>>()

})

it('should add prefix to sliced part', () => {
  expectTypeOf<'your-prefix-A'>().toEqualTypeOf<SliceFront<TestStr, L1, 'your-prefix-'>>()
})
