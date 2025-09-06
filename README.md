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
    <i> This module is <a href="https://docs.tsafe.dev/import">tree shakable</a></i>
</p>
<p align="center">
  <a href="https://docs.tsafe.dev">Documentation</a>
</p>

<p align="center">
    <br>
    <br>
    <i>Make sure two types are identical</i>
    <br>
    <br>
    <img width="550" src="https://github.com/user-attachments/assets/e4ba75d9-1898-4668-8898-ea60c1e0fcc5">  
    <br>
    <img width="550" src="https://github.com/user-attachments/assets/18bd0ca0-7ea3-4f61-8b10-f0407544b3b4">
    <br>
    <i><a href="https://stackblitz.com/edit/typescript-rfpzav?file=index.ts&view=editor">Playground</a></i>
</p>
<p align="center">
    <br>
    <i>A assertion function that typescript understands</i>
    <br>
    <br>
    <img width="550" src="https://github.com/user-attachments/assets/653ddf17-7caf-4c4b-889f-49a2b9bce18d">
</p>
<p align="center">
    <br>
    <br>
    <i>Make sure your zod schema exactly matches a given type:</i> 
    <br>
    <img width="550" src="https://github.com/user-attachments/assets/11a4a5b4-8c36-4b36-8b02-7df123901e0d">
    <br>
    <i><a href="https://stackblitz.com/edit/typescript-rfpzav?file=index.ts&view=editor">Playground</a></i> 
</p>
<p align="center">
    <br>
    <br>
    <i>Make sure you never forget a case in a switch</i>
    <br>
    <br>
    <img width="550" src="https://github.com/user-attachments/assets/d794da18-3279-42af-9889-6abddc763c40">  
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

## Motivations

Powerful TypeScript features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions.

TypeScript, however, only exports type helpers \(e.g. `Record`, `ReturnType`, etc.\).

This module provides _«the missing builtins»_ such as [the assert function](https://docs.tsafe.dev/assert) and other utilities that cannot be just type helpers.

[**Documentation website**](https://docs.tsafe.dev)

## Installation

`tsafe` is both an [NPM](https://www.npmjs.com/package/tsafe) and a [Deno](https://deno.land/x/tsafe) module.
(Achieved with [denoify](https://github.com/garronej/denoify))

## Import in deno:

```typescript
import { assert, type Equals, ... } from "https://deno.land/x/tsafe/mod.ts";
```

## Install elsewhere:

```bash
$ npm install --save tsafe
```
