---
description: >-
  Like Function.prototype.bind() but for a function that  receives their
  parameters wrapped in an object.
---

# withDefaults

## Quick example

```typescript
import { withDefaults } from "tsafe/lab/withDefaults"

function sum(
    params: {
        x: number;
        y: number;
        z: number;
    }
): number {
    const { x, y, z } = params;
    return x + y + z;
}

// sumWd is of type: (params: { y: number; z: number; })=> number
const sumWd = withDefault(sum, { "x": 10 });

console.log(
    sumWd({ "y": 1, "z": 2 })
); // Prints "13" ( 10 + 1 + 2 )

console.log(
    sumWd({ "y": 3, "z": 4 })
); // Prints "17" ( 10 + 3 + 4 )


console.log(
    sumWd({
        "y": 3, 
        "z": 4,
        "defaultsOverwrite": {
            "x": [20]
        }
    })
); // Prints "27" ( 20 + 3 + 4 )
```

## In greater detail

If you have a function with a set of parameters wrapped in an object, and you wish to call this function multiple times with the same value for one or more of the parameters, `withDefaults` enables you to instantly generate a new function with these parameters already set so that you do not have to fill them in at every call.

Consider a function that takes two numbers as parameters and returns the sum of them.

```typescript
function sum(params: {x: number; y: number}){
    const {x, y} = params;
    return x + y;
};
```

Suppose we want to set the value of `x` for example.

```typescript
const sumWd = withDefaults(sum, {"x": 33});
```

`sumWd` is a proxy to our original function with `x` set to `33`. `withDefaults` first argument is the original function, and the second is an object with the parameters of the original function as properties. Naturally, the properties are inferred by typescript as shown below.

![](../.gitbook/assets/screenshot-2021-05-13-at-17.36.40.png)

Now we can call `sumWd` as many times as we want without having to set `x`. Its value will always be `33`.

```typescript
const result = sumWd({"y": 10}); //43
```

The value of `result` will be `43`. Typescript infers the remaining value to be set:

![](../.gitbook/assets/screenshot-2021-05-13-at-17.37.35.png)

### Overwriting the injected value:

```typescript
const result = sumWd({
  "y": 10, 
  "defaultsOverwrite": {"x": [23]}
}); // 33
```

The type of `x` in `defaultsOverwrite` is `[number] | undefined` so that `undefined` cannot be assigned to `x` if that is not its type. 



