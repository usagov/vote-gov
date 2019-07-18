var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var cFlags = global.cFlags;

gulp.task('eslint', function (done) {

  if (!cFlags.test) {
    gutil.log(gutil.colors.cyan('eslint'), 'Disabling linting');
    return done();
  }

  return gulp.src('./assets/scripts/start.js')
    .pipe(eslint({
      configFile: './.eslintrc',
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});

gulp.task('js', function () {

  gutil.log(gutil.colors.cyan('js'), 'Copying font assets');
  var stream = gulp.src([
    './node_modules/uswds/dist/js/uswds.min.js',
  ]);

  return stream.pipe(gulp.dest('./assets/scripts'));

});

gulp.task('scripts',  gulp.series ('js' , 'eslint',function () {

  gutil.log(gutil.colors.cyan('scripts'), 'Browserifying JavaScript assets');

  var bundle = browserify({
    entries: './assets/scripts/start.js',
    debug: true,
  }).bundle();

  bundle = bundle.pipe(source('start.js'))
    .pipe(buffer());

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('scripts'), 'Compressing scripts');
    bundle = bundle.pipe(uglify());
  }

  bundle = bundle.pipe(rename('main.js'))
    .pipe(gulp.dest('./static/assets/scripts'));

  return bundle;

}));
