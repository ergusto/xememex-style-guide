var Page = require("./page.js"),
	FormInputs = require("../components/form-inputs.js");

var FormInputsPage = new Page("form-inputs", function(params) {
	var formInputs = new FormInputs();
	return formInputs.element;
});

module.exports = FormInputsPage;