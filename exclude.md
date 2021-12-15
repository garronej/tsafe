---
description: >-
  Returns a function that you can use as the argument for Array.prototype.filter
  to exclude one or more primitive values from an array.
---

# 👍 exclude

## Practical example

```typescript
type Circle = {
    type: "circle";
    radius: number;
};

type Square = {
    type: "square";
    sideLength: number;
};

type Shape = Circle | Square;

declare const shapes: Shape[];

//Assumes we want to do something for every Circle

arr
    .map(shape => shape.type === "circle" ? shape : null)
    .filter(exclude(null))
    .forEach(circle => {
        //Here circle is of type Circle
        //if we had used .filter(shape=> shape.type === "circle")
        //it would be functionnaly the same but circle would be of type
        //Shape
    });

```

## Basic examples

```typescript
import { exclude } from "tsafe/exclude";

const arr = ["a", "b", "c", "d"] as const;
const newArr = arr.filter(exclude("a"));

//type of newArr is ("b" | "c" | "d")[]
//value of newArr is ["b", "c", "d"]
```

You can also exclude more than on element:&#x20;

```typescript
import { exclude } from "tsafe/exclude";

const arr = ["a", "b", "c", "d"] as const;
const newArr = arr.filter(exclude(["a", "b"]));

//type of newArr is ("c" | "d")[]
//value of newArr is ["c", "d"]
```
