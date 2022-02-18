var gulp = require('gulp');
var log = require('fancy-log');
var colors = require('ansi-colors');
var fs = require('fs');
var stateData = require('./state-data.json');

// Copy data from state-data.json into .md files in /content for each state in english and spanish
gulp.task('state-data', function(cb){
  for (var state in stateData) {
    fileName_english = "./content/en/register/" + stateData[state].state_abbreviation + ".md"
    fileName_spanish = "./content/es/registrar/" + stateData[state].state_abbreviation + ".md"
    contents_english='+++\n\n'
    contents_spanish='+++\n\n'
    for(var key in stateData[state]) {
      if(key != "english" && key != "spanish"){ //TODO: if( stateData[state][key].isString )
        contents_english+=key + ' = "' + stateData[state][key] + '"\n'
        contents_spanish+=key + ' = "' + stateData[state][key] + '"\n'
      }
    }
    for(var key in stateData[state]["english"]) {
      contents_english+=key + ' = "' + stateData[state]["english"][key] + '"\n'
    }
    for(var key in stateData[state]["spanish"]) {
      contents_spanish+=key + ' = "' + stateData[state]["spanish"][key] + '"\n'
    }
    contents_english+='\n+++'
    contents_spanish+='\n+++'
    fs.writeFile(fileName_english, contents_english, cb);
    fs.writeFile(fileName_spanish, contents_spanish, cb);
  }
});

  gulp.task('data', gulp.series( 'state-data'  , function (done) {
    log(
    colors.cyan('state-data'),
    'Copying data from state-data.json into .md files in /content for each state in english and spanish'
  );
  done();
}));
