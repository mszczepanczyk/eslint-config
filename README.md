# @mariusz.sh/eslint-config ![ci](https://github.com/mszczepanczyk/eslint-config/actions/workflows/ci.yml/badge.svg)

Heavily based on [eslint-config-fatfisz](https://www.npmjs.com/package/eslint-config-fatfisz).

## Installation

```shell
yarn add -ED @mariusz.sh/eslint-config eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

With TypeScript:

```shell
yarn add -ED @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

With React:

```shell
yarn add -ED eslint-plugin-react eslint-plugin-react-hooks
```

Then in `.eslintrc.js`:

```js
'use strict';

module.exports = {
  root: true,
  extends: '@mariusz.sh/eslint-config',
  // ...
};
```
