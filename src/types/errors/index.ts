/**
 * @see www.wp.pl
 */
export type OPEN_TYPE_ERROR = {
  __message: "input: is open types (any, unknown, never)";
  __url: "wwww.wp.pl";
};

/**
 * @see www.wp.pl
 */
export type NEVER_ERROR = {
  __message: "input: do not pass never as input";
  __url: "wwww.wp.pl";
};

/**
 * @see www.wp.pl
 */
export type NON_HOMOGENIC_ERROR = {
  __message: "input: non homogenic union";
  __url: "wwww.wp.pl";
};

/**
 * @see www.wp.pl
 */
export type EXPECT_LITERAL_ERROR<T> = {
  __message: "input: is non literal";
  __url: "wwww.wp.pl";
  __context: T;
};
