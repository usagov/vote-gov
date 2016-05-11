var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;

gulp.task('clean-all', function () {
  return del([
    './static/assets/**/*',
    './public/**/*',
  ]);
});

gulp.task('build', [ 'clean-all' ], function (done) {
  exports.printPackageInfo();
  gutil.log(gutil.colors.cyan('build'), 'Building asset-pipeline');
  runSequence([ 'styles:homepage', /*'scripts',*/ 'images', 'fonts' ], done);
});


gulp.task('build:website', [ 'build' ], function (done) {

  gutil.log(gutil.colors.cyan('build:website'), 'Building static website via Hugo');

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('build:website'), 'Production mode: Looking for branch-specific BaseUrl variables...');
    //setBranchBaseUrl();
  }

  var hugo_args = [];
  if (process.env.SITE_BASEURL) {
    gutil.log(gutil.colors.cyan('build:website'), 'Using environment-specified BaseUrl: ' + process.env.SITE_BASEURL);
    hugo_args = [ '-b', process.env.SITE_BASEURL];
  }

  var hugo = spawn('hugo', hugo_args);

  hugo.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('build:website'), '\n' + data);
  });

  hugo.on('error', done);
  hugo.on('close', done);

});

gulp.task('watch', function () {
  gutil.log(gutil.colors.cyan('watch'), 'Watching assets for changes');
  gulp.watch('./assets/styles/**/*.scss', [ 'styles:homepage' ]);
  //gulp.watch('./assets/scripts/**/*.js', [ 'scripts' ]);
  gulp.watch('./assets/images/**/*', [ 'images' ]);
});

gulp.task('website', [ 'build', 'watch' ], function (done) {

  var buildDrafts = '--buildDrafts';

  if (cFlags.production) {
    buildDrafts = '';
  }

  var hugo = spawn('hugo', [ 'server', buildDrafts ]);

  hugo.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('website'), '\n' + data);
  });

  hugo.on('error', done);
  hugo.on('close', done);

});

exports.printPackageInfo = function(){
  gutil.log(
    gutil.colors.yellow('v' + pkg.version),
    gutil.colors.green(pkg.name)
  );
  gutil.log();
  gutil.log(gutil.colors.red(' ______  ______  _____       __   ________  ______  ______'));
  gutil.log(gutil.colors.red('/\\  ___\\/\\  ___\\/\\  __-.    /\\ \\ / /\\  __ \\/\\__  _\\/\\  ___\\'));
  gutil.log(gutil.colors.blue('\\ \\  __\\\\ \\  __\\\\ \\ \\/\\ \\   \\ \\ \\\'/\\ \\ \\/\\ \\/_/\\ \\/\\ \\  __\\'));
  gutil.log(gutil.colors.blue(' \\ \\_\\   \\ \\_\\   \\ \\____-    \\ \\__| \\ \\_____\\ \\ \\_\\ \\ \\_____\\'));
  gutil.log(gutil.colors.white('  \\/_/    \\/_/    \\/____/     \\/_/   \\/_____/  \\/_/  \\/_____/'));
  gutil.log();
}
