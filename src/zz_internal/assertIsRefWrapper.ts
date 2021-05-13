import { id } from "../id";

export const assertIsRefWrapper = {
    "ref": id<undefined | Record<string, never>>(undefined),
};
