var templater = require("../templater");

var div = templater.div,
	button = templater.button,
	fieldset = templater.fieldset,
	label = templater.label,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	paragraph = templater.p,
	pre = templater.pre,
	code = templater.code,
	br = templater.br,
	form = templater.form,
	input = templater.input,
	fragment = templater.fragment;

function FormInputs() {
	this.element = this.render();
}

FormInputs.prototype.render = function() {

	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Form Inputs",
			}),
			paragraph({
				class: "margin-vertical line-height-copy",
				text: "A variety of form inputs and styles."
			}),
			h2({ class: "margin-vertical padding-bottom border-bottom border-color-grey", text: "Default input" }),
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
			h3({ class: "margin-vertical", text: "HTML structure" }),
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
			}),
			h3({ class: "margin-vertical", text: "Styles" }),
			input({
				class: "field-input box-shadow",
				placeholder: ".box-shadow"
			}),
			this.inlineForm()
		]
	});
};

FormInputs.prototype.inlineForm = function() {
	return fragment([
		h2({ class: "margin-vertical padding-bottom border-bottom border-color-grey", text: "Inline form" }),
		form({
			class: "inline-form",
			children: [
				input({ class: "field-input", placeholder: "Inline form" }),
				button({ class: "button button--blue", text: "Submit" })
			]
		}),
		h3({ class: "margin-vertical", text: "HTML structure" }),
		pre({
			class: "preformatted margin-vertical padding-all-small",
			children: [
				code({ class: "code", text: '<form class="inline-form">'}),
				br(),
				code({ class: "code", text: '    <input class="field-input" placeholder="Inline form">'}),
				br(),
				code({ class: "code", text: '    <button class="button">Submit</button>'}),
				br(),
				code({ class: "code", text: "</form>"})
			]
		}),
	]);
}

module.exports = FormInputs;