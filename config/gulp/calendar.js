var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var spawn = require('cross-spawn');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var scan = require('gulp-scan');
var electionDates = require('./dates/dates.json');
var file = ('./content/en/register/*.md')




function populate (done){


  for (var state in electionDates){
     console.log(state + " -> " + electionDates[state]);
     fileName = "./content/en/register/" + electionDates[state].state_abbreviation + ".md"
     console.log(fileName);
     pop2 (fileName,state);

     // console.log('loop');
     // .pipe(gulp.dest('./content/en/register'));

   };
   done();

   // return gulp.src(fileName)




}


function pop2(fileName,state ){
  console.log('in pop2');
  return gulp.src(fileName)

    .pipe(replace(/register = "(.+)"/, function (match,p1) {
      console.log("in replace");
      var register_deadline = electionDates[state].important_dates[0].date;

      console.log("deadline" ,register_deadline);

      // var absentee_deadline = electionDates[name].important_dates[1].date;
      // var early_deadline = electionDates[name].important_dates[2].date;
      // var election_deadline = electionDates[name].important_dates[4].date;

      return (
        'register = " ' + register_deadline + '"'
      )

    }))
     .pipe(gulp.dest('./content/en/register'));
}


exports.pop = populate;
gulp.task('pop', populate);

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

// gulp.task('populateStates', function () {
//   var file = './content/en/register/*.md'
//   gutil.log(gutil.colors.cyan('Adding event dates to .md files'));
//
//    gulp.src(file)
//
//    .pipe(scan({ term: /title = "(.+)"/ })
   // , fn: function (match, file ,p1 ) {
   //   console.log(match)
   //   gutil.log(gutil.colors.cyan('scanning....'));
     // var stateName = match.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();
     //
     //
     // console.log("populate...",stateName);
      // gulp.src('./content/en/register/ak.md')
      //    .pipe(replace(/register = "(.+)"/, function (match,p1) {
      //      var register_deadline = electionDates["alaska"].important_dates[0].date;
      //      console.log("reg_deadline",register_deadline);
      //      return (
      //        'register = "' + register_deadline + '"'
      //      );
      //    }))

     // populate( stateName);

   // }}));


 // .pipe(gulp.dest('./content/register'));

// });


// function populate(stateName){
//
// console.log("populate...",stateName);
//   return gulp.src('./content/en/register/ak.md')
//     .pipe(replace(/register = "(.+)"/, function (match,p1) {
//       console.log("inside",stateName);
//       var register_deadline = electionDates[stateName].important_dates[0].date;
//       console.log("reg_deadline",register_deadline);
//       return (
//         'register = "' + register_deadline + '"'
//       );
//     }))
//     .pipe(gulp.dest('./content/register'));
//
// };

  // return gulp.src('./content/register/ak.md')
  //
  //   .pipe(replace(/register = "(.+)"/, function (match,p1) {
  //     console.log("in replace");
  //     var stateName_lower = stateName.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();
  //     console.log("name" ,state);
  //
  //     var register_deadline = electionDates[name].important_dates[0].date;
  //     console.log("deadline" ,register_deadline);

      // var absentee_deadline = electionDates[name].important_dates[1].date;
      // var early_deadline = electionDates[name].important_dates[2].date;
      // var election_deadline = electionDates[name].important_dates[4].date;

//       return (
//         'register = " ' + register_deadline + '"'
//       )
//     }))
//
//  .pipe(gulp.dest('./content/register'));
// };
