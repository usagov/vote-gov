var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var runSequence = require('run-sequence');
var spawn = require('cross-spawn');

gulp.task('clean-translation', function () {
  return del([
    './layouts/registrar',
    './content/registrar',
  ]);
});

gulp.task('copy-content', function (done) {

  var copyContent = spawn('cp', [
    '-rvf',
    './content/register',
    './content/registrar',
  ]);

  copyContent.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('copy-content'), '\n' + data);
  });

  copyContent.on('error', done);
  copyContent.on('close', done);


});
gulp.task('copy-layouts', function (done) {

  var copyLayout = spawn('cp', [
    '-rvf',
    './layouts/register',
    './layouts/registrar',
  ]);

  copyLayout.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('copy-layouts'), '\n' + data);
  });

  copyLayout.on('error', done);
  copyLayout.on('close', done);


});

gulp.task('copy-translation', [ 'clean-translation' ], function (done) {

  gutil.log(
    gutil.colors.cyan('copy-translation'),
    'Copying files from content/ & layouts/'
  );

  runSequence(
    'copy-content',
    'copy-layouts',
    done
  );

});
