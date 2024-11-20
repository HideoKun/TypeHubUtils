type DropFirstChar<T extends string> = T extends `${infer A}${infer B}`
  ? B extends ''
    ? never
    : B
  : never

type TestDropA = DropFirstChar<'asdf'>
//   ^?
type TestDropB = DropFirstChar<'asd'>
//   ^?
type TestDropC = DropFirstChar<'as'>
//   ^?
type TestDropD = DropFirstChar<'a'>
//   ^?


export type Slice<
  S extends string,
  LengthPattern extends string,
  Acc extends string = ""
> = S extends `${infer A}${infer B}`
  ? LengthPattern extends `${infer La}${infer Lb}`
  ? Slice<B, Lb, `${Acc}${A}`>
  : Acc
  : Acc

type testA = Slice<'ABCDEFG', 'x'>
//   ^?
type testB = Slice<'ABCDEFG', 'xx'>
//   ^?
type testC = Slice<'ABCDEFG', 'xxx'>
//   ^?
