<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/117557564-572a0a80-b074-11eb-9d54-4ecfb5fb208f.png">  
</p>
<p align="center">
    <i>A collection of utilities to take your TypeScript development up a notch</i>
    <br>
    <br>
    <a href="https://github.com/garronej/tsafe/actions">
      <img src="https://github.com/garronej/tsafe/workflows/ci/badge.svg?branch=main">
    </a>
    <a href="https://www.npmjs.com/package/tsafe">
      <img src="https://img.shields.io/npm/dw/tsafe">
    </a>
    <a href="https://www.npmjs.com/package/tsafe">
      <img src="https://img.shields.io/npm/v/tsafe?logo=npm">
    </a>
    <a href="https://deno.land/x/tsafe">
        <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Ftsafe%2Fmod.ts">
    </a>    
    <br/>
    <a href="https://bundlephobia.com/package/tsafe">
      <img src="https://img.shields.io/bundlephobia/minzip/tsafe">
    </a>
    <i>(you can cherrypick what you import)</i>
</p>
<p align="center">
  <a href="https://docs.tsafe.dev">Documentation</a>
</p>

## A few GIFs to convince you that you need `tsafe` in your life

<p align="center">
    <br>
    <i>Assert things you know are true, get runtime errors where you were wrong:</i>
    <br>
    <br>
    <img width="550" src="https://user-images.githubusercontent.com/6702424/134988258-9d3d4097-628b-4b8f-b00b-d256f7c2361c.gif">
</p>
<p align="center">
    <br>
    <br>
    <i>Implement compile time unit testing</i>
    <br>
    <br>
    <img width="550" src="https://user-images.githubusercontent.com/6702424/134994250-29f1b5c3-2193-49ba-ad75-e3c981723724.gif">  
    <br>
    <img width="550" src="https://user-images.githubusercontent.com/6702424/182005615-5d967945-0758-4457-8068-748bc01f9008.png">
    <br>
    <i><a href="https://stackblitz.com/edit/typescript-rfpzav?file=index.ts&view=editor">Playground</a></i>
</p>
<p align="center">
    <br>
    <br>
    <i>Make sure all properties of an object are deconstructed</i>
    <br>
    <br>
    <img width="550" src="https://github.com/garronej/tsafe/releases/download/v0.0.1/dont_forget_props.gif">  
    <br>
    <i><a href="https://stackblitz.com/edit/typescript-rryd73?file=index.ts&view=editor">Playground</a></i> 
</p>
<p align="center">
    <br>
    <br>
    <i>Make sure you never forget a case in a switch</i>
    <br>
    <br>
    <img width="550" src="https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe_switch.gif">  
    <br>
    <i><a href="https://stackblitz.com/edit/typescript-ryj2ba?file=index.ts&view=editor">Playground</a></i> 
</p>

<p align="center">
    <br>
    <br>
    <i>Make TypeScript believe whatever you say without having to write <code>const obj2 = obj as Bar</code>.</i> 
    <br>
    <i>The more powerfully is to be able to tell TypeScript that <code>obj</code> ist <strong>not</strong> of type <code>Bar</code>:</i>
    <br>
    <br>
    <img width="550" src="https://user-images.githubusercontent.com/6702424/134994590-f01b8aee-a94a-4b4c-8f43-ee5ce8911443.gif">
</p>
        
<p align="center">
    <br>
    <br>
    <i>Make sure your zod schema exactly matches a given type:</i> 
    <br>
    <img width="550" src="https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe_zod.gif">
</p>

## Motivations

Powerful TypeScript features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions.

TypeScript, however, only exports type helpers \(e.g. `Record`, `ReturnType`, etc.\).

This module provides _«the missing builtins»_ such as [the assert function](https://docs.tsafe.dev/assert)
and corrects frustrating aspects of default utility types such as [`ReturnType`](https://docs.tsafe.dev/returntype).

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
