module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // 禁用组件命名规则
    'vue/multi-word-component-names': 'off', 
    // 可选：禁用未使用变量检查（不推荐）
    'no-unused-vars': 'off' 
  }
}
