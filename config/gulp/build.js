var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var runSequence = require('run-sequence');
var spawn = require('cross-spawn');
var rename = require('gulp-rename');

gulp.task('clean-all', function () {
  return del([
    './static/assets/**/*',
  ]);
});

gulp.task('move-state-files', function () {
  gutil.log(gutil.colors.cyan('images'), 'Moving TOML state files');
  gulp.src('./data/translations/english/states.toml')
    .pipe(rename('english-states.toml'))
    .pipe(gulp.dest('./static/files'));
  gulp.src('./data/translations/spanish/states.toml')
    .pipe(rename('spanish-states.toml'))
    .pipe(gulp.dest('./static/files'));
});

gulp.task('build', [ 'clean-all' ], function (done) {
  exports.printPackageInfo();
  gutil.log(gutil.colors.cyan('build'), 'Building asset-pipeline');
  runSequence(
    [ 'styles', 'scripts', 'images', 'fonts', 'move-state-files' ],
    'copy-translation',
    done
  );
});

gulp.task('build:website', [ 'build' ], function (done) {

  gutil.log(gutil.colors.cyan('build:website'), 'Building static website via Hugo');

  // English config is default
  var setConfig = process.env.npm_package_config_votegov_hugo_en;
  var setURL = process.env.npm_package_config_votegov_urls_staging;

  if ('spanish' === process.env.NODE_LANG) {
    setConfig = process.env.npm_package_config_votegov_hugo_es;
    setURL = process.env.npm_package_config_votegov_urls_staging;
  }

  if ('production' === process.env.NODE_ENV) {
    setURL = process.env.npm_package_config_votegov_urls_production;
  }

  gutil.log(
    gutil.colors.cyan('build:website'),
    'Using environment-specified --config path: ' + setConfig
  );

  gutil.log(
    gutil.colors.cyan('build:website'),
    'Using environment-specified BaseUrl: ' + setURL
  );

  var hugo_args = [
    '--config=' + setConfig,
    '--baseURL=' + setURL,
  ];

  var hugo = spawn('hugo', hugo_args);

  hugo.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('build:website'), '\n' + data);
  });

  hugo.on('error', done);
  hugo.on('close', done);

});

gulp.task('watch', function () {
  gutil.log(gutil.colors.cyan('watch'), 'Watching assets for changes');
  gulp.watch('./assets/styles/**/*.scss', [ 'styles' ]);
  gulp.watch('./assets/scripts/**/*.js', [ 'scripts' ]);
  gulp.watch('./assets/images/**/*', [ 'images' ]);
  gutil.log(gutil.colors.cyan('watch'), 'Watching content & layouts for changes');
  gulp.watch([
    './content/register/*.md',
    './layouts/register/**/*.html',
  ], [ 'copy-translation' ] );
});

gulp.task('website', [ 'build', 'watch' ], function (done) {

  // English config and Staging URL are the defaults
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
