path      = require 'path'
gulp      = require 'gulp'
webpack   = require 'webpack'
config    = require './webpack.config'
gutil     = require 'gulp-util'
sass      = require 'gulp-ruby-sass'
prefixer  = require 'gulp-autoprefixer'
react     = require 'react'
fs        = require 'fs'

gulp.task 'default', ['build']
gulp.task 'build', ['demo']
gulp.task 'dev', ['watch']

gulp.task 'demo', ['app', 'css'], ->
  demoPath = path.resolve './dist/react-loaders-demo'
  delete require.cache[demoPath]
  demo = require demoPath
  demoHtml = demo.render()
  link = (url)-> "<link rel=\"stylesheet\" href=\"#{url}\" />"
  demoTpl = """
    <!doctype html>
    <head>
    <meta name="viewport" content="width=device-width" />
    #{ link('http://fonts.googleapis.com/css?family=Source+Sans+Pro:600,300') }
    #{ link('assets/css/demo.css') }
    </head>
    <body>
    <div id="container">#{ demoHtml }</div>
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


sassLoadPaths = [
  './node_modules'
  './node_modules/bootstrap-sass/assets/stylesheets'
]

gulp.task 'css', ->
  sass('assets/scss', {loadPath: sassLoadPaths})
    .on('error', (err)-> console.error('Error!', err.message))
    .pipe(prefixer("last 2 versions", "> 1%", "ie 8", { map: false }))
    .pipe(gulp.dest('assets/css'))

gulp.task 'watch', ['demo'], ->
  gulp.watch ['components/*.js'], ['demo']
  gulp.watch ['assets/scss/**/*'], ['css']
