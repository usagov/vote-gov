var gulp = require('gulp');
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
      './assets/img/favicons/*',
    ]).pipe(gulp.dest('./static/assets/img/favicons'));
},
  function() {
    return gulp.src([
      './assets/img/**/*',
      './node_modules/@uswds/uswds/dist/img/**/*',
    ]).pipe(gulp.dest('./static/assets/img'));
}));
