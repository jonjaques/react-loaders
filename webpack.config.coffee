webpack = require 'webpack'
merge = require 'lodash/object/merge'

baseConfig = 
  output:
    path: './dist'
    filename: '[name].react.js'
    libraryTarget: 'commonjs2'
  module:
    loaders: [{
      test: /\.js$/
      exclude: /node_modules/
      loader: 'babel-loader'
    }]

bundle = (o)-> merge {}, baseConfig, o

module.exports = [

  bundle({
    name: 'loader'
    entry:
     'loader': './components/loader.js'
    externals:
      react: 'react'
  })
  
  bundle({
    name: 'loader.demo'
    output: 
      libraryTarget: 'umd'
      library: 'LoaderDemo'
    entry:
      'loader.demo': './components/demo.js'
  })
]