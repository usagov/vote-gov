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
  var destPagePath = 'nvrf-test';

  var stream = gulp.src([
    './node_modules/vote-gov-nvrf-app/dist/data/**/*'
  ]);

  return stream.pipe(gulp.dest(function(file) {
    var path = file.path;
    var base = file.base + '/';
    var lang = path.replace(base, '').split('/')[0];

    return `./content/${lang}/${destPagePath}/data`;
  }));

});

gulp.task('nvrf', gulp.series('nvrf-assets', 'nvrf-files', 'nvrf-data'));
