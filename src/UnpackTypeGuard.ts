/* eslint-disable @typescript-eslint/no-explicit-any */

export type UnpackTypeGuard<T> = T extends (o: any) => o is infer U ? U : never;
