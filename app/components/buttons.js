var templater = require("../templater");

var fragment = templater.fragment,
	div = templater.div,
	button = templater.button,
	h1 = templater.h1,
	h3 = templater.h3,
	paragraph = templater.p;

function Buttons() {
	this.element = this.render();
}

Buttons.prototype.intro = function() {
	

	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Buttons" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "There are a variety of different button objects and styles."
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Default Button" }),
				button({
					class: "button",
					text: "Example button"
				})
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Large Button" }),
				button({
					class: "button button--large",
					text: "Example button"
				})
			]
		})
	]);
};

Buttons.prototype.render = function() {
	var intro = this.intro();

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-dark-grey box-shadow border-radius-all",
		children: [intro]
	});
};

module.exports = Buttons;