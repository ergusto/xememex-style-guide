var templater = require("../templater");

var div = templater.div,
	fieldset = templater.fieldset,
	label = templater.label,
	h1 = templater.h1,
	h2 = templater.h2,
	paragraph = templater.p,
	pre = templater.pre,
	code = templater.code,
	br = templater.br,
	input = templater.input;

function FormInputs() {
	this.element = this.render();
}

FormInputs.prototype.render = function() {

	return div({
		class: "max-width-7 centered padding-all padding-all-2-mobile margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Form Inputs",
			}),
			fieldset({
				children: [
					label({
						class: "field-label",
						text: "Example label"
					}),
					input({
						class: "field-input",
						placeholder: "Example form input"
					})
				]
			}),
			h2({ class: "margin-vertical padding-bottom border-bottom border-color-grey", text: "Base HTML structure" }),
			pre({
				class: "preformatted margin-vertical padding-all-small",
				children: [
					code({ class: "code", text: '<fieldset>'}),
					br(),
					code({ class: "code", text: '    <label class="field-label">Example Label</label>'}),
					br(),
					code({ class: "code", text: '    <input class="field-input" placeholder="Example form input">'}),
					br(),
					code({ class: "code", text: "</fieldset>"})
				]
			})
		]
	});
};

module.exports = FormInputs;