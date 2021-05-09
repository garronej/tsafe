---
description: >-
  A collection of very simple utility function and type that enables developers
  to take full advantage of what TypeScript can offer.
---

# What is tsafe?

Powerful features like [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) or [user-defined type guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) are only useful if paired with utility functions. TypeScript, however, only exports type helpers \(e.g. `Record`, `RetunType`, etc.\). `tsafe` is here to export _«the missing builtins»_ such as [the assert function](assert.md).

`tsafe` also tries to make TypeScript more practical by patching frustrating aspect of to the built-in types helper see [`RetunType`](returntype.md) for example.

{% hint style="info" %}
`tsafe` is both a [NPM](https://www.npmjs.com/package/tsafe) and a [Deno](https://deno.land/x/tsafe@v0.1.10) module
{% endhint %}

### How is is different from [`ts-toolbelt`](https://github.com/millsp/ts-toolbelt)\`\`

There is two main difference:

* `tsafe` exports type helpers and utility functions, `ts-toolbelt` only exports types.
* `tsafe` only expose functions and type helper that are of practical use in very common usecases. 

However the two library can be used together, one is not ment to replace the other. 

