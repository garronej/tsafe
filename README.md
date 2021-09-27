<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/117557564-572a0a80-b074-11eb-9d54-4ecfb5fb208f.png">  
</p>
<p align="center">
    <i>A collection of utilities to step up your TypeScript game</i>
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

## Three GIFs to convince you that you need `tsafe` in your life

<p align="center">
    <br>
    <i>Assert thing you know are true, get runtime error if you where wrong:</i>
    <br>
    <br>
    <img src="https://user-images.githubusercontent.com/6702424/134988258-9d3d4097-628b-4b8f-b00b-d256f7c2361c.gif">
</p>
<p align="center">
    <i>Test the type definitions of your APIs:</i>
    <br>
    <br>
    <img src="https://user-images.githubusercontent.com/6702424/134991678-bfbeff07-0d17-4eab-8009-46e35ca950d9.gif">
</p>
<p align="center">
    <i>Make TypeScript believe whatever you say:</i>
    <br>
    <br>
    <img src="https://user-images.githubusercontent.com/6702424/118082020-c2e5dd80-b3bc-11eb-9ea9-71fa8206f704.gif">
</p>

## Motivation

Powerful TypeScript features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions.

TypeScript, however, only exports type helpers \(e.g. `Record`, `ReturnType`, etc.\).

This module provides _«the missing builtins»_ such as [the assert function](https://docs.tsafe.dev/assert)
and corrects frustrating aspects of default utility type such as [`ReturnType`](https://docs.tsafe.dev/returntype).

[**Documentation website**](https://docs.tsafe.dev)

## Installation

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
