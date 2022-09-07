'use strict';

const { isPackageInstalled } = require('./isPackageInstalled');

const config = {
  extends: ['fatfisz'],
  ignorePatterns: ['build', 'dist', 'coverage'],
  overrides: [],
  plugins: ['json', 'simple-import-sort'],
  rules: {
    'import/order': 'off',
    'json/*': ['warn', { allowComments: true }],
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
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-imports': 'off',
  },
};

if (isPackageInstalled('react')) {
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

if (isPackageInstalled('@storybook/core')) {
  config.overrides.push(
    {
      files: '*.stories.*',
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: '*.mdx',
      extends: 'plugin:mdx/overrides',
    },
  );
}

if (isPackageInstalled('@craco/craco')) {
  config.overrides.push({
    files: ['craco.config.ts', 'craco.config.js', '.cracorc.ts', '.cracorc.js', '.cracorc'],
    env: { node: true },
  });
}

module.exports = config;
