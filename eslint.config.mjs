import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import js from "@eslint/js";
import typeScriptESLint from "@typescript-eslint/eslint-plugin";
import typeScriptESLintParser from "@typescript-eslint/parser";
import globals from "globals";

const compat = new FlatCompat();

export default [
  {
    files: ["src/**/*.ts"],
  },
  {
    ignores: ["src/js", "src/typings"],
  },
  js.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended'),
  eslintConfigPrettier,
  {
    plugins: {
      typeScriptESLint,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: typeScriptESLintParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      }
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'error',
      'node/no-deprecated-api': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-unpublished-require': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
      'no-process-exit': 'off',
      'node/no-missing-import': 'off',
    }
  }
];
