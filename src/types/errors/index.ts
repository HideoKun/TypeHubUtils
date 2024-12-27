// Multi-error support, union is better, no middle ground
// union is better thanks to lack of translation and openness
export type ErrorType =
  | { __type: "ValidationError"; __message: string }
  | { __type: "NetworkError"; __message: string; __url: string }
  | { __type: "SystemError"; __code: number };

export type GenericError = {
  readonly __message: string;
  readonly __url: string;
};

type ErrorMessages = {
  OpenTypeError: "input: is open types (any, unknown, never)";
  NeverError: "input: do not pass never as input";
  AnyError: "input: do not pass any as input";
  UnknownError: "input: do not pass unknown as input";
  MismatchError: "input: type mismatch";
};

type ErrorTypes = keyof ErrorMessages;

export type NewError<
  ErrorType extends ErrorTypes,
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

/**
 * @see www.wp.pl
 */
export interface OPEN_TYPE_ERROR {
  readonly __message: "input: is open types (any, unknown, never)";
  readonly __url: "wwww.wp.pl";
}

/**
 * @see www.wp.pl
 */
export interface NEVER_ERROR {
  readonly __message: "input: do not pass never as input";
  readonly __url: "wwww.wp.pl";
}

/**
 * @see www.wp.pl
 */
export interface ANY_ERROR {
  readonly __message: "input: do not pass any as input";
  readonly __url: "wwww.wp.pl";
}

/**
 * @see www.wp.pl
 */
export interface UNKNOWN_ERROR {
  readonly __message: "input: do not pass unknown as input";
  readonly __url: "wwww.wp.pl";
}

/**
 * @see www.wp.pl
 */
export interface NON_HOMOGENIC_ERROR {
  readonly __message: "input: non homogenic union";
  readonly __url: "wwww.wp.pl";
}

/**
 * @see www.wp.pl
 */
export interface EXPECT_LITERAL_ERROR {
  readonly __message: "input: is non literal";
  readonly __url: "wwww.wp.pl";
}
