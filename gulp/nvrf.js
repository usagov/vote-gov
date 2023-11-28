var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('nvrf', function () {

  log(colors.cyan('nvrf'), 'Copying nvrf assets');
  var stream = gulp.src([
    './node_modules/vote-gov-nvrf-app/dist/**/*'
  ]);

  return stream.pipe(gulp.dest('./static/nvrf'));

});
