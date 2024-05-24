import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["src", "node_modules", "assets"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "ts", "jsx", "tsx", "json"],
  // The glob patterns Jest uses to detect test files
  testMatch: ["<rootDir>/src/ts/**/*.test.ts"],
  setupFiles: ["dotenv/config"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "<rootDir>/tsconfig.test.json",
      },

    ],
  },
};

export default config;