var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var spawn = require('cross-spawn');
var find = require('gulp-find');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var spanishStateNames = require('./lang/spanish/state-names.json');

gulp.task('clean-translation', function () {
  gutil.log(gutil.colors.cyan('clean-translation'), 'Removing generated register/ files');
  return del([
    './layouts/registrar',
    './content/registrar',
  ]);
});

gulp.task('copy-content-spanish', function (done) {

  return gulp.src('./content/en/register/*.md')
    .pipe(replace(/title = "(.+)"/, function (match, p1) {
      var name = p1.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();
      var title = spanishStateNames[name].title;
      return (
        'title = "' + title + '"'
      );
    }))
    .pipe(gulp.dest('./content/es/registrar'));

});

gulp.task('copy-layouts-spanish', function (done) {

  var copyLayout = spawn('cp', [
    '-rvf',
    './layouts/register',
    './layouts/registrar',
  ]);

  copyLayout.stdout.on('data', function (data) {
    gutil.log(gutil.colors.blue('copy-layouts-spanish'), '\n' + data);
  });

  copyLayout.on('error', done);
  copyLayout.on('close', done);


});

// gulp.task('copy-links-spanish', function (done) {
//   gutil.log(
//     gutil.colors.cyan('copy-links-spanish'),
//     'Copying links into state.md files.'
//   );
//   for (var state in spanishStateNames) {
//      fileName = "./content/es/registrar/" + spanishStateNames[state].state_abbreviation + ".md"
//      populate(fileName, state);
//    };
//    done();
// });
//
// function populate(fileName,state ){
//   return gulp.src(fileName)
//     .pipe(replace(/external_link = "(.+)"/, function (match,p1) {
//      var link = spanishStateNames[state].external_link;
//       return ( 'external_link = "' + link + '"' )
//     }))
//     .pipe(gulp.dest('./content/es/registrar'));
// }

gulp.task('copy-links-spanish', function () {
  return gulp.src('./content/es/registrar/*.md')
    .pipe(replace(/external_link = "(.+)"/, function (match, p1) {
      console.log(match);
      var external_link = spanishStateNames[find(/title = "(.+)"/)].external_link;
      return (
        'external_link = "' + external_link + '"'
      );
    }))
    .pipe(gulp.dest('./content/es/registrar'));
 });

 //here just for my own note
 // gulp.task('populateStates', function () {
 //   //from register
 //    return gulp.src('./content/en/register/*.md')
 //    //look through state file for title line
 //    .pipe(scan({ term: /title = "(.+)"/ } , fn: function (match, file ,p1 ) {
 //    //create title line variable
 //     var stateName = match.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();
 //         }))
 //         //replace register line with new register deadline from electionDates
 //       .pipe(replace(/register = "(.+)"/, function (match,p1) {
 //               var register_deadline = electionDates[stateName].important_dates[0].date;
 //               return ('register = "' + register_deadline + '"');
 //   }}))
 //    //put register stuff back into register folder
 //      .pipe(gulp.dest('./content/en/register'));
 //   }}));

gulp.task('copy-translation', gulp.series( 'clean-translation', 'copy-content-spanish', 'copy-layouts-spanish', 'copy-links-spanish'  , function (done) {
  gutil.log(
    gutil.colors.cyan('copy-translation'),
    'Copying files from content/ & layouts/ for translated URLs'
  );
  done();
}));
