module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-import', 'eslint-plugin-prettier'],

  env: {
    es6: true,
    node: true,
    jest: true,
  },

  rules: {
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],

    'import/extensions': ['error', 'always', { ignorePackages: true }],

    'prettier/prettier': 'error',
  },

  overrides: [
    {
      files: ['**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        // 类型引入
        'spaced-comment': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        project: 'tsconfig.json',

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: [
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-import/config/typescript',
        'eslint-plugin-prettier',
      ],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/no-angle-bracket-type-assertion': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-namespace': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    },
  ],
};
