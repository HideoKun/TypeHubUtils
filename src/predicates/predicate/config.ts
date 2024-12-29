//TODO:  move it to static types

export type ERROR = { mode: "error" };
export type BOOL = { mode: "bool" };
export type PRED_MODE = ERROR | BOOL;

export type BOX = { mode: "BOX" };
export type CTA = { mode: "CTA" };
export type COND_MODE = BOX | CTA;

// add exact
