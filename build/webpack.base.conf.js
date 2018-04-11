const path = require('path')
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'babyeye-utils.js',
    publicPath: '/dist/',
    library: 'babyeye-utils',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  }
}