var templater = require("../templater");

var div = templater.div,
	span = templater.span,
	h2 = templater.h2;

var colorNames = ["green","red"];

function Colors() {
	this.element = this.render();
}

Colors.prototype.render = function() {
	var element = div({ class: "padding-all-2" }),
		title = h2({
			text: "Colors"
		}),
		colors = div({
			children: colorNames.map(function(color) {
				return div({
					class: "padding-all-3 margin-all-2 inline-block background-" + color,
				});
			})
		});

	element.appendChild(title);
	element.appendChild(colors);

	return element;
};

module.exports = Colors;