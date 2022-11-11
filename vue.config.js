const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/article': {
        target: 'http://localhost:8089',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/article': '' }

      },
    }
  }
})
