var Page = require("./page.js"),
	Widths = require("../components/widths.js");

var WidthsPage = new Page("widths", function(params) {
	var widths = new Widths();
	return widths.element;
});

module.exports = WidthsPage;