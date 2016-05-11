var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('fonts', function () {

  gutil.log(gutil.colors.cyan('fonts'), 'Copying font assets');
  var stream = gulp.src([
    './assets/fonts/**/*',
    './node_modules/uswds/src/fonts/**/*',
  ]);

  return stream.pipe(gulp.dest('./static/assets/fonts'));

});


