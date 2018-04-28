var Page = require("./page.js"),
	FormControls = require("../components/form-controls.js");

var FormControlsPage = new Page("form-controls", function(params) {
	var formControls = new FormControls();
	return formControls.element;
});

module.exports = FormControlsPage;