var templater = require("../templater");

var div = templater.div,
	h1 = templater.h1;

function NotFound() {
	this.element = this.render();
}

NotFound.prototype.render = function() {

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-dark-grey box-shadow border-radius-all",
		children: [h1({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Not Found" })]
	});
};

module.exports = NotFound;