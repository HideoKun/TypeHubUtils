import type { StrictObject } from "../../types";

export type SafeExtract<O extends StrictObject, K extends keyof O> = K extends keyof O
  ? O[K]
  : never;

