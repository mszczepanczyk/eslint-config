import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import importPlugin from 'eslint-plugin-import';
import json from 'eslint-plugin-json';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    rules: {
      curly: 'warn',
      'no-empty': [
        'warn',
        {
          allowEmptyCatch: true,
        },
      ],
      'no-prototype-builtins': 'off',
      'no-useless-rename': 'warn',
      'object-shorthand': 'warn',
    },
  },
  ...tseslint.config({
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  }),
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/padding-line-between-statements': [
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
      '@stylistic/js/quotes': [
        'warn',
        'single',
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
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
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    processor: 'json/json',
    rules: {
      'json/*': ['warn', { allowComments: true }],
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-default-export': 'off',
      'import/no-duplicates': 'warn',
      'import/order': 'off',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  ...tseslint.config({
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    extends: [reactPlugin.configs.flat.recommended, reactPlugin.configs.flat['jsx-runtime']],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      reactPlugin,
      'react-hooks': fixupPluginRules(reactHooksPlugin),
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'jsx-quotes': ['warn', 'prefer-single'],
      'react/jsx-curly-brace-presence': ['warn', 'never'],
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
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }),
  {
    ignores: ['build', 'coverage', 'dist', 'out', 'node_modules', 'tmp', '!.storybook'],
  },
];
