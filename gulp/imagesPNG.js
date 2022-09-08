var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('images', function () {

  log(colors.cyan('images'), 'Copying social sharing assets');
  var stream = gulp.src([
    './assets/img/**/*'
  ]);

  return stream.pipe(gulp.dest('./static/assets/imgPNG'));

});