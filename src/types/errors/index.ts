type _Errors = {
  // input --------------------------------
  OpenTypeError: {
    msg: "input: is open types (any, unknown, never)";
    url: "www.wp.pl";
  };
  NeverError: {
    msg: "input: is open type (any, unknown, never)";
    url: "www.wp.pl";
  };
  AnyError: {
    msg: "input: do not pass any as input";
    url: "www.wp.pl";
  };
  UnknownError: {
    msg: "input: do not pass unknown as input";
    url: "www.wp.pl";
  };
  MismatchError: {
    msg: "input: type mismatch";
    url: "www.wp.pl";
  };
  NonLiteralError: {
    msg: "input: provided type is not literal";
    url: "www.wp.pl";
  };
  EmptyStringError: {
    msg: "input: empty string";
    url: "www.wp.pl";
  };
  // output --------------------------------
  OutputError: {
    msg: "output: open type";
    url: "www.wp.pl";
  };
};

/**
 * @see www.wp.pl
 */
export type NewError<
  ErrorType extends keyof _Errors,
  Context extends string,
  Value,
> = {
  __type: ErrorType;
  __message: _Errors[ErrorType];
  __url: string;
  __context: Context;
  __value: Value;
};

export type GENERIC_ERROR = {
  __type: keyof _Errors;
  __message: string;
  __url: string;
};

export type NonErrorObj = object & { __message: never; __url: never }; // type: GenericError
