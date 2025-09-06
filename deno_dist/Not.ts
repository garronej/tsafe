/** https://docs.tsafe.dev/main/not */
export type Not<B extends boolean> = B extends true ? false : true;
