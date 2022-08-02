var gulp = require('gulp');
const webp = require('gulp-webp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('images', function () {

  log(colors.cyan('images'), 'Copying image assets');
  var stream = gulp.src([
    './assets/img/**/*',
    './node_modules/@uswds/uswds/dist/img/**/*',
  ]).pipe(webp());

  return stream.pipe(gulp.dest('./static/assets/img'));

});