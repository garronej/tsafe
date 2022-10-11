export type IsEmpty<T> = [keyof T] extends [never] ? true : false;
