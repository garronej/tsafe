# assert

The classic assert function, it takes a value as input, if the value is falsy it throws or else it does nothing. Functionally it can be summed up to this:

```typescript
function assert(condition){
    if(!condition){
        throw new Error();
    }
}
```

Typewise however, it takes advantage of the asserts condition statement. If you pass a [type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types) as value TypeScript can make inference on what happens after the `assert` instruction. Example:

```typescript
import { assert } from "tsafe/assert";

declare const x: number | string;

assert(typeof x === "string");

x.toLowerCase(); //<= Here TypeScript knows that x is a string
```

## assert + is

{% page-ref page="is.md" %}

## Error thrown

When the value is falsy assert throws an instance of `AssertionError`. Assertion error, extends Error and can be imported like this:

```typescript
import { AssertionError } from "tsafe/assert";
```

A specific error message can be passed as second argument to the assert function.

```typescript
import { assert AssertionError } from "tsafe/assert"; 

try{
    assert(false, "foo bar baz");
}catch(error){
    console.log(error instanceof AssertionError); // true
    console.log(error.message); // foo bar baz
}
```

