# assert

The classic assert function, it takes a value as input, if the value is falsy it throws or else it does nothing. Functionally it can be summed up to this:

```typescript
function assert(condition){
    if(!condition){
        throw new Error();
    }
}
```

Typewise however, it takes advantage of the asserts condition statement. If you pass a type guard as value TypeScript can make inference on what happens after the assert instruction. Example:

```typescript
import { assert } from "tsafe/assert";

declare const x: number | string;

assert(typeof x === "number");

x.toLowerCase(); //<= Here TypeScript knows that x is a string
```

### assert + typeGuard

The assert function can be used in conjunction with the typeGuard util, it enables you to write things like:

```typescript
import { assert } from "tsafe/assert";
import { typeGuard } from "tsafe/typeGuard";

type Circle = { radius: number };
type Square = { sideLength: number };
type Shape = Circle | Square;

const shape: Shape = { "radius": 100 };

//You: Trust me TypeScript, I know that shape is a Circle.
assert(typeGuard<Circle>(shape));

//TypeScript: Ok if you say so...it has a radius then.
shape.radius;
```

{% hint style="warning" %}
It is important to understand that here that when you run the instruction assert\(typeGuard\(shape\)\) if the shape happens not to be a Circle you won't get an error at runtime.
{% endhint %}

Equally useful you can tell TypeScript that your shape is not a Square, it will infer that it is then a Circle.

```typescript

//You: Trust me TypeScript, I know that shape is not a Square.
assert(!typeGuard<Square>(shape,false));

//TypeScript: Ok so by elimination it should be a Circle!
shape.radius;
```

### Error thrown

When the value is falsy assert throws an instance of AssertionError. Assertion error, extends Error and can be imported like this:

```typescript
import { AssertionError } from "tsafe/assert";
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

