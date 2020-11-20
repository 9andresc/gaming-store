module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@server/(.*)$': '<rootDir>/server/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@views/(.*)$': '<rootDir>/views/$1'
  },
  setupFiles: ['<rootDir>/tests/setupTests.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/'
  ],
  testRegex: '(/tests/.*\\.spec)\\.jsx?$'
}
