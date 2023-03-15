export type UnpackTypeGuard<T extends (o: any) => o is unknown> = T extends (o: any) => o is infer U ? U : never;
