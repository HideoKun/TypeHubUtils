import { expectTypeOf, it } from 'vitest';
import type { IsStringLiteral } from '.';

it('should work', () => {
  expectTypeOf('A' as const).toEqualTypeOf<IsStringLiteral<'A'>>()
  expectTypeOf('B' as const).toEqualTypeOf<IsStringLiteral<'B'>>()
  expectTypeOf('C' as const).toEqualTypeOf<IsStringLiteral<'C'>>()

  expectTypeOf<IsStringLiteral<string>>().toBeNever()
})

