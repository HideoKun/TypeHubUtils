export type InferPre<
  Str extends string,
  Separator extends string = "."
> = Str extends `${infer Pre}${Separator}${string}` ? Pre : never;

export type InferPost<
  Str extends string,
  Separator extends string = "."
> = Str extends `${string}${Separator}${infer Post}` ? Post : never;
