var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var fs = require('fs');
var pkg = require('../package.json');
var spawn = require('cross-spawn');

 async function cleanAll() {
  fs.rmSync('./static/assets/**/*', {
    force: true,
    recursive: true
  });
}

function printPackageInfo (done){
  log(
    colors.yellow('v' + pkg.version),
    colors.green(pkg.name)
  );
  log();
  log(colors.red(' ______  ______  _____       __   ________  ______  ______'));
  log(colors.red('/\\  ___\\/\\  ___\\/\\  __-.    /\\ \\ / /\\  __ \\/\\__  _\\/\\  ___\\'));
  log(colors.blue('\\ \\  __\\\\ \\  __\\\\ \\ \\/\\ \\   \\ \\ \\\'/\\ \\ \\/\\ \\/_/\\ \\/\\ \\  __\\'));
  log(colors.blue(' \\ \\_\\   \\ \\_\\   \\ \\____-    \\ \\__| \\ \\_____\\ \\ \\_\\ \\ \\_____\\'));
  log(colors.white('  \\/_/    \\/_/    \\/____/     \\/_/   \\/_____/  \\/_/  \\/_____/'));
  log();
  done();

}

function watch () {
   log(colors.cyan('watch'), 'Watching assets for changes');
   gulp.watch('./assets/styles/**/*.scss', gulp.task( 'styles' ));
   gulp.watch('./assets/scripts/**/*.js', gulp.task( 'scripts' ));
   gulp.watch('./assets/images/**/*', gulp.task( 'images' ));
   gulp.watch('./data/translations/**/*.json', gulp.task( 'data' ));

}

function website (done){

    var setConfig = "config.json" || process.env.npm_package_config_votegov_hugo_en;
    var setURL = 'http://localhost';

    log(
      colors.cyan('website'),
      'Using environment-specified --config path: ' + setConfig
    );

    log(
      colors.cyan('website'),
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

    log(
      colors.cyan('spawn hugo'),

    );

    hugo.stdout.on('data', function (data) {
      log(colors.blue('website'), '\n' + data);
    });

    hugo.stderr.on('data', function (data) {
      log(colors.red('build:website'), '\n' + data);
    });

    hugo.on('error', done);
    hugo.on('close', done);


  }

function buildWebsite (done) {

  log(colors.cyan('build:website'), 'Building static website via Hugo');
  // English config is default
  var setConfig = process.env.npm_package_config_votegov_hugo_en;
  var setURL = process.env.BASEURL || '';

  log(
    colors.cyan('build:website'),
    'Using environment-specified --config path: ' + setConfig
  );

  log(
    colors.cyan('build:website'),
    'Using environment-specified BaseUrl: ' + setURL
  );


 if ('development' === process.env.NODE_ENV) {

    var hugo_args = [
      'server',
      '--watch',
      '--buildDrafts',
      '--config=' + setConfig,
      '--baseURL=' + setURL,
    ];


    var hugo = spawn('hugo', hugo_args);

    hugo.stdout.on('data', function (data) {
      log(colors.blue('build:website'), '\n' + data);
    });

    hugo.stderr.on('data', function (data) {
      log(colors.red('build:website'), '\n' + data);
    });


    hugo.on('error', done);
    hugo.on('close', done);
  }
  done();


}

exports.cleanAll = cleanAll;
exports.printPackageInfo = printPackageInfo;
exports.buildWebsite = buildWebsite;
exports.watch = watch;
exports.website= website;

var build = gulp.series(cleanAll, printPackageInfo, gulp.parallel('styles', 'scripts', 'images', 'fonts', 'nvrf'), 'data');
var buildWebsite = gulp.series (build, buildWebsite);
var website = gulp.series (build, website);

gulp.task('build', build);
gulp.task ('buildWebsite' , buildWebsite);
gulp.task ('watch' , watch);
gulp.task ('website' , website);
gulp.task ('cleanAll' , cleanAll);
gulp.task('dev', gulp.parallel('watch', 'website'));
