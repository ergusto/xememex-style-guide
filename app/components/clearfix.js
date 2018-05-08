var templater = require("../templater");

var div = templater.div,
	button = templater.button,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	pre = templater.pre,
	code = templater.code,
	paragraph = templater.p,
	span = templater.span,
	ul = templater.ul,
	li = templater.li;

function Clearfix() {
	this.element = this.render();
}

Clearfix.prototype.render = function() {

	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Clearfix",
			}),
			div({
				class: "margin-top line-height-copy",
				children: [
					span({ text: "Prevent a parent object's " }),
					code({ class: "code", text: "content area" }),
					span({ text: " from collapsing when it contains only floated children." }),
				]
			}),
			paragraph({
				class: "margin-top line-height-copy",
				text: "In the examples below, the light grey areas show padding, while the dark grey areas are floated children of the parent element."
			}),
			h2({
				class: "margin-vertical padding-bottom border-bottom border-color-grey",
				text: "Demonstration"
			}),
			h3({
				class: "margin-vertical",
				text: "Without clearfix:"
			}),
			div({
				class: "clearfix",
				content: div({
					class: "background-color-light-grey padding-all",
					children: [
						div({
							class: "padding-all-2 float-left inline-block background-color-dark-grey"
						}),
						div({
							class: "padding-all-2 float-left inline-block background-color-dark-grey margin-left"
						}),
						div({
							class: "padding-all-2 float-left inline-block background-color-dark-grey margin-left"
						})
					]
				})
			}),
			h3({
				class: "margin-vertical",
				text: "With clearfix:"
			}),
			div({
				class: "background-color-light-grey padding-all clearfix",
				children: [
					div({
						class: "padding-all-2 float-left inline-block background-color-dark-grey"
					}),
					div({
						class: "padding-all-2 float-left inline-block background-color-dark-grey margin-left"
					}),
					div({
						class: "padding-all-2 float-left inline-block background-color-dark-grey margin-left"
					})
				]
			}),
			h2({
				class: "margin-vertical padding-bottom border-bottom border-color-grey",
				text: "Usage"
			}),
			pre({
				class: "preformatted margin-vertical-medium padding-all-small",
				content: code({ class: "code", text: ".clearfix" })
			}),
		]
	});
};

module.exports = Clearfix;