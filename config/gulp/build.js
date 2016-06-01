var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var runSequence = require('run-sequence');
var spawn = require('cross-spawn');

gulp.task('clean-all', function () {
  return del([
    './static/assets/**/*',
    './public/**/*',
  ]);
});

gulp.task('build', [ 'clean-all' ], function (done) {
  exports.printPackageInfo();
  gutil.log(gutil.colors.cyan('build'), 'Building asset-pipeline');
  runSequence([ 'styles:homepage', 'scripts', 'images', 'fonts' ], done);
});


gulp.task('build:website', [ 'build' ], function (done) {

  gutil.log(gutil.colors.cyan('build:website'), 'Building static website via Hugo');

  if (cFlags.production) {
    gutil.log(gutil.colors.cyan('build:website'), 'Production mode: Looking for branch-specific BaseUrl variables...');
    //setBranchBaseUrl();
  }

  var hugo_args = [];

  if (process.env.SITE_CONFIGPATH) {
    gutil.log(gutil.colors.cyan('build:website'), 'Using environment-specified --config path:' + process.env.SITE_CONFIGPATH);
    hugo_args.push('--config=' + process.env.SITE_CONFIGPATH);
  }

  if (process.env.SITE_BASEURL) {
    gutil.log(gutil.colors.cyan('build:website'), 'Using environment-specified BaseUrl: ' + process.env.SITE_BASEURL);
    hugo_args.push('--baseURL=' + process.env.SITE_BASEURL);
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
  gulp.watch('./assets/scripts/**/*.js', [ 'scripts' ]);
  gulp.watch('./assets/images/**/*', [ 'images' ]);
});

gulp.task('website', [ 'build', 'watch' ], function (done) {

  var buildDrafts = '--buildDrafts';

  if (cFlags.production) {
    buildDrafts = '';
  }

  var hugo_args = [ 'server', buildDrafts ];

  if (process.env.SITE_CONFIGPATH) {
    gutil.log(gutil.colors.cyan('website'), 'Using environment-specified --config path:' + process.env.SITE_CONFIGPATH);
    hugo_args.push('--config=' + process.env.SITE_CONFIGPATH);
  }

  if (process.env.SITE_BASEURL) {
    gutil.log(gutil.colors.cyan('website'), 'Using environment-specified BaseUrl: ' + process.env.SITE_BASEURL);
    hugo_args.push('--baseURL=' + process.env.SITE_BASEURL);
  }

  var hugo = spawn('hugo', hugo_args);

  hugo.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('website'), '\n' + data);
  });

  hugo.on('error', done);
  hugo.on('close', done);

});

// TODO: Do we really need this? Let's remove it in a separate PR
//function setBranchBaseUrl() {
  //if (process.env.SITE_BASEURL) {
    //gutil.log(gutil.colors.yellow('set-baseurl'), "Found pre-set SITE_BASEURL: " + process.env.SITE_BASEURL);
    //gutil.log(gutil.colors.yellow('set-baseurl'), "(If you see this in a Travis log, things are happening in the wrong order.");
  //} else
    //if (process.env.TRAVIS_BRANCH == "master" &&
        //checkBranchBaseUrl('master', 'production', 'SITE_BASEURL_PRODUCTION')) {
      //process.env.SITE_BASEURL = process.env.SITE_BASEURL_PRODUCTION;
    //} else
    //if (process.env.TRAVIS_BRANCH == "staging" &&
        //checkBranchBaseUrl('staging', 'staging', 'SITE_BASEURL_STAGING')) {
      //process.env.SITE_BASEURL = process.env.SITE_BASEURL_STAGING;
    //} else {
    //gutil.log(gutil.colors.yellow('set-baseurl'), 'No environmental config found; using BaseUrl from config file.');
  //}
//}

//function checkBranchBaseUrl(branch, environmentName, baseUrlVarName) {
  //if (process.env[baseUrlVarName]) {
    //gutil.log(gutil.colors.cyan('set-baseurl'), 'Using '+environmentName+' site BaseUrl: ' + process.env[baseUrlVarName]);
    //return true;
  //} else {
    //gutil.log(gutil.colors.red('set-baseurl'), 'ERROR: '+environmentName+' build ('+branch+' branch) lacking a '+baseUrlVarName+' env var. Check the Travis configuration?');
    //process.exit(1);
  //}
//}

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
