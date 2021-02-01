export type ReturnDomain<T> = Promise<T | [Error, T] | undefined>
