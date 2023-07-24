var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var scss = require('gulp-dart-scss');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
const stylelint = require("stylelint");

gulp.task('scss-lint', async function lintSass(callback) {
  if (process.env.NODE_ENV === 'production') {
    log(colors.cyan('scss-lint'), 'Disabling linting');
    return done();
  }
  else {
      const { errored, output } = await stylelint.lint({
        files: [
          `./assets/styles/**/*.scss`,
        ],
        formatter: "string",
      });
    
      callback(errored ? new Error(output) : null);
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
    var sourcemaps = require('gulp-sourcemaps');
    
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
