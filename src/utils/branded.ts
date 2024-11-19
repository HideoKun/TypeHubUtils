declare const __brand: unique symbol

type Brand<B> = { [__brand]: B }

export type Branded<T, B extends Uppercase<string>> = T & Brand<B>

