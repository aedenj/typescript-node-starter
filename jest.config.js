module.exports = {
  roots: [
    "./src"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/specs"
  ],
  verbose: true,
  collectCoverage: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
