export default {
  globals: {
    "ts-jest": {
      tsConfig: false
    }
  },
  testMatch: ['**/*.test.ts'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
  testTimeout: 90000,
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
  reporters: ['default', ['jest-sonar', {
    outputDirectory: 'coverage',
    outputName: 'test-report.xml',
    reportedFilePath: 'relative'
  }]]
};
