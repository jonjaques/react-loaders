path = require 'path'
gulp = require 'gulp'
webpack = require 'webpack'
config = require './webpack.config'
gutil = require 'gulp-util'
react = require 'react'
fs = require 'fs'

gulp.task 'default', ['build']

gulp.task 'demo', ['build'], ->
  demoPath = path.resolve './dist/loader.demo.react'
  delete require.cache[demoPath]
  demo = require demoPath
  demoHtml = demo.render()
  link = (url)-> "<link rel=\"stylesheet\" href=\"#{url}\" />"
  demoTpl = """
    <!doctype html>
    <head>
    #{ link('http://fonts.googleapis.com/css?family=Source+Sans+Pro:600,300') }
    #{ link('../bower_components/loaders.css/demo/demo.css') }
    #{ link('../bower_components/loaders.css/loaders.css') }
    <body>#{ demoHtml }
    <script src='loader.demo.react.js'></script>
    <script>LoaderDemo.run()</script>
    </body>
  """
  fs.writeFileSync './dist/demo.html', demoTpl

gulp.task 'build', (done)->
  webpack config, (err, results)->
    results = results.toJson()
    results.warnings.map gutil.log if results.warnings.length
    results.errors.map gutil.log if results.errors.length
    done()

gulp.task 'dev', ['demo'], ->
  gulp.watch ['components/*.js'], ['demo']