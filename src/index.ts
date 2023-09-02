import { type Linter } from "eslint";
import globals from "globals";

const config: Linter.Config = {
  plugins: ["@typescript-eslint", "eslint-comments", "promise", "unicorn"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    commonjs: true,
    es6: false,
    node: true,
  },
  globals: {
    ...globals.es2020,
  },
};

export = config;
