var templater = require("../templater");

var div = templater.div,
	h1 = templater.h1,
	paragraph = templater.p,
	span = templater.span,
	ul = templater.ul,
	li = templater.li;

function NotFound() {
	this.element = this.render();
}

var mediaQueries = {
	mobile: '0rem',
    tablet: '55rem',
    desktop: '75rem'
};

NotFound.prototype.render = function() {

	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [
			h1({
				class: "margin-bottom padding-bottom border-bottom border-color-grey",
				text: "Media Queries",
			}),
			paragraph({
				class: "margin-top line-height-copy",
				text: "We use a mobile first approach to responsive design. The following breakpoints are used as a general framework, but advise that break points should be based around content and design, and not devices. Create breakpoints when it makes sense for the content: resize your window — when the layout breaks you have found a break point."
			}),
			ul({
				class: "margin-top line-height-copy",
				children: [
					li({
						class: "line-height-copy inline-block width-100 width-25-phablet text-align-center padding-vertical-small",
						children: [
							paragraph({ class: "bold", text: "Mobile" }),
							paragraph({ text: "0rem"})
						]
					}),
					li({
						class: "line-height-copy inline-block width-100 width-25-phablet text-align-center padding-vertical-small",
						children: [
							paragraph({ class: "bold", text: "Phablet" }),
							paragraph({ text: "35rem (560px)"})
						]
					}),
					li({
						class: "line-height-copy inline-block width-100 width-25-phablet text-align-center padding-vertical-small",
						children: [
							paragraph({ class: "bold", text: "Tablet" }),
							paragraph({ text: "55rem (880px)"})
						]
					}),
					li({
						class: "line-height-copy inline-block width-100 width-25-phablet text-align-center padding-vertical-small",
						children: [
							paragraph({ class: "bold", text: "Desktop" }),
							paragraph({ text: "75rem (1200px)"})
						]
					}),
				]
			}),
		]
	});
};

module.exports = NotFound;