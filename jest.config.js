module.exports = {
  roots: [
    "./src"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/specs"
  ],
  verbose: true,
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
