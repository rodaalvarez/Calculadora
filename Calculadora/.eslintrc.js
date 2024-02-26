module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0, 
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        '@react-native-community',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', 
      ],
      rules: {
        'prettier/prettier': 'off', 
      },
    },
  ],
};
