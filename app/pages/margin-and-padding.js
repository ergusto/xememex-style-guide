var Page = require("./page.js"),
	MarginAndPadding = require("../components/margin-and-padding.js");

var MarginAndPaddingPage = new Page("margin-and-padding", function(params) {
	var marginAndPadding = new MarginAndPadding();
	return marginAndPadding.element;
});

module.exports = MarginAndPaddingPage;