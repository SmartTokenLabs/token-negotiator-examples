const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/token-negotiator-examples/vue-boilerplate' : '/'
})
