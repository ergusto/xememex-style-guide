var Page = require("./page.js"),
	Colors = require("../components/colors.js");

var ColorsPage = new Page("colors", function(params) {
	var colors = new Colors();
	return colors.element;
});

module.exports = ColorsPage;