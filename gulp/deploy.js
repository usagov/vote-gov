var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var fs = require('fs');
var spawn = require('cross-spawn');
var build = require('./build');

gulp.task('deploy-clean-all', async function () {
  fs.rmSync(['./public','./tmp/public'
  ], {
    force: true,
    recursive: true
  });
});

gulp.task('deploy-create-tmp', function (done) {

  var mkdir = spawn('mkdir', [ '-p', './tmp' ]);

  mkdir.stdout.on('data', function (data) {
    log(
      colors.blue('deploy-create-tmp'),
      '\n' + data
    );
  });

  mkdir.on('error', done);
  mkdir.on('close', done);
  done();

});

gulp.task('deploy-english', function(done) {

  process.env.NODE_LANG = '';
  build.buildWebsite(done);
  done();


});

gulp.task('deploy-spanish', function(done) {

  process.env.NODE_LANG = 'spanish';
  build.buildWebsite(done);
  done();

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

var url = process.env.BASEURL || '';

  if (! url) {
    log(
      colors.red('deploy'),
      'Deploying the multilingual site should be done within npm-script'
    );
    done();
    process.exit(1);
    return;
  }
  if ('production' === process.env.NODE_ENV) {


  }
  log(
    colors.green('deploy'),
    'Deploying multilingual site : ' + url
  );
  gulp.series('deploy-create-tmp',
  'deploy-english',
  'deploy-spanish',
  'deploy-remove-remnants',
  'deploy-provision',
  'deploy-nginx-conf')

});
