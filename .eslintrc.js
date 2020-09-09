module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    __DEV__: true,
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/core-modules': [
      'app',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  rules: {
    'jsx-a11y/html-has-lang': 0,
    camelcase: 0,
    'import/prefer-default-export': 0,
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '/',
        ],
      },
    ],
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
        exceptions: ['a'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'max-len': [
      1,
      140,
      2,
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: [
          'label',
        ],
        labelAttributes: [
          'htmlFor',
        ],
        controlComponents: [
          'input',
        ],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: [
            'nesting',
            'id',
          ],
        },
      },
    ],
    'react/prop-types': [
      0,
    ],
    'react/destructuring-assignment': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'literal',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack.config.js'],
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^app/.+$',
        ],
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
