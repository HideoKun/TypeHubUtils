import { expectTypeOf, it } from 'vitest';
import type { TrimEnd, TrimStart, Trim } from '.';
import type { WHITE_SPACE } from '../../types';

type TestStr = 'test';

expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: string }>()


it('should work', () => {
  expectTypeOf<'test'>().toEqualTypeOf<TrimStart<`${WHITE_SPACE}${TestStr}`, WHITE_SPACE>()
  expectTypeOf<'test'>.toEqualTypeOf<TrimEnd<`${TestStr}${WHITE_SPACE}`, WHITE_SPACE>()
  expectTypeOf<'test'>.toEqualTypeOf<Trim<`${WHITE_SPACE}${TestStr}${WHITE_SPACE}`, WHITE_SPACE>()
})

it('should not work', () => {
  // @ts-expect-error
  expectTypeOfstring().toEqualTypeOfSliceFront<string, L1>()

  // TODO: fix one below
  // @ts-expect-error
  expectTypeOf'ABC'().toEqualTypeOfSliceFront<TestStr, L3>()

})

it('should add prefix to sliced part', () => {
  expectTypeOf'your-prefix-A'().toEqualTypeOfSliceFront<TestStr, L1, 'your-prefix-'>()
})
