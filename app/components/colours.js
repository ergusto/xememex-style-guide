var templater = require("../templater");

var div = templater.div,
	span = templater.span,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	h4 = templater.h4,
	paragraph = templater.p,
	fragment = templater.fragment,
	pre = templater.pre,
	code = templater.code;

var colours = [
	{ name: "green", code: "#393" },
	{ name: "red", code: "#c73434" },
	{ name: "blue", code: "#408fec" },
	{ name: "white", code: "#fff" },
	{ name: "grey", code: "#777" },
	{ name: "light-grey", code: "#ddd" },
	{ name: "lightest-grey", code: "#fcfcfc" },
	{ name: "dark-grey", code: "#ccc" },
	{ name: "darker-grey", code: "#586069" },
	{ name: "light-purple", code: "#f7f7f9" },
	{ name: "silver", code: "#e3e7ef" }
];

function Colours() {
	this.element = this.render();
}

Colours.prototype.colours = function() {
	return div(colours.map(function(color) {
		return div({
			class: "margin-all-small inline-block",
			children: [
				div({
					class: "inline-block padding-all-3 box-shadow border-radius-all background-color-" + color.name
				}),
				paragraph({
					class: "padding-vertical-medium",
					text: color.name
				}),
				code({
					class: "code inline-block padding-bottom-medium",
					text: color.code
				})
			]
		});
	}));
};

Colours.prototype.intro = function() {
	return h1({
		class: "margin-bottom padding-bottom border-bottom border-color-dark-grey",
		text: "Colours"
	});
};

Colours.prototype.uses = function() {
	return fragment([
		h2({ class: "margin-vertical", text: "Uses" }),
		paragraph({
			text: "These colours are used in a variety of different helper classes."
		}),
		h3({ class: "margin-vertical", text: "Color"}),
		pre({
			class: "preformatted margin-vertical-small",
			content: code({ class: "code color-green", text: ".color-green" })
		}),
		pre({
			class: "preformatted margin-vertical-small",
			content: code({ class: "code color-red", text: ".color-red" })
		}),
		pre({
			class: "preformatted margin-vertical-small",
			content: code({ class: "code color-blue", text: ".color-blue" })
		}),
		h3({ class: "margin-vertical", text: "Background Color"}),
		pre({
			class: "preformatted margin-vertical-small background-color-green",
			content: code({ class: "code color-white", text: ".background-color-green" })
		}),
		pre({
			class: "preformatted margin-vertical-small background-color-red",
			content: code({ class: "code color-white", text: ".background-color-red" })
		}),
		pre({
			class: "preformatted margin-vertical-small background-color-blue",
			content: code({ class: "code color-white", text: ".background-color-blue" })
		}),
		h3({ class: "margin-vertical", text: "Border Color"}),
		pre({
			class: "preformatted margin-vertical-small border-all border-color-green",
			content: code({ class: "code", text: ".border-color-green" })
		}),
		pre({
			class: "preformatted margin-vertical-small border-all border-color-red",
			content: code({ class: "code", text: ".border-color-red" })
		}),
		pre({
			class: "preformatted margin-vertical-small border-all border-color-blue",
			content: code({ class: "code", text: ".border-color-blue" })
		}),
	]);
};

Colours.prototype.render = function() {
	var intro = this.intro(),
		colours = this.colours(),
		uses = this.uses();

	return div({
		id: "colours",
		children: [intro,colours,uses],
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-white border-all border-color-dark-grey box-shadow border-radius-all"
	});
};

module.exports = Colours;