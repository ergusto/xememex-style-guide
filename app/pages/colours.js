var Page = require("./page.js"),
	Colours = require("../components/colours.js");

var ColoursPage = new Page("colours", function(params) {
	var colours = new Colours();
	return colours.element;
});

module.exports = ColoursPage;