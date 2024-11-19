

// string to union --------------------------------
type StringToUnion<S, Union = never> = S extends `${infer First}${infer Rest}` ? StringToUnion<Rest, Union | First> : Union
type test = StringToUnion<'abcde'>
//   ^?

// reverse string --------------------------------
type ReverseString<T extends string, Acc extends string = ''> = T extends `${infer First}${infer Last}`
? ReverseString<Last, `${First}${Acc}`>
: Acc
type testA = ReverseString<'asdf'>
//   ^?

/**
 * TODO:
 * - kebab
 * - camel
 * - snake
 */

//
export type InferPre<
  Str extends string,
  Separator extends string = "."
> = Str extends `${infer Pre}${Separator}${string}` ? Pre : never;

export type InferPost<
  Str extends string,
  Separator extends string = "."
> = Str extends `${string}${Separator}${infer Post}` ? Post : never;


/** --------------------------------
## GuideLines

- one func per file + tests
- always add js doc (describe usage)
- always describe input args (T extends string etc)

## Refs

TODO: String Methods from:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://ramdajs.com/docs/#toString
- https://lodash.com/docs/4.17.15#camelCase
- https://github.com/panzerdp/voca?tab=readme-ov-file#functions
- https://vocajs.pages.dev/#last

## Starters
### Easy ------------------------------
- [x] reverse
- [x] stringToUnion
- [ ] trim
- [ ] trimStart
- [ ] trimEnd
- [ ] endsWith
- [ ] startsWith
- [ ] camelCase
- [ ] snakeCase
- [ ] kebabCase

### https://vocajs.pages.dev
- [ ] first
- [ ] last
- [ ] count
- [ ] isBlank
- [ ] isEmpty
- [ ] isDigit
- [ ] includes

### Medium ------------------------------
- [ ] match
- [ ] isEmpty

### Hard --------------------------------
- [ ] replace
- [ ] split
- [ ] slice
- [ ] charCodeAt
- [ ] unionToString

*/


