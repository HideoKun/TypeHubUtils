// string to union --------------------------------
type StringToUnion<S, Union = never> = S extends `${infer First}${infer Rest}` ? StringToUnion<Rest, Union | First> : Union
type test = StringToUnion<'abcde'>
//   ^?

export type InferPre<
  Str extends string,
  Separator extends string = "."
> = Str extends `${infer Pre}${Separator}${string}` ? Pre : never;

export type InferPost<
  Str extends string,
  Separator extends string = "."
> = Str extends `${string}${Separator}${infer Post}` ? Post : never;

