var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('fonts', function () {

  log(colors.cyan('fonts'), 'Copying font assets');
  var stream = gulp.src([
    './assets/fonts/**/*',
    './node_modules/uswds/src/fonts/**/*',
  ]);

  return stream.pipe(gulp.dest('./static/assets/fonts'));

});
