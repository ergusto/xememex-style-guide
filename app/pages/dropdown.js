var Page = require("./page.js"),
	Dropdown = require("../components/dropdown.js");

var DropdownPage = new Page("dropdown", function(params) {
	var dropdown = new Dropdown();
	return dropdown.element;
});

module.exports = DropdownPage;