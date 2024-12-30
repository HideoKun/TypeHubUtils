// BOXy for string unions is ====> GET COLUMN UNION !!!
// NAME: _ should be used for local unsafe functions
export type _ReverseString<
  Str extends string,
  Acc extends string,
> = Str extends `${infer First}${infer Last}`
  ? _ReverseString<Last, `${First}${Acc}`>
  : Acc;

export type _ReverseString_BACK<Str> = Str extends string
  ? _ReverseString<Str, "">
  : never;