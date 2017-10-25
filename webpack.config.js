var path = require('path')
var webpack = require('webpack')
var externals = require('webpack-node-externals')()
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = [
  {
    entry: './src/index',
    output: {
      path: path.resolve('dist'),
      filename: "react-loaders.js",
      libraryTarget: 'commonjs2'
    },
    externals: [externals],
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    },
    plugins: [
    ]
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
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new UglifyJsPlugin({sourceMap: true})
    ]
  }
]
