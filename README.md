---
description: >-
  A collection of very simple utility function and type that enables developers
  to take full advantage of what TypeScript can offer.
---

# What is tsafe?

Powerful features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions.

TypeScript, however, only exports type helpers \(e.g. `Record`, `ReturnType`, etc.\).

This module provides _«the missing builtins»_ such as [the assert function](main/assert.md).

`tsafe` also corrects frustrating aspect of default utility type see [`ReturnType`](main/returntype.md) for example.

{% hint style="info" %}
`tsafe` is both an [NPM](https://www.npmjs.com/package/tsafe) and a [Deno](https://deno.land/x/tsafe) module. _\(Achieved with_ [_denoify_](https://denoify.land)_\)_
{% endhint %}



