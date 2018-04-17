const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
const version = require('../package.json').version
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  ...baseConfig,
  ...{
    entry: './src/index.js',
    output: {
      path: resolve('dist'),
      filename: 'babyeye-utils.js',
      publicPath: '/dist/',
      library: 'babyeye-utils',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this'
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(version)
      })
    ]
  }
}