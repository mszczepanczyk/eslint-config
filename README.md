# @mariusz.sh/eslint-config ![ci](https://github.com/mszczepanczyk/eslint-config/actions/workflows/ci.yml/badge.svg)

## Installation

```shell
npm install --save-dev @mariusz.sh/eslint-config
```

Then in `eslint.config.js`:

```js
import config from "@mariusz.sh/eslint-config";

if (process.env.NODE_ENV !== "production") {
  // Make all rules warn only
  await import("eslint-plugin-only-warn");
}

export default [
  ...config,
  // ...
];
```
