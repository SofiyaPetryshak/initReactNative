const { jestPreset: tsJest } = require('ts-jest');

module.exports = {
  ...tsJest,
  preset: "react-native",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    transformIgnorePatterns: []
}
