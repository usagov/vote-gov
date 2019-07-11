var gulp = require('gulp');
var gutil = require('gulp-util');
var jsonSchema = require("gulp-json-schema");



function validate() {
  gutil.log(gutil.colors.cyan('validate'), 'Validating json data');
    return gulp.src('./config/gulp/dates/dates.json')
      .pipe(jsonSchema("./config/gulp/dates/dates_schema.json", {verbose:true, loadMissingSchemas:true}));
}


exports.validate = validate;
gulp.task('v',validate);
