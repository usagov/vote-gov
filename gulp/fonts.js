var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('fonts', function () {

  log(colors.cyan('fonts'), 'Copying font assets');
  var stream = gulp.src([
    './node_modules/@uswds/uswds/dist/fonts/**/*',
  ]);

  return stream.pipe(gulp.dest('./static/assets/fonts'));

});
