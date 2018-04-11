const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
const version = require('../package.json').version
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  ...baseConfig,
  ...{
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(version)
      })
    ]
  }
}