var gulp = require('gulp')
var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

gulp.task('demo', ['build'], function() {
  var demo = require('./dist/demo')
  var html = ('<!doctype html>'
    + '<head>'
    + '<meta name="viewport" content="width=device-width" />'
    + '<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:600,300" />'
    + '<link rel="stylesheet" href="assets/css/demo.css" />'
    + '</head>'
    + '<body>'
    + '<div id="container">'
    + demo.render()
    + '</div>'
    + '<script src="./dist/demo.js"></script>'
    + '<script>__DEMO__.run()</script>'
    + '</body>'
    + '</html>'
  )

  fs.writeFileSync(path.resolve('index.html'), html)
})

gulp.task('build', function(done) {
  var compiler = webpack(require('./webpack.config.js'))
  compiler.run(function(err, stats) {
    if (err) {
      return console.log(err)
    }
    console.log(stats.toString())
    done()
  })
})
