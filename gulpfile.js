// This gulp asset pipeline supports linting of scss and js files along with
// compiling and bundling css and js files into static/assets/ directories to
// be used by Hugo.

// Bring in individual gulp configs
require('./gulp/styles');
require('./gulp/scripts');
require('./gulp/images');
require('./gulp/fonts');
require('./gulp/data');
var build = require('./gulp/build');
var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('default', function (done) {
  build.printPackageInfo(done);
  log('Available tasks');
  log('$', colors.magenta('npm start'));
  log('Starts a hugo server and watches for content/config changes.');
  log('$', colors.magenta('npm run dev'));
  log('Runs gulp watch on theme assets and starts a hugo server.');
  log('$', colors.magenta('npm run build'));
  log('Build the asset-pipeline with optional production and no-test flags.');
  done();
});

gulp.task('test', gulp.series('eslint', 'scss-lint'), function (done) {
  build.printPackageInfo();
  done();
})
