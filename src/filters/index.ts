import type { GenericError } from "../types";

// INFO: no BOX mode here, CTA is only mode for filtering
export type _Filter$<A, B> = A extends B ? A : never;

// TODO: validation?
export type _FilterError$<T> = _Filter$<T, GenericError>;
