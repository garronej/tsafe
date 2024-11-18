/* eslint-disable @typescript-eslint/no-explicit-any */

import { assert, is, AssertionError } from "../src/assert";
import type { Equals } from "../src/Equals";

{
    const x: string | number | boolean = null as any;

    assert(is<string>(x));

    assert<Equals<typeof x, string>>();

    console.log("PASS");
}

{
    const x: string | number | boolean = null as any;

    assert(!is<string>(x));

    assert<Equals<typeof x, number | boolean>>();

    console.log("PASS");
}

{
    is<unknown>(null);

    try {
        is<unknown>(null);
        throw new Error("FAIL");
        // eslint-disable-next-line no-empty
    } catch {}

    console.log("PASS");
}

scope: {
    try {
        assert(undefined);
    } catch {
        console.log("PASS");

        break scope;
    }

    throw new Error("Fail");
}

/**
 * When an assertion fails and no message was provided, it should throw an `AssertionError` with the
 * message 'Wrong assertion encountered'.
 */
{
    try {
        assert(false);
    } catch (e) {
        assert(e instanceof AssertionError);
        assert(e.message === "Wrong assertion encountered");
        console.log("PASS");
    }
}

/**
 * When an assertion fails and a message string was provided, it should throw an `AssertionError` with
 * the message 'Wrong assertion encountered: "<message>"'.
 */
{
    try {
        assert(false, "message");
    } catch (e) {
        assert(e instanceof AssertionError);
        assert(e.message === 'Wrong assertion encountered: "message"');
        console.log("PASS");
    }
}

/**
 * When an assertion passes and a message callback was provided, the callback should not be called.
 */
{
    let called = false as boolean;
    const message = () => {
        called = true;
        return "message";
    };
    assert(true, message);
    assert(called === false);
    console.log("PASS");
}

/**
 * When an assertion fails and a message callback was provided, the callback should be called.
 */
{
    let called = false as boolean;
    const message = () => {
        called = true;
        return "message";
    };
    try {
        assert(false, message);
    } catch (e) {
        assert(e instanceof AssertionError);
        assert(called === true);
        console.log("PASS");
    }
}

/**
 * When an assertion fails and a message callback was provided, it should throw an `AssertionError` with
 * the message 'Wrong assertion encountered: "<return value from message callback>"'.
 */
{
    const message = () => "message";
    try {
        assert(false, message);
    } catch (e) {
        assert(e instanceof AssertionError);
        assert(e.message === 'Wrong assertion encountered: "message"');
        console.log("PASS");
    }
}

/**
 * `AssertionError` should store the original message in the `originalMessage` property.
 */
{
    const error = new AssertionError("message");
    assert(error.originalMessage === "message");
    console.log("PASS");
}
