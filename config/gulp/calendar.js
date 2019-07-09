var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var spawn = require('cross-spawn');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var map = require('map-stream');


var electionDates = require('./dates/dates.json');
var spanishStateNames = require('./lang/spanish/state-names.json');
//
// gulp.task('clean-calendar-events', function () {
//   gutil.log(gutil.colors.cyan('clean-calendar-events'), 'Removing generated register/ files');
//   return del([
//
//     './content/registrar',
//
//
//   ]);
// });

gulp.task('populateStates', function () {
  gutil.log(gutil.colors.cyan('Adding event dates to .md files'));
  var file = './content/en/register/ak.md'
    console.log("title");

  return gulp.src(file)

    .pipe(replace(/register = "(.+)"/, function (match, p1) {
      var title = file.match(/title = "(.+)"/);
      console.log("title", title);

      var name = p1.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();
      // var title = spanishStateNames[name].title;
      return (
        'register = "' + name + '"'
      );
    }))
    .pipe(gulp.dest('./content/en/register'));

});
//    .pipe(replace(/register = "(.+)"/, function (match, p1) {
//
//           // .pipe(replace(/register = "(.+)"/,function (match, p1) {
//           // var title = file;
//
//           var title = file.match(/title = "(.+)"/);
//           console.log("title", title);
//
//           // var name = p1.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();
//           // console.log("p1", p1);
//           // console.log("name" ,name);
//           //
//           // var register_deadline = electionDates[name].important_dates[0].date;
//           // console.log("deadline" ,register_deadline);
//
//           // var absentee_deadline = electionDates[name].important_dates[1].date;
//           // var early_deadline = electionDates[name].important_dates[2].date;
//           // var election_deadline = electionDates[name].important_dates[4].date;
//
//           return (
//             'register = " ' + register_deadline + '"'
//           );
//         }))
//         .pipe(gulp.dest('./content/en/register'));
//
//       //   return (
//       //     'register = " ' + register_deadline + '"'
//       //   );
//       // }))
//       // .pipe(gulp.dest('./content/en/register'));
//
// });
