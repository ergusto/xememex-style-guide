var templater = require("../templater"),
	infoIcon = require("./icons/info.js"),
	githubIcon = require("./icons/github.js");

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
	button = templater.button,
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
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro,principles,methodology]
	});
};

Introduction.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Introduction" }),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "This is the xememex style guide and UI kit."
		}),
		div({
			class: "alert alert--blue box-shadow inline-block padding-vertical margin-bottom",
			children: [
				infoIcon("color-white float-left margin-right-medium fill-white"),
				span({
					text: "This document is a work in progress"
				})
			]
		}),
		h3({ class: "margin-bottom", text: "Repository on Github" }),
		anchor({
			target: "_blank",
			href: "https://github.com/ergusto/xememex-style-guide",
			class: "button button--outline line-height-copy regular margin-bottom box-shadow no-decoration",
			children: [
				githubIcon("color-white float-left margin-right-medium"),
				span({ text: "View on Github" })
			]
		})
	]);
};

Introduction.prototype.principles = function() {
	return fragment([
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Guiding Principles" }),
		ul({
			class: "bulleted-list padding-left-2 margin-vertical",
			children: [
				li({ text: "Write CSS in specificity order." }),
				li({ text: "Keep specificity as flat as possible." })
			]
		}),
	])
};

Introduction.prototype.methodology = function() {
	return fragment([
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Methodolgy" }),
		this.functional(),
		this.oocss()
	]);
};

Introduction.prototype.functional = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "Functional CSS" }),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "We make heavy use of functional CSS concepts. The majority of classes are concerned with a very narrow responsibility. Elements are styled from a combination of these discrete classes wherever possible. This encourages reusability and helps to keep the codebase lean and focused. It results in a very fast iterative process."
		}),
		h4({
			class: "margin-vertical",
			text: "Main principles:"
		}),
		ul({
			class: "bulleted-list padding-left-2 margin-vertical",
			children: [
				li({ text: "These classes generally have a single responsibility." }),
				li({ text: "Their class names describe styling, rather than content." })
			]
		})
	]);
};

Introduction.prototype.oocss = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "OOCSS" }),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "Objects and Components are built and designed as repeated patterns according to OOCSS principles. There's a distinction between Objects and Compoents. Objects are abstract patterns, and mostly structural in nature, while Components are opinionated, styled pieces of DOM. The Media Object is an example of an Object. A Comment could be an example of a Component, which might use the Media Object as a base structure. Or, there could be a base Comment Object themed into separate Components.",
		}),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "Both Objects and Components follow the BEM class naming methodology."
		}),
		h4({
			class: "margin-vertical",
			text: "Main principles:"
		}),
		ul({
			class: "bulleted-list padding-left-2 margin-top",
			children: [
				li({ text: "Separate structure and skin." }),
				li({ text: "Separate container and content." }),
				li({ text: "CSS objects are tight, lean and easy to conceptualise patterns." })
			]
		})
	]);
};

module.exports = Introduction;