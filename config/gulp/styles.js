var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
// var scsslint = require('gulp-scss-lint');

// gulp.task('styles', [ 'scss-lint' ], function () {
gulp.task('styles', [ 'scss-lint' ], function () {

  gutil.log(gutil.colors.cyan('styles'), 'Compiling Sass assets');

  var sassStream = sass();
  var stream = gulp.src('./assets/styles/main.scss');

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('styles'), 'Compressing styles');
    sassStream = sass({ outputStyle: 'compressed' });
  }

  stream = stream.pipe(sassStream)
    .on('error', function (error) {
      gutil.log(
        gutil.colors.yellow('styles'),
        gutil.colors.red('error'),
        '\n',
        error.messageFormatted
      );

      if (cFlags.production) {
        process.exit(1);
      }

      this.emit('end');
    })
    .pipe(gulp.dest('./static/assets/styles'));

  return stream;


});

gulp.task('scss-lint', function (done) {

  if (!cFlags.test) {
    gutil.log(gutil.colors.cyan('scss-lint'), 'Disabling linting');
    return done();
  }

  return gulp.src('./assets/styles/**/*.scss')
    .pipe(scsslint({
      config: './.scss-lint.yml',
    }))
    .pipe(scsslint.failReporter());

});
