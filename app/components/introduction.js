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
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-dark-grey box-shadow border-radius-all",
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
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-dark-grey", text: "Introduction" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "This is the xememex style guide and UI kit. It is the single source of truth for all CSS patterns, components and UI design."
		})
	]);
};

Introduction.prototype.methodology = function() {
	return fragment([
		h2({ class: "margin-bottom", text: "Methodolgy" }),
		this.itcss(),
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

Introduction.prototype.itcss = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "ITCSS" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "We use ITCSS (Inverted Triangle CSS) to give broad structure to our CSS."
		}),
		h4({
			class: "margin-vertical",
			text: "Main principles:"
		}),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "The order of CSS declarations matters. Rules of equal specificity get overridden in the order that they're defined. We start at the widest, most generic level and increase in specificity and precision as we progress through the stylesheet."
		}),
		ul({
			class: "bulleted-list padding-left-2 margin-vertical",
			children: [
				li({ text: "Generic -> Explicit" }),
				li({ text: "Low Specificity -> High Specificity" }),
				li({ text: "Far-Reaching -> Localised" })
			]
		}),
		blockquote({
			class: "margin-all padding-vertical-medium line-height-1p5",
			children: [
				paragraph({
					text: "Ordering our projects according to these key metrics has several benefits. We can begin to share global and far-reaching styles much more effectively and efficiently, we vastly reduce the likelihood of specificity issues, and we write CSS in a logical and progressive order. This means greater extensibility and less redundancy, which in turn means less waste and much smaller file sizes."
				}),
				paragraph({
					class: "margin-top-medium small",
					children: [
						span({ text: "Harry Roberts - "}),
						anchor({
							href: "https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528",
							text: "Manage large CSS projects with ITCSS"
						})
					]
				})
			]
		}),
		h4({
			class: "margin-vertical",
			text: "Overview:"
		}),
		paragraph({ text: "The CSS codebase is structured in the following hierarchy:" }),
		ul({
			class: "bulleted-list padding-left-2 margin-vertical",
			children: [
				li({
					children: [
						strong({ text: "Generic & Reset" }),
						ul(li({ class: "margin-left-2", text: "Global (* selector) rules and resets." }))
					]
				}),
				li({
					children: [
						strong({ text: "Elements" }),
						ul(li({ class: "margin-left-2", text: "Bare, unclassed HTML elements." }))
					]
				}),
				li({
					children: [
						strong({ text: "Objects" }),
						ul(li({ class: "margin-left-2", text: "Non-cosmetic design patterns. i.e. the Media Object." }))
					]
				}),
				li({
					children: [
						strong({ text: "Components" }),
						ul(li({ class: "margin-left-2", text: "Opionionated, styled repeated patterns. i.e. a Button or Comment." }))
					]
				}),
				li({
					children: [
						strong({ text: "Trumps and Tools" }),
						ul(li({
							class: "margin-left-2",
							children: [
								span({ text: "Highest specificity layer. Most explicit and narrowest focus. Includes utility and helper classes, hacks and overrides. Most declarations in this layer will carry " }),
								code({ text: "!important" }),
								span({ text: "." }),
								span({ class: "small", text: " ("}),
								anchor({
									class: "small",
									href: "https://csswizardry.com/2016/05/the-importance-of-important/",
									text: "The Importance of !important: Forcing Immutability in CSS"
								}),
								span({ class: "small", text: ")." })
							]
						}))
					]
				})
			]
		})
	]);
};

module.exports = Introduction;