var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('nvrf', function () {

  log(colors.cyan('nvrf'), 'Copying nvrf assets');
  var stream = gulp.src([
    './assets/NVRF/**/*'
  ]);

  return stream.pipe(gulp.dest('./static/assets/NVRF'));

});
