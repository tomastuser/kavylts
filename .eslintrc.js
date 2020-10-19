module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  rules: {
    'linebreak-style': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': ['error', { multiline: true }],
    'react/no-danger': ['off'],
    'no-nested-ternary': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-unused-expressions': ['error', { allowTernary: true }],
  },
};
