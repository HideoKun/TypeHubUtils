export type BROKEN_TYPE = { __BROKEN_TYPE: true };

export type ErrorBuilder<T extends string, Url extends string> = {
  __PURE_TYPES_ERROR: {
    message: T;
    url: Url;
  };
};

type URL = "www.wp.pl";

/**
 * @see www.wp.pl
 * @see {@link ErrorBuilder}
 */
export type NEVER_ERROR = ErrorBuilder<
  "input: do not pass never as input",
  URL
>;
export type NON_HOMOGENIC_ERROR = ErrorBuilder<
  "input: non homogenic union",
  URL
>;
