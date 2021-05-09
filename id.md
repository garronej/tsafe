---
description: The identity function
---

# id

Literally just:

```typescript
export const id = <T>(x: T) => x;
```

It directly returns the parameter it was given as input.

## Example 1: Simultaneously declaring a type and instantiating a default value for this type

```typescript
import { id } from "tsafe/id";

const defaultCat = {
    "name": "Felix",
    "gender": id<"male" | "female">("male")
};

type Cat = typeof defaultCat;
```

![Cat\[&quot;gender&quot;\] is &quot;male&quot; \| &quot;female&quot;](.gitbook/assets/image%20%283%29.png)

If we don't use `id` `Cat["gender"]` is of type `string`

![Cat\[&quot;gender&quot;\] is string](.gitbook/assets/image%20%284%29.png)

We could ave used `"male" as "male" | "female"` 

```typescript
const defaultCat = {
    "name": "Felix",
    "gender": "male" as "male" | "female"
};

type Cat = typeof defaultCat;
```

But this is less type safe because we do not validate that the value that we gives to gender is acutally assignable to "male" \| "female". 

This error for example slip through:

![&quot;MALE&quot; is all caps, which should be a typing error](.gitbook/assets/image%20%285%29.png)

## Example 2: Instantiating an object of type T

Let's say you have this function: 

```typescript
function getArea(shape: Shape): number;
```

And let's say a shape object is defined as follows:

```typescript
type Circle = { type: "circle"; radius: number; };
type Square = { type: "square"; sideLength: number; };
type Shape = Circle | Square;
```

We want to instantiate a `Circle` and pass it to `getArea` we can do:

```typescript
const circle: Circle = { "type": "circle", "radius": 33 };
getArea(circle);
```

If we want to avoid declaring a variable, we can do 

```typescript
getArea({ "type": "circle", "radius": 33 });
```

The problem, however, is that this `Circle` was not as easy to instantiate because TypeScript doesn’t know what kind of shape we are trying to instantiate:

![Every possible properties are listed](.gitbook/assets/image%20%281%29.png)

id let you declare that the shape you are instantiating is a `Circle`

```typescript
import { id } from "tsafe/id";

getArea(id<Circle>({ "type": "circle", "radius": 33 }));
```

![TypeScript knows we are instantiating a Circle](.gitbook/assets/image%20%282%29.png)

