var templater = require("../templater");

var div = templater.div,
	fieldset = templater.fieldset,
	label = templater.label,
	h1 = templater.h1,
	paragraph = templater.p,
	input = templater.input;

function FormInputs() {
	this.element = this.render();
}

FormInputs.prototype.render = function() {

	return div({
		class: "max-width-5 centered padding-all padding-all-2-mobile margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Form Inputs",
			}),
			fieldset({
				children: [
					label({
						class: "form-label",
						text: "Example label"
					}),
					input({
						class: "form-input",
						placeholder: "Example form input"
					})
				]
			})
		]
	});
};

module.exports = FormInputs;