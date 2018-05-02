var Page = require("./page.js"),
	Collapse = require("../components/collapse.js");

var CollapsePage = new Page("collapse", function(params) {
	var collapse = new Collapse();
	return collapse.element;
});

module.exports = CollapsePage;