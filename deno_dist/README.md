<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/117557564-572a0a80-b074-11eb-9d54-4ecfb5fb208f.png">  
</p>
<p align="center">
    <i>A collection of utilities that makes your TS code safer and cleaner</i>
    <br>
    <br>
    <img src="https://github.com/garronej/tsafe/workflows/ci/badge.svg?branch=main">
    <img src="https://img.shields.io/bundlephobia/minzip/tsafe">
    <img src="https://img.shields.io/npm/dw/tsafe">
    <img src="https://img.shields.io/npm/l/tsafe">
</p>
<p align="center">
  <a href="https://docs.tsafe.dev">Documentation</a>
</p>

## Motivation

Powerful TypeScript features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions.

TypeScript, however, only exports type helpers \(e.g. `Record`, `ReturnType`, etc.\).

This module provides _«the missing builtins»_ such as [the assert function](https://docs.tsafe.dev/assert)
and corrects frustrating aspects of default utility type such as [`ReturnType`](https://docs.tsafe.dev/returntype).

`tsafe` is both an [NPM](https://www.npmjs.com/package/tsafe) and a [Deno](https://deno.land/x/tsafe) module.
(Achieved with [denoify](https://github.com/garronej/denoify))

## Import in deno:

```typescript
import { assert, typeGuard, ... } from "https://deno.land/x/tsafe/mod.ts";
```

## Install elsewhere:

```bash
$ npm install --save tsafe
#OR
$ yarn add tsafe
```

<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/118082020-c2e5dd80-b3bc-11eb-9ea9-71fa8206f704.gif">
</p>

[Learn more](https://www.tsafe.dev)
