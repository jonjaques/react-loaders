var path = require('path')
var webpack = require('webpack')
var externals = require('webpack-node-externals')()

module.exports = [
  {
    entry: './src/index',
    output: {
      path: path.resolve('dist'),
      filename: "react-loaders.js",
      libraryTarget: 'commonjs'
    },
    externals: [externals],
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel' }
      ]
    }
  },
  {
    entry: './demo/index',
    output: {
      path: path.resolve('dist'),
      filename: "demo.js",
      library: '__DEMO__',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel' }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
]
