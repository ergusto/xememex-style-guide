var templater = require("../templater");

var div = templater.div,
	h1 = templater.h1,
	paragraph = templater.p;

function FormControls() {
	this.element = this.render();
}

FormControls.prototype.render = function() {

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Form Controls",
			}),
			paragraph({
				class: "margin-top line-height-1p5",
				text: "Form Controls!"
			})
		]
	});
};

module.exports = FormControls;