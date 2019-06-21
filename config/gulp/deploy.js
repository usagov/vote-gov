var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var runSequence = require('run-sequence');
var spawn = require('cross-spawn');

gulp.task('deploy-clean-all', function () {
  return del([
    './public',
    './tmp/public'
  ]);
});

gulp.task('deploy-create-tmp', function (done) {

  var mkdir = spawn('mkdir', [ '-p', './tmp' ]);

  mkdir.stdout.on('data', function (data) {
    gutil.log(
      gutil.colors.blue('deploy-create-tmp'),
      '\n' + data
    );
  });

  mkdir.on('error', done);
  mkdir.on('close', done);

});

gulp.task('deploy-english', function(done) {

  process.env.NODE_LANG = '';
  runSequence(
    'build:website',
    done
  );

});

gulp.task('deploy-spanish', function(done) {

  process.env.NODE_LANG = 'spanish';
  runSequence(
    'build:website',
    done
  );

});

gulp.task('deploy-remove-remnants', function (done) {
  return del([
    './tmp/public/es/assets/',
    './tmp/public/es/files/',
    './tmp/public/register/index.html',
    './tmp/public/es/registrar/index.html'
  ]);
});

gulp.task('deploy-provision', function (done) {

  return gulp.src('./tmp/public/**/*')
    .pipe(gulp.dest('./public'));

});

gulp.task('deploy-nginx-conf', function (done) {

  return gulp.src('./nginx.conf')
    .pipe(gulp.dest('./public'));

});

gulp.task('deploy', function (done) {

  // var url = process.env.npm_package_config_votegov_urls_staging;
  var url = process.env.BASEURL || '';

  if (! url) {
    gutil.log(
      gutil.colors.red('deploy'),
      'Deploying the multilingual site should be done within npm-script'
    );
    done();
    process.exit(1);
    return;
  }

  if ('production' === process.env.NODE_ENV) {

    // url = process.env.npm_package_config_votegov_urls_production;

  }

  gutil.log(
    gutil.colors.green('deploy'),
    'Deploying multilingual site : ' + url
  );
  gulp.series('deploy-create-tmp',
  'deploy-english',
  'deploy-spanish',
  'deploy-remove-remnants',
  'deploy-provision',
  'deploy-nginx-conf')
  // runSequence(
  //   'deploy-create-tmp',
  //   'deploy-english',
  //   'deploy-spanish',
  //   'deploy-remove-remnants',
  //   'deploy-provision',
  //   'deploy-nginx-conf',
  //   done
  // );

});
