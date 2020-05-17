module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-uint8array',
  testMatch: ['**/lib/__tests__/**/*'],
  testPathIgnorePatterns: ['config.js'],
};
