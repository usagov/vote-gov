var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('images', function () {

  gutil.log(gutil.colors.cyan('images'), 'Copying image assets');
  var stream = gulp.src([
    './assets/img/**/*',
    './node_modules/uswds/src/img/**/*',
  ]);

  return stream.pipe(gulp.dest('./static/assets/img'));

});
