'use strict';

const { isPackageInstalled } = require('./isPackageInstalled');
const { restrictedGlobals } = require('./restrictedGlobals');

const jestRestrictedMessage = 'Do merge tests that are a work in progress.';

const config = {
  extends: [
    'eslint:recommended',
    'prettier',
    ...(isPackageInstalled('eslint-plugin-react') ? ['plugin:react/recommended', 'plugin:react/jsx-runtime'] : []),
    ...(isPackageInstalled('eslint-plugin-react-hooks') ? ['plugin:react-hooks/recommended'] : []),
    ...(isPackageInstalled('@typescript-eslint/eslint-plugin') ? ['plugin:@typescript-eslint/recommended'] : []),
  ],
  plugins: [
    'import',
    'prettier',
    'json',
    'simple-import-sort',
    ...(isPackageInstalled('@typescript-eslint/eslint-plugin') ? ['@typescript-eslint'] : []),
  ],
  parser: isPackageInstalled('@typescript-eslint/parser') ? '@typescript-eslint/parser' : undefined,
  settings: {
    react: isPackageInstalled('eslint-plugin-react') ? { version: 'detect' } : undefined,
  },
  env: { es2020: true, 'shared-node-browser': true },
  parserOptions: {
    ecmaVersion: 2020,
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['build', 'coverage', 'dist', 'out', '!.storybook'],
  overrides: [
    {
      files: ['.eslintrc.js', 'babel.config.js', 'metro.config.js', 'webpack.config.js'],
      env: { node: true },
    },
    {
      files: '**/*.js',
      parserOptions: { sourceType: 'script' },
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
      },
    },
    {
      files: '**/*.json',
      rules: { quotes: 'off' },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: '**/*.d.ts',
      rules: { 'import/no-default-export': 'off' },
    },
    {
      files: '*.stories.*',
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: '.storybook/**',
      excludedFiles: '.storybook/main.js',
      parserOptions: { sourceType: 'module' },
    },
    {
      files: '.storybook/main.js',
      env: { node: true },
    },
    {
      files: '*.mdx',
      extends: 'plugin:mdx/overrides',
    },
    {
      files: ['craco.config.ts', 'craco.config.js', '.cracorc.ts', '.cracorc.js', '.cracorc'],
      env: { node: true },
    },
    {
      files: '**/*.test.*',
      env: { jest: true },
      rules: {
        'no-restricted-globals': [
          'warn',
          ...restrictedGlobals,
          { name: 'fdescribe', message: jestRestrictedMessage },
          { name: 'fit', message: jestRestrictedMessage },
          { name: 'xdescribe', message: jestRestrictedMessage },
          { name: 'xit', message: jestRestrictedMessage },
          { name: 'xtest', message: jestRestrictedMessage },
        ],
        'no-restricted-properties': [
          'warn',
          { object: 'describe', property: 'only', message: jestRestrictedMessage },
          { object: 'describe', property: 'skip', message: jestRestrictedMessage },
          { object: 'describe', property: 'todo', message: jestRestrictedMessage },
          { object: 'it', property: 'only', message: jestRestrictedMessage },
          { object: 'it', property: 'skip', message: jestRestrictedMessage },
          { object: 'it', property: 'todo', message: jestRestrictedMessage },
          { object: 'test', property: 'only', message: jestRestrictedMessage },
          { object: 'test', property: 'skip', message: jestRestrictedMessage },
          { object: 'test', property: 'todo', message: jestRestrictedMessage },
        ],
      },
    },
    // {
    //   // next
    //   files: 'pages/**',
    //   rules: { 'import/no-default-export': 'off' },
    // },
    // {
    //   // next
    //   files: ['next.config.js', 'pages/api/**'],
    //   env: { node: true },
    // },
    {
      files: 'rollup.config.js',
      parserOptions: { sourceType: 'module' },
      rules: { 'import/no-default-export': 'off' },
    },
  ],
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': ['warn', { types: { '{}': false } }],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-var-requires': 'warn',
    curly: 'warn',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-default-export': 'warn',
    'import/no-duplicates': 'warn',
    'import/order': 'off',
    'json/*': ['warn', { allowComments: true }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-prototype-builtins': 'off',
    'no-restricted-globals': ['warn', ...restrictedGlobals],
    'no-sparse-arrays': 'off',
    'no-unreachable': 'warn',
    // 'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'no-unused-vars': 'off',
    'no-useless-rename': 'warn',
    'object-shorthand': 'warn',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        next: 'directive',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'directive',
      },
      {
        blankLine: 'never',
        next: 'directive',
        prev: 'directive',
      },
      {
        blankLine: 'always',
        next: 'function',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'function',
      },
    ],
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
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],
    'react/display-name': 'warn',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-key': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    // 'sort-keys': 'warn', https://www.npmjs.com/package/eslint-plugin-sort-keys-fix
    'sort-imports': 'off',
    strict: ['warn', 'global'],
  },
};

module.exports = config;
