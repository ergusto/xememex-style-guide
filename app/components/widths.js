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
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Widths and Max-Widths",
			}),
			paragraph({
				class: "margin-top line-height-copy",
				text: "Width and max width classes follow a simple pattern:"
			}),
			pre({
				class: "preformatted margin-top-medium padding-all-small line-height-copy",
				content: code({ class: "code", text: ".width-${width-amount}-${breakpoint}" })
			}),
			h2({
				class: "margin-vertical padding-bottom border-bottom border-color-grey",
				text: "Examples"
			}),
			div({
				class: "clearfix",
				children: [
					div({
						class: "width-100 width-33-tablet padding-vertical-3 background-color-grey float-left text-align-center",
						children: [code({ text: ".width-100 .width-33-tablet", class: "code color-white regular" })]
					}),
					div({
						class: "width-100 width-33-tablet padding-vertical-3 background-color-dark-grey float-left text-align-center",
						children: [code({ text: ".width-100 .width-33-tablet", class: "code color-white regular" })]
					}),
					div({
						class: "width-100 width-33-tablet padding-vertical-3 background-color-darker-grey float-left text-align-center",
						children: [code({ text: ".width-100 .width-33-tablet", class: "code color-white regular" })]
					})
				]
			}),
			h2({
				class: "margin-vertical padding-bottom border-bottom border-color-grey",
				text: "Classes"
			}),
			div({
				class: "clearfix",
				children: [
					div({
						class: "float-left width-100 width-50-tablet inline-block",
						children: [
							h3({ class: "margin-bottom", text: "Percentage based widths" }),
							div({
								class: "float-left width-50 inline-block",
								children: [
									h4({ class: "margin-bottom-small", text: "Class" }),
									code({ class: "code line-height-copy", text: ".width-0" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-10" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-20" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-25" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-30" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-33" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-40" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-50" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-60" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-66" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-70" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-75" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-80" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-90" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-100" }),
									br(),
								]
							}),
							div({
								class: "float-left width-50 inline-block",
								children: [
									h4({ class: "margin-bottom-small", text: "Value" }),
									code({ class: "code line-height-copy", text: "0%" }),
									br(),
									code({ class: "code line-height-copy", text: "10%" }),
									br(),
									code({ class: "code line-height-copy", text: "20%" }),
									br(),
									code({ class: "code line-height-copy", text: "25%" }),
									br(),
									code({ class: "code line-height-copy", text: "30%" }),
									br(),
									code({ class: "code line-height-copy", text: "33%" }),
									br(),
									code({ class: "code line-height-copy", text: "40%" }),
									br(),
									code({ class: "code line-height-copy", text: "50%" }),
									br(),
									code({ class: "code line-height-copy", text: "60%" }),
									br(),
									code({ class: "code line-height-copy", text: "66%" }),
									br(),
									code({ class: "code line-height-copy", text: "70%" }),
									br(),
									code({ class: "code line-height-copy", text: "75%" }),
									br(),
									code({ class: "code line-height-copy", text: "80%" }),
									br(),
									code({ class: "code line-height-copy", text: "90%" }),
									br(),
									code({ class: "code line-height-copy", text: "100%" }),
									br(),
								]
							})
						]
					}),
					div({
						class: "float-left width-100 width-50-tablet inline-block",
						children: [
							h3({ class: "margin-bottom", text: "Rem based widths" }),
							div({
								class: "float-left width-50 inline-block",
								children: [
									h4({ class: "margin-bottom-small", text: "Class" }),
									code({ class: "code line-height-copy", text: ".width-1" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-2" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-3" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-4" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-5" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-6" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-7" }),
									br(),
									code({ class: "code line-height-copy", text: ".width-8" }),
								]
							}),
							div({
								class: "float-left width-50 inline-block",
								children: [
									h4({ text: "Value" }),
									code({ class: "code line-height-copy", text: "1 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "2 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "4 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "8 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "16 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "32 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "64 rem" }),
									br(),
									code({ class: "code line-height-copy", text: "128 rem" }),
								]
							}),
						]
					})
				]
			}),
		]
	});
};

module.exports = Widths;