const path = require('path')
const baseConfig = require('./webpack.base.conf')
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  ...baseConfig,
  ...{
    entry: './demo/main.js',
    output: {
      path: resolve('dist'),
      filename: 'babyeye-utils.js',
      publicPath: '/dist/'
    },
    devServer: {
      contentBase: resolve('demo'),
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
      open: true
    }
  }
}