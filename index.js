'use strict';

const config = {
  extends: ['fatfisz'],
  ignorePatterns: ['build', 'coverage', 'dist', 'out'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
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
    {
      files: ['craco.config.ts', 'craco.config.js', '.cracorc.ts', '.cracorc.js', '.cracorc'],
      env: { node: true },
    },
  ],
  plugins: ['json', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    'import/order': 'off',
    'json/*': ['warn', { allowComments: true }],
    'jsx-quotes': ['warn', 'prefer-single'],
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
    'react/display-name': 'warn',
    'react/jsx-key': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-imports': 'off',
  },
};

// if (isPackageInstalled('next')) {
//   config.ignorePatterns.push('out');

//   Object.assign(config.rules, {
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': 'off',
//   });
// }

module.exports = config;
