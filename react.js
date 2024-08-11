const common = require('./common');

module.exports = {
  ...common,
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/function-component-definition': ['error', {
      namedComponents: ['arrow-function', 'function-expression'],
    }],
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/require-default-props': ['off'],
    'jsx-a11y/control-has-associated-label': ['off'],
    'react-hooks/exhaustive-deps': ['off'],
    'react/no-unstable-nested-components': ['off'],
  },
};
