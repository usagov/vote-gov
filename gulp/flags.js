var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

var cFlags = global.cFlags = {
  production: false,
  test: true,
};

gulp.task('no-test', function (done) {
  log(colors.cyan('no-test'), 'Disabling tests');
  cFlags.test = false;
  done();
});

gulp.task('production', function (done) {
  log(colors.cyan('production'), 'Enabling production tasks');
  cFlags.production = true;
  done();
});
