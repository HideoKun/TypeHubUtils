import type { $Exact } from "../operators/exact";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type EmptyObj = $Exact<{}>;
export type EmptyArr = $Exact<[]>;
