var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var scss = require('gulp-dart-scss');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");


gulp.task('scss-lint', function (done) {
  if (process.env.NODE_ENV === 'development') {
    var scsslint = require('gulp-scss-lint');

    if (process.env.NODE_ENV === 'production') {
      log(colors.cyan('scss-lint'), 'Disabling linting');
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

  log(colors.cyan('styles'), 'Compiling Sass assets');

  var scssStream = scss();
  var stream = gulp.src('./assets/styles/main.scss');

  if (process.env.NODE_ENV === 'production') {
    log(colors.cyan('styles'), 'Compressing styles');
    scssStream = scss({outputStyle: 'compressed'});

    stream = stream.pipe(scssStream)
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest('./static/assets/styles'));
  }
  else {
    stream = stream.pipe(sourcemaps.init())
      .pipe(scssStream)
      .pipe(postcss([autoprefixer()]))
      .on('error', function (error) {
        log(
          colors.yellow('styles'),
          colors.red('error'),
          '\n',
          error.messageFormatted
        );

        this.emit('end');
      })
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./static/assets/styles'));
  }

  return stream;


}));
