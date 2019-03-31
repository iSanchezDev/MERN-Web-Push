
module.exports = {
  verbose: true,
  globalSetup: '<rootDir>/test/config/setup.ts',
  roots: [
    "<rootDir>/test"
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
