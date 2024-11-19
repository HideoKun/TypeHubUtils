import { expectTypeOf, test } from 'vitest';
import type { Maybe } from '.';

let str: string | undefined = 'hello';

test('Maybe Tests', () => {
  expectTypeOf(str).toEqualTypeOf<string>()
  expectTypeOf(str).toMatchTypeOf<Maybe<string>>()

  // expectTypeOf(Maybe<string>).toBeFunction()
  // expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()

  // assertType(mount({ name: 42 }))
})
