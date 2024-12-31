// Multi-error support, union is better, no middle ground
// union is better thanks to lack of translation and openness
export type ErrorType =
  | { __type: "ValidationError"; __message: string }
  | { __type: "NetworkError"; __message: string; __url: string }
  | { __type: "SystemError"; __code: number };

export type GENERIC_ERROR = {
  readonly __message: string;
  readonly __url: string;
};

type ErrorMessages = {
  OpenTypeError: "input: is open types (any, unknown, never)";
  NeverError: "input: do not pass never as input";
  AnyError: "input: do not pass any as input";
  UnknownError: "input: do not pass unknown as input";
  MismatchError: "input: type mismatch";
  OutputError: "output: open type";
  NonLiteralError: "input: provided type is not literal";
  EmptyStringError: "input: empty string";
};

// type ErrorTypes = keyof ErrorMessages;
/**
 * @see www.wp.pl
 */
export type NewError<
  ErrorType extends
    | "OpenTypeError"
    | "NeverError"
    | "AnyError"
    | "UnknownError"
    | "MismatchError"
    | "OutputError"
    | "NonLiteralError"
    | "EmptyStringError",
  Context extends string,
  Value,
> = {
  __type: ErrorType;
  __message: ErrorMessages[ErrorType];
  __url: string;
  __context: Context;
  __value: Value;
};

// ------------------------------

export type NewOpenTypeError<Context extends string, Value> = NewError<
  "OpenTypeError",
  Context,
  Value
>;

export type NewMismatchError<Context extends string, Value> = NewError<
  "MismatchError",
  Context,
  Value
>;

export type NonErrorObj = object & { __message: never; __url: never }; // type: GenericError
