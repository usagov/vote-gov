var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('scss-lint', function (done) {
  if (process.env.NODE_ENV === 'development') {
    var scsslint = require('gulp-scss-lint');

    if (!cFlags.test) {
      gutil.log(gutil.colors.cyan('scss-lint'), 'Disabling linting');
      return done();
    }

    return gulp.src('./assets/styles/**/*.scss')
      .pipe(scsslint({
        config: './.scss-lint.yml',
      }))
      .pipe(scsslint.failReporter());
  }
  return done();

});

gulp.task('styles', gulp.series('scss-lint', function () {

  gutil.log(gutil.colors.cyan('styles'), 'Compiling Sass assets');

  var sassStream = sass();
  var stream = gulp.src('./assets/styles/main.scss');

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('styles'), 'Compressing styles');
    sassStream = sass({ outputStyle: 'compressed' });
  }

  stream = stream.pipe(sourcemaps.init())
    .pipe(sassStream)
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
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./static/assets/styles'));

  return stream;


}));
