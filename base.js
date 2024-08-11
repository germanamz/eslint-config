const common = require('./common');

module.exports = {
  ...common,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  rules: {
    ...common.rules,
    'import/prefer-default-export': ['off'],
    'consistent-return': ['off'],
  },
};
