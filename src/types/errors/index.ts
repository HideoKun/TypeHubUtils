export type GenericError = {
  readonly __message: string;
  readonly __url: string;
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
