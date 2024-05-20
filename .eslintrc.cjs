module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['error', 'always', { omitLastInOneLineBlock: false }],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'react/prop-types': [0],
    'indent': ['error', 4],
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        },
        {
          "pattern": "*.css",
          "group": "object",
          "patternOptions": { "matchBase": true },
          "position": "after"
        }
      ],
      "pathGroupsExcludedImportTypes": ["react"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
  },
}
