var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');

gulp.task('styles:homepage', [ /*'scss-lint'*/ ], function () {

  gutil.log(gutil.colors.cyan('styles:homepage'), 'Compiling Sass assets');

  var sassStream = sass();
  var stream = gulp.src('./assets/styles/main.scss');

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('styles:homepage'), 'Compressing styles');
    sassStream = sass({ outputStyle: 'compressed' });
  }

  stream = stream.pipe(sassStream)
    .on('error', function (error) {
      gutil.log(
        gutil.colors.yellow('styles:homepage'),
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


