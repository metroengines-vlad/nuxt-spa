module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    camelcase: [0],
    'max-len': [2, 120],
    'func-names': [0],
    'vue/max-attributes-per-line': [0],
    'vue/singleline-html-element-content-newline': [0],
    'vue/no-v-text-v-html-on-component': [0],
    'vue/no-v-html': [0],
    'no-underscore-dangle': [0],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'import/no-unresolved': 'off'
  },
  "overrides": [
    {
      "files": [
        "*test/config.js",
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
}
