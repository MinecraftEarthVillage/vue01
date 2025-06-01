const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue01/'  // ⚠️ 必须与你的仓库名称完全匹配（包括大小写）
    : '/'
})
