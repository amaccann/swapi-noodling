/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/jest/css-stub.ts'
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest/setupTests.ts'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+.(ts|tsx)?$': ['ts-jest',{
      tsconfig: '<rootDir>/tsconfig.app.json'
    }],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};