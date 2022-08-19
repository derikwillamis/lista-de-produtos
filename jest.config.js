module.exports = {
  clearMocks: true,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transformIgnorePatterns: ["/node_modules/"],
  testMatch: ['**/src/**/*.spec.(ts|js)'],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      babelConfig: true
    }
  },
};
