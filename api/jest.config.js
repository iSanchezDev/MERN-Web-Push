
module.exports = {
  verbose: true,
  globalSetup: '<rootDir>/src/test/config/setup.ts',
  roots: [
    "<rootDir>/src/test"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  testRegex: "/__tests__/.*.test.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};
