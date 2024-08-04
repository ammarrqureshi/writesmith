## Writesmith - Book Publishing Platform

Writesmith is an app that tries to innovate book publishing.
Traditionally once a book is written, it can no longer be updated by the author unless new edition is published.
Writesmith will host books and people can subscribe to authors or books they want updates on.
initially you have to pay full price of book to access the book.

It will include full dynamic book reader with all essential tools, An online store of books to buy from , and a library.
Subscriptions to books can be used to get updates on the book if any.
You can track versions of a book to read a version you want just like github.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
