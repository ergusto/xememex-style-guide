var templater = require("../templater");

var div = templater.div,
	h1 = templater.h1,
	paragraph = templater.p,
	input = templater.input;

function FormInputs() {
	this.element = this.render();
}

FormInputs.prototype.render = function() {

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Form Inputs",
			}),
			input({
				class: "form-input",
				placeholder: "Example form input"
			})

		]
	});
};

module.exports = FormInputs;