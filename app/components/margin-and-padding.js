var templater = require("../templater");

var div = templater.div,
	br = templater.br,
	ul = templater.ul,
	li = templater.li,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	h4 = templater.h4,
	paragraph = templater.p,
	pre = templater.pre,
	code = templater.code,
	span = templater.span;

function Widths() {
	this.element = this.render();
}

Widths.prototype.render = function() {

	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Margin and padding",
			}),
			paragraph({
				class: "margin-vertical line-height-copy",
				text: "Margin and padding classes follow a simple pattern:"
			}),
			pre({
				class: "preformatted margin-top-medium padding-all-small line-height-copy",
				content: code({ class: "code", text: ".margin-${direction}-${margin-amount}-${breakpoint}" })
			}),
			paragraph({
				class: "margin-vertical line-height-copy",
				children: [
					span({ text: "Padding classes follow the same pattern, with a " }),
					code({ text: "padding" }),
					span({ text: " prefix."})
				]
			}),
			h2({
				class: "margin-vertical padding-bottom border-bottom border-color-grey",
				text: "Examples"
			}),
			h3({
				class: "margin-vertical",
				text: "Padding"
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "padding-all background-color-grey text-align-center inline-block padding-example",
						children: [code({ text: ".padding-all", class: "code regular" })]
					}),
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "padding-all-2 background-color-grey text-align-center inline-block padding-example",
						children: [code({ text: ".padding-all-2", class: "code regular" })]
					}),
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "padding-all-3 background-color-grey text-align-center inline-block padding-example",
						children: [code({ text: ".padding-all-3", class: "code regular" })]
					}),
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "padding-all-4 background-color-grey text-align-center inline-block padding-example",
						children: [code({ text: ".padding-all-4", class: "code regular" })]
					}),
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "padding-all-5 background-color-grey text-align-center inline-block padding-example",
						children: [code({ text: ".padding-all-5", class: "code regular" })]
					}),
				]
			}),
			h3({
				class: "margin-vertical",
				text: "Margin"
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "inline-block background-color-darker-grey",
						children: [
							div({
								class: "margin-all background-color-grey text-align-center",
								children: [code({ text: ".margin-all", class: "code regular" })]
							})
						]
					})
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "inline-block background-color-darker-grey",
						children: [
							div({
								class: "margin-all-2 background-color-grey text-align-center",
								children: [code({ text: ".margin-all-2", class: "code regular" })]
							})
						]
					})
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "inline-block background-color-darker-grey",
						children: [
							div({
								class: "margin-all-3 background-color-grey text-align-center",
								children: [code({ text: ".margin-all-3", class: "code regular" })]
							})
						]
					})
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "inline-block background-color-darker-grey",
						children: [
							div({
								class: "margin-all-4 background-color-grey text-align-center",
								children: [code({ text: ".margin-all-4", class: "code regular" })]
							})
						]
					})
				]
			}),
			div({
				class: "margin-vertical",
				children: [
					div({
						class: "inline-block background-color-darker-grey",
						children: [
							div({
								class: "margin-all-5 background-color-grey text-align-center",
								children: [code({ text: ".margin-all-5", class: "code regular" })]
							})
						]
					})
				]
			}),
		]
	});
};

module.exports = Widths;