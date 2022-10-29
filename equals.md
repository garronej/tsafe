---
description: Let you test if two types are the same
---

# Equals

### Implement compile time unit testing

<figure><img src="https://user-images.githubusercontent.com/6702424/182005615-5d967945-0758-4457-8068-748bc01f9008.png" alt=""><figcaption></figcaption></figure>

[Playground](https://stackblitz.com/edit/typescript-rfpzav?file=index.ts\&view=editor)

A less trivial example: [The code](https://github.com/codegouvfr/react-dsfr/blob/main/src/lib/spacing.ts) and it's [coresponding test file](https://github.com/codegouvfr/react-dsfr/blob/main/test/types/spacing.ts).

{% hint style="info" %}
If you are writing test for your type, you definitely want to checkout [`//@ts-expect-error`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)
{% endhint %}

### Making sure all properties of an object are deconstructed

<figure><img src="https://github.com/garronej/tsafe/releases/download/v0.0.1/dont_forget_props.gif" alt=""><figcaption></figcaption></figure>

[Playground](https://stackblitz.com/edit/typescript-rryd73?file=index.ts\&view=editor)

### Making sure all cases of a switch are delt with

<figure><img src="https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe_switch.gif" alt=""><figcaption></figcaption></figure>

[Playground](https://stackblitz.com/edit/typescript-ryj2ba?file=index.ts\&view=editor)

### Guaranteeing that a validator matches a given type

<figure><img src="https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe_zod.gif" alt=""><figcaption></figcaption></figure>

[Playground](https://github.com/garronej/tsafe/releases/download/v0.0.1/tsafe\_zod.gif)
