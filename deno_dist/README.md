<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/117557564-572a0a80-b074-11eb-9d54-4ecfb5fb208f.png">  
</p>
<p align="center">
    <i>Leverage the more advanced features of TypeScript</i>
    <br>
    <i>A collection of helper that makes your TS code cleaner and safer.</i>
    <br>
    <br>
    <img src="https://github.com/garronej/tsafe/workflows/ci/badge.svg?branch=main">
    <img src="https://img.shields.io/bundlephobia/minzip/tsafe">
    <img src="https://img.shields.io/npm/dw/tsafe">
    <img src="https://img.shields.io/npm/l/tsafe">
</p>
<p align="center">
  <a href="https://www.tsafe.dev">Home</a>
  -
  <a href="https://docs.tsafe.dev">Documentation</a>
</p>

This module is both an [NPM module](https://www.npmjs.com/package/tsafe) and a [Deno module](https://deno.land/x/tsafe)

Import in deno:

```typescript
import { assert, typeGuard, ... } from "https://deno.land/x/tsafe/mod.ts";
```

Install elsewhere:

```bash
$ npm install --save tsafe
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
