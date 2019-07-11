var gulp = require("gulp");
var jsonSchema = require("gulp-json-schema");

gulp.task("validate", () => {
  return gulp.src("./data/**/*.json")
    .pipe(jsonSchema("schema.json"));
});
