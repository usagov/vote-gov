var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var pkg = require('../../package.json');
var spawn = require('cross-spawn');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var electionDates = require('./dates/dates.json');
var spanishStateNames = require('./lang/spanish/state-names.json');

gulp.task('populateStates', function () {
  gutil.log(gutil.colors.cyan('Adding event dates to .md files'));

  return gulp.src('./content/register/*.md')

    .pipe(replace(/title = "(.+)"/, function (match, p1) {
      var name = p1.replace(/\s/g, '-').replace(/\./g, '').toLowerCase();

      var dates = electionDates[name].important_dates[0];
      gutil.log(gutil.colors.cyan(dates));
      var register_date = dates.date
      return (
        'register = "' + register_date + '"'
      );
    }))
    .pipe(gulp.dest('./content/register'));

});
