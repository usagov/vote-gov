var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');

gulp.task('nvrf-assets', function () {
  var stream = gulp.src([
    './node_modules/vote-gov-nvrf-app/dist/assets/*'
  ]);

  return stream.pipe(gulp.dest('./static/assets/nvrf/assets'));

});

gulp.task('nvrf-files', function () {
  var stream = gulp.src([
    './node_modules/vote-gov-nvrf-app/dist/files/*'
  ]);

  return stream.pipe(gulp.dest('./static/assets/nvrf/files'));

});

gulp.task('nvrf-data', function () {
  var stream = gulp.src([
    './node_modules/vote-gov-nvrf-app/dist/data/en/*'
  ]);

  return stream.pipe(gulp.dest('./content/en/nvrf-test/data/en'));

});

gulp.task('nvrf', gulp.series('nvrf-assets', 'nvrf-files', 'nvrf-data'));
