var Page = require("./page.js"),
	Clearfix = require("../components/clearfix.js");

var ClearfixPage = new Page("clearfix", function(params) {
	var clearfix = new Clearfix();
	return clearfix.element;
});

module.exports = ClearfixPage;