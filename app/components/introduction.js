var templater = require("../templater");

var div = templater.div,
	paragraph = templater.p,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	h4 = templater.h4,
	ul = templater.ul,
	li = templater.li,
	anchor = templater.a,
	span = templater.span,
	blockquote = templater.blockquote,
	strong = templater.strong,
	code = templater.code,
	fragment = templater.fragment;

function Introduction() {
	this.element = this.render();
}

Introduction.prototype.render = function() {
	var intro = this.intro(),
		principles = this.principles(),
		methodology = this.methodology();

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro,principles,methodology]
	});
};

Introduction.prototype.principles = function() {
	return fragment([
		h2({ class: "margin-bottom", text: "Guiding Principles" }),
		ul({
			class: "bulleted-list padding-left-2 margin-vertical",
			children: [
				li({ text: "Write CSS in specificity order." }),
				li({ text: "Keep specificity as flat as possible." })
			]
		}),
	])

};

Introduction.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Introduction" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "This is the xememex style guide and UI kit."
		})
	]);
};

Introduction.prototype.methodology = function() {
	return fragment([
		h2({ class: "margin-bottom", text: "Methodolgy" }),
		this.functional(),
		this.oocss()
	]);
};

Introduction.prototype.functional = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "Functional CSS" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "We make heavy use of functional CSS concepts. The majority of classes are concerned with a very narrow responsibility. Elements are styled from a combination of these discrete classes wherever possible. This encourages reusability and reduces redundancy, and helps to keep the codebase lean and focused. It results in a very fast iterative process. Most of these classes appear in the 'Trumps and Tools' section of the stylesheet."
		})
	]);
};

Introduction.prototype.oocss = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "OOCSS" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "Components are built and designed as repeated patterns according to OOCSS principles.",
		}),
		h4({
			class: "margin-vertical",
			text: "Main principles:"
		}),
		ul({
			class: "bulleted-list padding-left-2 margin-top",
			children: [
				li({ text: "Separate structure and skin" }),
				li({ text: "Separate container and content" }),
				li({ text: "CSS objects are tight, lean and easy to conceptualise patterns." })
			]
		})
	]);
};

module.exports = Introduction;