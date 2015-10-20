webpack = require 'webpack'
merge = require 'lodash/object/merge'

baseConfig =
  output:
    path: './dist'
    filename: 'react-[name].js'
    libraryTarget: 'umd'
  module:
    loaders: [{
      test: /\.js$/
      exclude: /node_modules/
      loader: 'babel-loader?stage=0'
    }]

bundle = (o)-> merge {}, baseConfig, o

loaderBundle =
  bundle({
    name: 'loaders'
    entry:
     'loaders': './components/loader.js'
    externals: [
      "react"
      "react-dom"
      "classnames"
      "merge"
    ]
  })

loaderMinBundle = merge({}, loaderBundle)
loaderMinBundle.name = loaderBundle.name + '.min'
loaderMinBundle.entry = 'loaders.min': loaderBundle.entry.loaders
loaderMinBundle.plugins = [ new webpack.optimize.UglifyJsPlugin() ]

demoBundle =
  bundle({
    name: 'loaders-demo'
    entry:
      'loaders-demo': './components/demo.js'
    output:
      libraryTarget: 'umd'
      library: 'LoaderDemo'
    plugins: [ new webpack.optimize.UglifyJsPlugin() ]
  })

module.exports = [ loaderBundle, loaderMinBundle, demoBundle ]
