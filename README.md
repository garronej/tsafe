<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/117557564-572a0a80-b074-11eb-9d54-4ecfb5fb208f.png">  
</p>
<p align="center">
    <i>Leverage the more advanced features of TypeScript</i>
    <br>
    <i>A collection of utilities that makes your TS code cleaner and safer</i>
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

Powerful features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions. TypeScript, however, only exports type helpers \(e.g. `Record`, `RetunType`, etc.\). `tsafe` is here to export _«the missing builtins»_ such as [the assert function](assert.md).

`tsafe` also tries to make TypeScript more practical by patching frustrating aspect of to the built-in types helper see [`RetunType`](returntype.md) for example.


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

[Learn more](https://www.tsafe.dev)
