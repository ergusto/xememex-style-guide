var Page = require("./page.js"),
	Autocomplete = require("../components/autocomplete.js");

var AutocompletePage = new Page("autocomplete", function(params) {
	var autocomplete = new Autocomplete();
	return autocomplete.element;
});

module.exports = AutocompletePage;