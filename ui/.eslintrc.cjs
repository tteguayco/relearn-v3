module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      es6: true, // Setting ecmaVersion doesn't imply having access to es6
      node: true,
      browser: true,
    },
    extends: [
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'plugin:import/errors', // import rules
      'plugin:import/warnings',
      'plugin:import/typescript', // Must be below other plugin:import
      'plugin:react/recommended', // React rules
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended', // Extra JSX rules
      'prettier',
    ],
    ignorePatterns: ['build/**'],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'semi': ['error', 'always']
    },
  };
  