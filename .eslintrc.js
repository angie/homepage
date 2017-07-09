module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',

  rules: {
    'react/jsx-filename-extension': 0,
  },

  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
};
