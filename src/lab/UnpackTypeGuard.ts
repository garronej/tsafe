/* eslint-disable @typescript-eslint/no-explicit-any */

export type UnpackTypeGuard<T extends (o: any) => o is unknown> = T extends (o: any) => o is infer U
    ? U
    : never;
