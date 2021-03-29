
import { overwriteReadonlyProp } from "./overwriteReadonlyProp";

export class AssertionError extends Error {

    constructor(msg: string | undefined) {

        super(`Wrong assertion encountered` + (!msg ? "" : `: "${msg}"`));

        Object.setPrototypeOf(this, new.target.prototype);

        if (!this.stack) {
            return;
        }

        try {

            overwriteReadonlyProp(
                this,
                "stack",
                this.stack
                    .split("\n")
                    .filter((...[, i]) => i !== 1 && i !== 2)
                    .join("\n")
            );

        } catch {
        }

    }

}

export function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(msg);
    }
}


