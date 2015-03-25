webpack = require 'webpack'
merge = require 'lodash/object/merge'

baseConfig = 
  output:
    path: './dist'
    filename: 'react-[name].js'
    libraryTarget: 'commonjs2'
  module:
    loaders: [{
      test: /\.js$/
      exclude: /node_modules/
      loader: 'babel-loader'
    }]

bundle = (o)-> merge {}, baseConfig, o

loaderBundle = 
  bundle({
    name: 'loaders'
    entry:
     'loaders': './components/loader.js'
    externals:
      react: 'react'
  })

demoBundle =
  bundle({
    name: 'loaders-demo'
    entry:
      'loaders-demo': './components/demo.js'
    output: 
      libraryTarget: 'umd'
      library: 'LoaderDemo'
    externals:
      react: 'React'
  })

devBundle =
  merge({}, demoBundle, {
    name: 'loaders-demo-dev'
    entry:
      'loaders-demo-dev': './components/demo.js'
    # output: 
    #   libraryTarget: 
    #     'commonjs2'
  })

delete devBundle.externals

module.exports = [ devBundle, loaderBundle, demoBundle ]