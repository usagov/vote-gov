var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var cFlags = global.cFlags;

gulp.task('eslint', function (done) {

  if (process.env.NODE_ENV === 'production') {
    log(colors.cyan('eslint'), 'Disabling linting');
    return done();
  }
  else {
    var eslint = require('gulp-eslint');
    
    return gulp.src('./assets/scripts/**/*.js')
      .pipe(eslint({
        configFile: './.eslintrc',
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  }

});

gulp.task('scripts',  gulp.series ('eslint' , function () {

  log(colors.cyan('scripts'), 'Browserifying JavaScript assets');

  var bundle = browserify({
    entries: './assets/scripts/start.js',
    debug: true,
  }).bundle();

  bundle = bundle.pipe(source('start.js'))
    .pipe(buffer());

  if (process.env.NODE_ENV === 'production') {
    log(colors.cyan('scripts'), 'Compressing scripts');
    bundle = bundle.pipe(uglify());
  }

  bundle = bundle.pipe(rename('main.js'))
    .pipe(gulp.dest('./static/assets/scripts'));

  var stream = gulp.src([
    './node_modules/@uswds/uswds/dist/js/uswds-init.min.js',
  ]);

  stream = stream.pipe(gulp.dest('./static/assets/scripts'));

  return bundle, stream;

}));
