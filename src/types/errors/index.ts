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

export type MakeError<C, T> = {
  readonly __message: "string;";
  readonly __url: string;
  context: C;
  value: T;
};

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
