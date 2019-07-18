var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
//var es  = require('event-stream');
var rename = require('gulp-rename');
var cFlags = global.cFlags;

// var glob = require('glob');




gulp.task('eslint', function (done) {

  if (!cFlags.test) {
    gutil.log(gutil.colors.cyan('eslint'), 'Disabling linting');
    return done();
  }

  return gulp.src('./assets/scripts/**/*.js')
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

gulp.task('scripts',  gulp.series ('js' , function () {

  gutil.log(gutil.colors.cyan('scripts'), 'Browserifying JavaScript assets');

  var bundle = browserify({
    entries: './assets/scripts/uswds.min.js',
    debug: true,
  }).bundle();

  bundle = bundle.pipe(source('uswds.min.js'))
    .pipe(buffer());

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('scripts'), 'Compressing scripts');
    bundle = bundle.pipe(uglify());
  }

  bundle = bundle.pipe(rename('main.js'))
    .pipe(gulp.dest('./static/assets/scripts'));

  return bundle;

}));



//
//
// gulp.task('scripts', gulp.series( 'js' , function(done) {
//     gutil.log(gutil.colors.cyan('scripts'), 'Copying scripts assets');
//     var files = glob.sync('./assets/scripts/**/*.js');
//     return merge(files.map(function(file) {
//
//       return browserify({
//           entries: file,
//           debug: true
//       }).transform(reactify)
//           .bundle()
//           .pipe(source(file))
//           .pipe(gulp.dest('./static/assets/scripts'));
//     }));
//   }));
