module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  // "extends": "eslint:recommended",
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "comma-dangle": 0
  },
};
