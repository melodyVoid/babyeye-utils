const path = require('path')
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
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