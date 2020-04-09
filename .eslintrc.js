module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    globals: {
      process: true
    },
    settings: {
      'react': {
        version: '16.9.0'
      },
      'import/resolver': {}
    },
    extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended'],
    env: {
      es6: true,
      browser: true,
      jest: true
    },
    plugins: ['react', 'prettier'],
    rules: {
      'no-console': 1,
      'no-alert': 'error',
      'no-await-in-loop': 'error',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { consistent: true },
          ObjectPattern: { consistent: true },
          ImportDeclaration: { consistent: true },
          ExportDeclaration: { consistent: true }
        }
      ],
      'array-element-newline': ['error', 'consistent'],
      'react/prop-types': ['warn'],
      'react/prop-types': ['warn'],
      'prettier/prettier': ['warn']
    }
  };
  