var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var scss = require('gulp-dart-scss');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");


gulp.task('scss-lint', function (done) {
  if (process.env.NODE_ENV === 'production') {
    log(colors.cyan('scss-lint'), 'Disabling linting');
    return done();
  }
  else {
    var gulpStylelint = require('gulp-stylelint');

    return gulp.src('./assets/styles/**/*.scss')
      .pipe(gulpStylelint({
        configFile: './.stylelintrc.json',
        failAfterError: false,
        reporters: [{formatter: "string", console: true}]
      }));
  }

});

gulp.task('styles', gulp.series('scss-lint', function () {

  log(colors.cyan('styles'), 'Compiling Sass assets');

  var scssStream = scss({includePaths: ["node_modules/@uswds/uswds/packages"]});
  var stream = gulp.src('./assets/styles/main.scss');

  if (process.env.NODE_ENV === 'production') {
    log(colors.cyan('styles'), 'Compressing styles');
    scssStream = scss({includePaths: ["node_modules/@uswds/uswds/packages"], outputStyle: 'compressed'});

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
