

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

export type InferPre<
  Str extends string,
  Separator extends string = "."
> = Str extends `${infer Pre}${Separator}${string}` ? Pre : never;

export type InferPost<
  Str extends string,
  Separator extends string = "."
> = Str extends `${string}${Separator}${infer Post}` ? Post : never;

