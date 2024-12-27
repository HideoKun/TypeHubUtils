import type { GenericError } from "../types";

// INFO: no BOX mode here, CTA is only mode for filtering
export type $Filter$<A, B> = A extends B ? A : never;

// TODO: validation?
export type $FilterError$<T> = $Filter$<T, GenericError>;
