const path = require('path')
const baseConfig = require('./webpack.base.conf')
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  ...baseConfig,
  ...{
    devServer: {
      contentBase: resolve('demo'),
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
      open: true
    }
  }
}