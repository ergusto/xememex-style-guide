var templater = require("../templater");

var fragment = templater.fragment,
	div = templater.div,
	button = templater.button,
	h1 = templater.h1,
	h3 = templater.h3,
	paragraph = templater.p,
	pre = templater.pre,
	code = templater.code;

function Buttons() {
	this.element = this.render();
}

Buttons.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Buttons" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "There are a variety of different button objects and styles."
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Default Button" }),
				button({
					class: "button",
					text: "Example button"
				}),		
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button" })
				})
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Small Button" }),
				button({
					class: "button button--small",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--small" })
				})
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Large Button" }),
				button({
					class: "button button--large",
					text: "Example button"
				}),		
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--large" })
				})
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Block Level Button" }),
				button({
					class: "button button--block",
					text: "Example button"
				}),		
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--block" })
				})
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Button Group" }),
				div({
					class: "button-group",
					children: [
						button({
							class: "button",
							text: "Example button"
						}),
						button({
							class: "button",
							text: "Example button"
						}),
						button({
							class: "button",
							text: "Example button"
						}),
					]
				}),		
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button-group .button" })
				})
			]
		}),
		div({
			class: "margin-vertical",
			children: [
				h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Button Themes" }),
				button({
					class: "button button--outline margin-top-medium",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--outline" })
				}),
				button({
					class: "button button--green margin-top-medium",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--green" })
				}),
				button({
					class: "button button--blue margin-top-medium",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--blue" })
				}),
				button({
					class: "button button--red margin-top-medium",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .button--red" })
				}),
				button({
					class: "button box-shadow margin-top-medium",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button .box-shadow" })
				}),
				button({
					disabled: "",
					class: "button button--green margin-top-medium",
					text: "Example button"
				}),
				pre({
					class: "preformatted margin-vertical-medium padding-all-small",
					content: code({ class: "code", text: ".button:disabled" })
				}),
			]
		}),
	]);
};

Buttons.prototype.render = function() {
	var intro = this.intro();

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro]
	});
};

module.exports = Buttons;