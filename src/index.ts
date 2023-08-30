import { type Linter } from "eslint";

const config: Linter.Config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "./base",
  ],
};

export = config;
