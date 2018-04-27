var templater = require("../templater");

var fragment = templater.fragment,
	div = templater.div,
	button = templater.button,
	h1 = templater.h1,
	h3 = templater.h3,
	paragraph = templater.p,
	pre = templater.pre,
	code = templater.code;

function Alerts() {
	this.element = this.render();
}

Alerts.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Alerts" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "Alerts are for providing contextual feedback to users. For communicating the result of an action, for example."
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Default Alert" }),
				div({
					class: "alert",
					text: "Example Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-small padding-all-small",
					content: code({ class: "code", text: ".alert" })
				}),
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Green Alert" }),
				div({
					class: "alert alert--green",
					text: "Example Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-small padding-all-small",
					content: code({ class: "code", text: ".alert .alert--green" })
				}),
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Blue Alert" }),
				div({
					class: "alert alert--blue",
					text: "Example Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-small padding-all-small",
					content: code({ class: "code", text: ".alert .alert--blue" })
				}),
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Red Alert" }),
				div({
					class: "alert alert--red",
					text: "Example Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-small padding-all-small",
					content: code({ class: "code", text: ".alert .alert--red" })
				}),
			]
		})
	]);
};

Alerts.prototype.render = function() {
	var intro = this.intro();

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-dark-grey box-shadow border-radius-all",
		children: [intro]
	});
};

module.exports = Alerts;