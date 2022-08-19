module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    VUFile: 'readable',
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
    'prettier',
  ],
  rules: {
    camelcase: 1,
    semi: ['error', 'never'],
    'vue/custom-event-name-casing': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
