module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
}
