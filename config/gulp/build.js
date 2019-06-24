var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
// var runSequence = require('run-sequence');
var spawn = require('cross-spawn');

 // Clean assets (returns a promise)
 function clean() {
   return del(['./static/assets/**/*']);
 }

function printPackageInfo (done){
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
  done();

}

function watch () {
  // gulp.task('watch', function () {
    gutil.log(gutil.colors.cyan('watch'), 'Watching assets for changes');
    gulp.watch('./assets/styles/**/*.scss', gulp.task( 'styles' ));
   gulp.watch('./assets/scripts/**/*.js', gulp.task( 'scripts' ));
   gulp.watch('./assets/images/**/*', gulp.task( 'images' ));
   gutil.log(gutil.colors.cyan('watch'), 'Watching content & layouts for changes');
   gulp.watch([
     './content/register/*.md',
     './layouts/register/**/*.html'
   ], gulp.series( 'copy-translation' ) );

}

function web (done){



  // gulp.task('website', gulp.series('build' , function (done) {
  // gulp.task('website', gulp.series( 'build', function (done) {

    // English config and Staging URL are the defaults
      // gutil.log(gutil.colors.cyan('ENV'), process.env.NODE_ENV);
    var setConfig = process.env.npm_package_config_votegov_hugo_en;
    var setURL = 'http://localhost/';

    if ('spanish' === process.env.NODE_LANG) {
      setConfig = process.env.npm_package_config_votegov_hugo_es;
      setURL = 'http://localhost/es/';
    }

    gutil.log(
      gutil.colors.cyan('website'),
      'Using environment-specified --config path: ' + setConfig
    );

    gutil.log(
      gutil.colors.cyan('website'),
      'Using environment-specified BaseUrl: ' + setURL
    );


    var hugo_args = [
      'server',
      '--watch',
      '--buildDrafts',
      '--config=' + setConfig,
      '--baseURL=' + setURL,
    ];



    var hugo = spawn('hugo', hugo_args);

    gutil.log(
      gutil.colors.cyan('spawn hugo'),

    );

    hugo.stdout.on('data', function (data) {
      gutil.log(gutil.colors.blue('website'), '\n' + data);
    });

    hugo.stderr.on('data', function (data) {
      gutil.log(gutil.colors.red('build:website'), '\n' + data);
    });

    hugo.on('error', done);
    hugo.on('close', done);


  }


function buildWebsite (done) {


    // gutil.log(gutil.colors.cyan('ENV'), process.env.NODE_ENV);

    gutil.log(gutil.colors.cyan('build:website'), 'Building static website via Hugo');

  // English config is default
  var setConfig = process.env.npm_package_config_votegov_hugo_en;
  var setURL = process.env.BASEURL || '';

  if ('spanish' === process.env.NODE_LANG) {
    setConfig = process.env.npm_package_config_votegov_hugo_es;
  }

  gutil.log(
    gutil.colors.cyan('build:website'),
    'Using environment-specified --config path: ' + setConfig
  );

  gutil.log(
    gutil.colors.cyan('build:website'),
    'Using environment-specified BaseUrl: ' + setURL
  );



  if ('development' === process.env.NODE_ENV) {
    var hugo_args = [
      '--config=' + setConfig,
      '--baseURL=' + setURL,
    ];


    var hugo = spawn('hugo', hugo_args);

    hugo.stdout.on('data', function (data) {
      gutil.log(gutil.colors.blue('build:website'), '\n' + data);
    });

    hugo.stderr.on('data', function (data) {
      gutil.log("gutil.colors.red('build:website'), '\n' + data");
    });


    hugo.on('error', done);
    hugo.on('close', done);
  }

}

    // done();
  // };

// const builds= gulp.series('clean');
exports.clean = clean;
exports.printPackageInfo = printPackageInfo;
exports.buildWebsite = buildWebsite;
exports.watch = watch;
exports.web= web;

var build = gulp.series(clean, printPackageInfo, gulp.parallel('styles', 'scripts', 'images', 'fonts'), 'copy-translation');
var bw = gulp.series (build, buildWebsite);
// var wb = gulp.series(build,web)
var website = gulp.series (build, web);
// var website = gulp.series (gulp.parallel (watch,build), web);
gulp.task('build', build);
gulp.task ('buildWebsite' , bw);
gulp.task ('watch' , watch);
gulp.task ('website' , website);
