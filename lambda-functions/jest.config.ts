// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',                // Use ts-jest preset
  testEnvironment: 'node',          // Use Node.js as the test environment
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest will recognize
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$', // Test file regex
  coverageDirectory: 'coverage',    // Output directory for coverage reports
  collectCoverage: true,             // Collect coverage information
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'], // Files to collect coverage from
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Path to your TypeScript configuration
    },
  },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional: Setup file for configuring Jest (if needed)
};

export default config;
