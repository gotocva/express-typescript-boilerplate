// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.test.ts'],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json',
      },
    },
};
  