
export type UnpackTypeGuard<T> = T extends ((o: any) => o is infer U) ? U : never; 