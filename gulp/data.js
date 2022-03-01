var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var fs = require('fs');
var stateData = require('../data/states.json');
var languages = require('../config/_default/languages.json');

// Copy data from state-data.json into .md files in /content for each state by language.
gulp.task('state-data', function (cb) {
  var tData = {};

  for (var lang in languages) {
    // Load state specific translated data.
    tData[lang] = require('../data/translations/' + lang +  '/state-data.json');

    // Remove dynamic state language directories.
    // We will regenerate them later.
    fs.rmSync('./content/' + lang, {
      force: true,
      recursive: true
    });
  }

  // Loop through each state.
  for (var state in stateData) {
    var stateContent = '';

    // Loop through each property.
    // Store the state general data as string content.
    for (var props in stateData[state]) {
      stateContent += props + ' = "' + stateData[state][props] + '"\n';
    }

    // Loop through language specific data per state and output the content files.
    for (var tProp in tData) {
      var register = languages[tProp].params.register_path;
      var dirName = './content/' + tProp + '/' + register;
      var fileName = dirName + '/' + state + '.md';
      var stateProps = tData[tProp][state];
      var content = '+++\n\n';
      content += stateContent;

      for (var key in stateProps) {
        content += key + ' = "' + stateProps[key] + '"\n';
      }

      content += '\n+++';

      // Create the content directory.
      fs.mkdirSync(dirName, { recursive: true });

      // Write the content to a markdown file.
      fs.writeFile(fileName, content, cb);
    }
  }
});

gulp.task('data', gulp.series('state-data', function (done) {
  log(
    colors.cyan('state-data'),
    'Copying data from state-data.json into .md files in /content for each state by language.'
  );
  done();
}));
