<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>Leverage the more advanced features of TypeScript</i>
    <br>
    <br>
    <img src="https://github.com/garronej/tsafe/workflows/ci/badge.svg?branch=main">
    <img src="https://img.shields.io/bundlephobia/minzip/tsafe">
    <img src="https://img.shields.io/npm/dw/tsafe">
    <img src="https://img.shields.io/npm/l/tsafe">
</p>
<p align="center">
  <a href="https://github.com/garronej/tsafe">Home</a>
  -
  <a href="https://github.com/garronej/tsafe">Documentation</a>
</p>

# Install / Import

```bash
$ npm install --save tsafe
```

```typescript
import { assert, typeGuard, ... } from "https://deno.land/x/tsafe/mod.ts";
```

```typescript
import { assert } from "tsafe/assert";
import { typeGuard } from "tsafe/typeGuard";

type Circle = { radius: number };
type Square = { sideLength: number };
type Shape = Circle | Square;

const shape: Shape = { "radius": 100 };

//You: Trust me TypeScript, I know that shape is a Circle.
assert(typeGuard<Circle>(shape));

//TypeScript: Ok if you say so...it must have a radius then.
shape.radius;
```
