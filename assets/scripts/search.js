var $ = require('jquery');
var typeahead = require('typeahead');
var toml = require('toml');

module.exports.init = function init() {
  /* Fetches the state name TOML file from the server for current language,
   *  parses the TOML and initializes the Typeahead with it
   */
  var parse = function parseStates(states) {
    var parsedStates = toml.parse(states);
    var k;
    var terms = [];

    /* eslint-disable */
    /* TODO: either change eslint config or use Object.keys polyfill */
    for (k in parsedStates) {
      if (parsedStates.hasOwnProperty(k)) {
        terms.push(k);
      }
    }
    /* eslint-enable */

    typeahead(document.getElementById('js-user-selection'),
     { source: terms });
  };
  var lang = $('body').data('lang');

  $.get('./files/' + lang + '-states.toml', parse);
};
