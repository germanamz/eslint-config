const { resolve } = require('path');
const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  plugins: [
    '@stylistic',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
    EXPERIMENTAL_useProjectService: true,
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {
  //       project,
  //     },
  //   },
  // },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    'import/extensions': ['off'],
    'no-underscore-dangle': ['off'],
    'no-await-in-loop': ['off'],
    'no-restricted-syntax': ['off'],
    'import/no-extraneous-dependencies': ['off'],
  },
};
