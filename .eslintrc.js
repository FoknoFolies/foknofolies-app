module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: ['@react-native-community'],
  plugins: ['jest', 'import', 'module-resolver', 'unused-imports'],
  rules: {
    // Base
    'consistent-return': 'error',
    'default-case': 'error',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'newline-before-return': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'cjs-export' },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    // eslint-plugin-import
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        'pathGroups': [
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react', 'react-native'],
      },
    ],
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    // eslint-plugin-module-resolver
    'module-resolver/use-alias': 'error',
    // eslint-plugin-react
    'react/default-props-match-prop-types': 'error',
    'react/require-default-props': 'error',
    'react/sort-prop-types': 'error',
    // eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 'error',
  },
};
