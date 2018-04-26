var Page = require("./page.js"),
	Buttons = require("../components/buttons.js");

var ButtonsPage = new Page("buttons", function(params) {
	var buttons = new Buttons();
	return buttons.element;
});

module.exports = ButtonsPage;