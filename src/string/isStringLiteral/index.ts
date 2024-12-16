/**
 * A conditional type that checks if a type `S` is a string literal type.
 * If `S` is a string literal type, it returns `S`. Otherwise, it returns `never`.
 *
 * @template S - The type to check.
 * @extends {string} - Ensures that `S` extends `string`.
 * @returns {S | never} - Returns `S` if it is a string literal type, otherwise `never`.
 */
// TODO: fix bool return
// TODO: move to predicates
export type IsStringLiteral<S extends string> = S extends string
  ? string extends S
    ? never
    : S
  : never;
