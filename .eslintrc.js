module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Отключаем правила, которые не нужны или вызывают предупреждения
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // Добавляем правило для проверки использования let и const вместо var
    'no-var': 'warn',
    // Правило для запрета использования eval и arguments
    'no-eval': 'error',
    'no-arguments': 'error',
    // Запрещаем использование debugger
    'no-debugger': 'error',
    // Запрещаем использование директивы use strict без явного указания
    'strict-mode': 'error',
  },
};