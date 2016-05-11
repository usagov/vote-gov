var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

//gulp.task('eslint', function (done) {

  //if (!cFlags.test) {
    //gutil.log(gutil.colors.cyan('eslint'), 'Disabling linting');
    //return done();
  //}

  //return gulp.src('./assets/scripts/**/*.js')
    //.pipe(eslint({
      //configFile: './.eslintrc',
    //}))
    //.pipe(eslint.format());

//});

//gulp.task('scripts', [ 'eslint' ], function () {

  //gutil.log(gutil.colors.cyan('scripts'), 'Browserifying JavaScript assets');

  //var bundle = browserify({
    //entries: './assets/scripts/start.js',
    //debug: true,
  //}).bundle();

  //bundle = bundle.pipe(source('start.js'))
    //.pipe(buffer());

  //if (cFlags.production) {
    //gutil.log(gutil.colors.cyan('scripts'), 'Compressing scripts');
    //bundle = bundle.pipe(uglify());
  //}

  //bundle = bundle.pipe(rename('main.js'))
    //.pipe(gulp.dest('./static/assets/scripts'));

  //return bundle;

//});

