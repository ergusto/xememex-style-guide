var Page = require("./page.js"),
	Display = require("../components/display.js");

var DisplayPage = new Page("display", function(params) {
	var display = new Display();
	return display.element;
});

module.exports = DisplayPage;