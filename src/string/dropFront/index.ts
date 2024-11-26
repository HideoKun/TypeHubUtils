
// export type DropFront<
//   Str extends string,
//   LengthPattern extends string,
//   Acc extends string = Str,
// > = IsStringLiteral<Str> extends Str
//   ? LengthPattern extends `${infer PatternFirst}${infer PatternRest}`
//     ? Str extends `${infer StrFirst}${infer StrRest}`
//       ? DropFront<StrRest, PatternRest, StrRest>
//       : never
//     : Acc
//   : never



// type TestDropA = DropFront<'asdf', L1>
// //   ^?
// type TestDropB = DropFront<'asd', L2>
// //   ^?
// type TestDropC = DropFront<'as'>
// //   ^?
// type TestDropD = DropFront<'a'>
// //   ^?
// type TestDropE = DropFront<''>
// //   ^?

