---
description: Let you test if two types are the same
---

# Equals

### Type level  testing

<figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

[Playground](https://stackblitz.com/edit/typescript-rfpzav?file=index.ts\&view=editor)

A less trivial example: [The code](https://github.com/codegouvfr/react-dsfr/blob/main/src/lib/spacing.ts) and it's [corresponding test file](https://github.com/codegouvfr/react-dsfr/blob/main/test/types/spacing.ts).

{% hint style="info" %}
If you are writing tests for your type, you definitely want to checkout [`//@ts-expect-error`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)
{% endhint %}

### Enforcing that a zod schema matches a given type

<figure><img src="https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe_zod.gif" alt=""><figcaption></figcaption></figure>

[Playground](https://stackblitz.com/edit/typescript-eheop6?file=index.ts\&view=editor)

### Making sure all cases of a switch are dealt with

<figure><img src="https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe_switch.gif" alt=""><figcaption></figcaption></figure>

[Playground](https://stackblitz.com/edit/typescript-ryj2ba?file=index.ts\&view=editor)

