/* eslint-disable @typescript-eslint/no-explicit-any */
import { isPromiseLike } from "../src/isPromiseLike";
import { assert } from "../src/assert";

{
    const x = new Promise<void>(resolve => setTimeout(() => resolve, 1000));

    const got = isPromiseLike(x);

    assert(got === true);

    console.log("PASS TEST 1");
}

{
    const x = {
        "then": () => null,
        "a": 1,
        "b": "foo",
        "c": null,
    };

    assert(isPromiseLike(x));

    console.log("PASS TEST 2");
}

{
    const x = async () => {
        return 1;
    };

    assert(isPromiseLike(x()));

    console.log("PASS TEST 3");
}

{
    const x = async () => {
        return 1;
    };

    assert(!isPromiseLike(x));

    console.log("PASS TESt 4");
}

{
    const x: PromiseLike<number> = {
        "then": () => null as any,
    };

    assert(isPromiseLike(x));

    console.log("PASS TEST 5");
}

{
    const x = false;

    assert(!isPromiseLike(x));

    console.log("PASS TEST 6");
}

{
    class X {
        then: () => void;

        constructor(then: () => void) {
            this.then = then;
        }
    }

    const x = new X(() => null);

    assert(isPromiseLike(x));

    console.log("PASS TEST 7");
}

{
    interface X {
        then: () => void;
    }

    const x: X = {
        "then": () => null,
    };

    assert(isPromiseLike(x));

    console.log("PASS TEST 8");
}
