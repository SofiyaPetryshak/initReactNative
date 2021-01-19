module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
  },
  "plugins": ["@typescript-eslint", "react", "react-native", "react-hooks", "import", "simple-import-sort"],
  "extends": ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:react-native/all", "standard", "standard-jsx"],
  "rules": {
    "comma-dangle": ["warn", "always-multiline"],
    "eol-last": "off",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": { "parameters": 1, "body": 1 },
      "FunctionExpression": { "parameters": 1, "body": 1 },
      "CallExpression": { "arguments": 1 },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false,
      "ignoredNodes": [
        "TemplateLiteral *",
        "JSXAttribute",
        "JSXSpreadAttribute",
      ]
    }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react-native/no-raw-text": "off",
    "react/prop-types": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "no-void": "off",
    "react/jsx-closing-bracket-location": ["error", {
      "nonEmpty": "line-aligned",
      "selfClosing": "line-aligned"
    }],
    "camelcase": ["error", {
      "allow": ["^UNSAFE_"],
    }],
    "simple-import-sort/exports": [
      "error"
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["\\u0000$"],
          ["^react", "react", "expo", "^@?\\w"],
          ["^\\u0000"],
          ["^\\$assets"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-restricted-imports": ["error", {
      "paths": [
        {
          "name": "expo",
          "message": "import from 'expo-*' modules instead",
        },
      ],
    }],
    "multiline-ternary": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "react-hooks/rules-of-hooks": "error",
  },
  "env": {
    "react-native/react-native": true
  },
  "ignorePatterns": [
    ".eslintrc.js"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
