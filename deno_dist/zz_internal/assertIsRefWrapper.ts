import { id } from "../id.ts";

export const assertIsRefWrapper = {
    "ref": id<undefined | Record<string, never>>(undefined),
};
