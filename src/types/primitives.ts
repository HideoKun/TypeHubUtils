
// TODO: missing types for symbol, bigint, function, etc.
export type NIL =  null | undefined;
export type Primitive = string | number | boolean | NIL;
export type NonObject = Primitive | Primitive[]; //| symbol;
export type NonArray = Primitive | Record<string, unknown>; //| symbol;

