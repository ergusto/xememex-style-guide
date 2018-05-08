var templater = require("../templater");

var div = templater.div,
	button = templater.button,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	paragraph = templater.p,
	span = templater.span,
	ul = templater.ul,
	li = templater.li;

function Display() {
	this.element = this.render();
}

Display.prototype.render = function() {

	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Display",
			}),
		]
	});
};

module.exports = Display;