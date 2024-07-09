module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    'react-compiler',
    'jsx-a11y',
    'react',
    'react-hooks',
    'react-refresh',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-compiler/react-compiler': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '_',
        destructuredArrayIgnorePattern: '_',
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ],
  },
};
