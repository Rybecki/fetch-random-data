module.exports = {
    setupFilesAfterEnv: [
      '@testing-library/react/cleanup-after-each',
      '@testing-library/jest-dom/extend-expect'
    ],
    testMatch: [
      '**/?(*.)spec.ts?(x)'
    ],
    globals: {
      'ts-jest': {
        tsconfig: {
          jsx: 'react-jsx',
        },
    },
    testEnvironment: 'jsdom',
  }
}