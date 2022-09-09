var gulp = require('gulp');
const webp = require('gulp-webp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('images', gulp.parallel(
  function() {
      return gulp.src([
        './assets/img/**/*',
      ]).pipe(gulp.dest('./static/assets/img'));
  },
  function() {
    return gulp.src([
      './assets/img/**/*',
      './node_modules/@uswds/uswds/dist/img/**/*',
    ]).pipe(webp()).pipe(gulp.dest('./static/assets/img'));
}));