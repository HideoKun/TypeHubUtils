import type { EX_MODES } from "../../types/other";

type BOX_Extends<A, B> = [A] extends [B] ? true : false;
type CTA_Extends<A, B> = A extends B ? true : false;

// note: flag is better than naming convention and multi export
export type Extends<A, B, Mode extends EX_MODES = "BOX"> = Mode extends "BOX"
  ? BOX_Extends<A, B>
  : CTA_Extends<A, B>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Check = Extends<never, 1>; // true
//   ^?
