var templater = require("../templater");

var fragment = templater.fragment,
	div = templater.div,
	button = templater.button,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	paragraph = templater.p,
	pre = templater.pre,
	code = templater.code;

function Alerts() {
	this.element = this.render();
}

Alerts.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Alerts" }),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "Alerts are for providing contextual feedback to users. For communicating the result of an action, for example."
		}),
		div({
			class: "margin-vertical",
			children: [
				h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Default Alert" }),
				div({
					class: "alert",
					text: "Example Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".alert" })
				}),
			]
		}),
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Styled alerts" }),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom", text: "Green Alert" }),
				div({
					class: "alert alert--green",
					text: "Success Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".alert .alert--green" })
				}),
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom", text: "Blue Alert" }),
				div({
					class: "alert alert--blue",
					text: "Info Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".alert .alert--blue" })
				}),
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom", text: "Red Alert" }),
				div({
					class: "alert alert--red",
					text: "Danger Alert!"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".alert .alert--red" })
				}),
			]
		})
	]);
};

Alerts.prototype.render = function() {
	var intro = this.intro();

	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro]
	});
};

module.exports = Alerts;