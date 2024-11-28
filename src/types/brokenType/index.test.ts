import { expectTypeOf, it } from 'vitest';
import type { BROKEN_TYPE } from '.';
import type { PRIMITIVE } from '../primitives';

it('should work', () => {
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<BROKEN_TYPE>()
})

it('should not work', () => {
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<PRIMITIVE>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<string>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<'string'>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<number>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<1>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<boolean>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<{}>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<object>()
  // @ts-expect-error
  expectTypeOf<BROKEN_TYPE>().toEqualTypeOf<any[]>()
})

