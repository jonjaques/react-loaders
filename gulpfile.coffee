path = require 'path'
gulp = require 'gulp'
webpack = require 'webpack'
config = require './webpack.config'
gutil = require 'gulp-util'
react = require 'react'
fs = require 'fs'

gulp.task 'default', ['demo']
gulp.task 'build', ['demo']
gulp.task 'dev', ['watch']

gulp.task 'demo', ['app'], ->
  demoPath = path.resolve './dist/react-loaders-demo'
  delete require.cache[demoPath]
  demo = require demoPath
  demoHtml = demo.render()
  link = (url)-> "<link rel=\"stylesheet\" href=\"#{url}\" />"
  demoTpl = """
    <!doctype html>
    <head>
    #{ link('http://fonts.googleapis.com/css?family=Source+Sans+Pro:600,300') }
    #{ link('css/demo.css') }
    #{ link('css/loaders.css') }
    </head>
    <body>#{ demoHtml }
    <script src='dist/react-loaders-demo.js'></script>
    <script>LoaderDemo.run()</script>
    </body>
  """
  fs.writeFileSync './index.html', demoTpl

gulp.task 'app', (done)->
  webpack config, (err, results)->
    results = results.toJson()
    results.warnings.map gutil.log if results.warnings.length
    results.errors.map gutil.log if results.errors.length
    done()

gulp.task 'watch', ['demo'], ->
  gulp.watch ['components/*.js'], ['demo']