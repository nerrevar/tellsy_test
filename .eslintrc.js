module.exports = {
  root: true,
  env: { node: true },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    'no-await-in-loop': 'error',
    'no-console': 'warn',
    'no-extra-parens': [
      'warn',
      'all',
      {
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
        enforceForNewInMemberExpressions: false,
      }
    ],
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    curly: [
      'warn',
      'multi'
    ],
    'default-param-last': 'error',
    'dot-location': [
      'warn',
      'property'
    ],
    'dot-notation': 'error',
    eqeqeq: [
      'warn',
      'always'
    ],
    'grouped-accessor-pairs': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-implied-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-labels': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-new': 'error',
    'no-new-wrappers': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: [
      'error',
      'as-needed'
    ],
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: 'error',
    'init-declarations': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    'array-bracket-newline': [
      'error',
      'consistent'
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-element-newline': [
      'error',
      'consistent'
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'brace-style': [
      'warn',
      '1tbs'
    ],
    'comma-dangle': [
      'warn',
      { objects: 'always-multiline' }
    ],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'eol-last': [
      'warn',
      'always'
    ],
    'func-call-spacing': 'warn',
    'func-names': [
      'error',
      'as-needed'
    ],
    'func-style': 'error',
    'function-call-argument-newline': [
      'warn',
      'consistent'
    ],
    'function-paren-newline': 'warn',
    'implicit-arrow-linebreak': 'error',
    indent: [
      'error',
      2
    ],
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'lines-around-comment': 'warn',
    'max-lines': 'warn',
    'max-statements-per-line': 'error',
    'multiline-ternary': [
      'error',
      'always-multiline'
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': [
      'error',
      'below'
    ],
    'object-curly-newline': [
      'error',
      { multiline: true }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'after'
    ],
    'padded-blocks': [
      'warn',
      'never'
    ],
    'prefer-exponentiation-operator': 'error',
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'warn',
      'never'
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      }
    ],
    'spaced-comment': 'warn',
    'switch-colon-spacing': 'warn',
    'wrap-regex': 'warn',
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'warn',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'warn',
    'symbol-description': 'error',
    'template-curly-spacing': [
      'warn',
      'always'
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: { jest: true },
    }
  ],
}
