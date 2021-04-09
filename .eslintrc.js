module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-underscore-dangle': [
      'error', { allowAfterThis: true }
    ]
  }
};
