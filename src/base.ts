import { type Linter } from "eslint";

const config: Linter.Config = {
  rules: {
    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": ["error", { allowImplicit: true }],
    // https://eslint.org/docs/rules/block-scoped-var
    "block-scoped-var": "error",
    // https://eslint.org/docs/rules/complexity
    complexity: ["off", 20],
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": "error",
    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "error",
    // https://eslint.org/docs/rules/default-case
    "default-case": ["error", { commentPattern: "^no default$" }],
    // https://eslint.org/docs/rules/default-case-last
    "default-case-last": "error",
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "always", { null: "ignore" }],
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    "grouped-accessor-pairs": "error",
    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "error",
    // https://eslint.org/docs/rules/max-classes-per-file
    "max-classes-per-file": ["error", 1],
    // https://eslint.org/docs/rules/no-alert
    "no-alert": "warn",
    // https://eslint.org/docs/rules/no-caller
    "no-caller": "error",
    // https://eslint.org/docs/rules/no-constructor-return
    "no-constructor-return": "error",
    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": ["error", { allowElseIf: false }],
    // https://eslint.org/docs/rules/no-eval
    "no-eval": "error",
    // https://eslint.org/docs/rules/no-extend-native
    "no-extend-native": "error",
    // https://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": "error",
    // https://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "error",
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": [
      "off",
      {
        boolean: false,
        number: true,
        string: true,
      },
    ],
    // https://eslint.org/docs/rules/no-iterator
    "no-iterator": "error",
    // https://eslint.org/docs/rules/no-labels
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    // https://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "error",
    // https://eslint.org/docs/rules/no-multi-str
    "no-multi-str": "error",
    // https://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": "error",
    // https://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": "error",
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": [
      "error",
      {
        props: true,
      },
    ],
    // https://eslint.org/docs/rules/no-proto
    "no-proto": "error",
    // https://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],
    // https://eslint.org/docs/rules/no-return-assign
    "no-return-assign": ["error", "always"],
    // https://eslint.org/docs/rules/no-script-url
    "no-script-url": "error",
    // https://eslint.org/docs/rules/no-self-assign
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    // https://eslint.org/docs/rules/no-self-compare
    "no-self-compare": "error",
    // https://eslint.org/docs/rules/no-sequences
    "no-sequences": "error",
    // https://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",
    // https://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "error",
    // https://eslint.org/docs/rules/no-void
    "no-void": "error",
    // https://eslint.org/docs/rules/no-warning-comments
    "no-warning-comments": [
      "off",
      { terms: ["todo", "fixme", "xxx"], location: "start" },
    ],
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    // https://eslint.org/docs/rules/prefer-regex-literals
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    // https://eslint.org/docs/rules/radix
    radix: "error",
    // https://eslint.org/docs/rules/vars-on-top
    "vars-on-top": "error",
    // https://eslint.org/docs/rules/yoda
    yoda: "error",
  },
};

export = config;
