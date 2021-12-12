'use strict';

const { isPackageInstalled } = require('./isPackageInstalled');

const config = {
  extends: ['fatfisz'],
  ignorePatterns: [],
  overrides: [],
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'warn',
      {
        jsxSingleQuote: true,
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
};

if (isPackageInstalled('react')) {
  config.overrides.push({
    files: '*.stories.*',
    rules: {
      'import/no-default-export': 'off',
    },
  });

  Object.assign(config.rules, {
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
  });
}

if (isPackageInstalled('typescript')) {
  config.overrides.push({
    files: ['*.js', '*.jsx'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  });

  Object.assign(config.rules, {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
  });
}

if (isPackageInstalled('next')) {
  config.ignorePatterns.push('out');

  Object.assign(config.rules, {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  });
}

module.exports = config;
