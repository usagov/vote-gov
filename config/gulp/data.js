var gulp = require("gulp");
var gutil = require('gulp-util');
var jsonSchema = require("gulp-json-schema");

gulp.task("validate", () => {
  gutil.log(gutil.colors.cyan('validate'), 'Validating json data');
  // return gulp.src("./dates/**/*.json")
  return gulp.src('./lang/spanish/state-names.json')

    .pipe(jsonSchema("dates_schema.json"));
    console.log("done");
});
