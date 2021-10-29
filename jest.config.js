module.exports = {
  clearMocks: true,
  restoreMocks: true,
  testMatch: [
    '<rootDir>/**/*.test.js',
    '!**/node_modules/*',
    '!**/dist/*',
    '!**/*.bak/*',
  ],
  collectCoverage: false,
  testEnvironment: 'node',
};
