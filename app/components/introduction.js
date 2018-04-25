var templater = require("../templater");

var div = templater.div,
	paragraph = templater.p,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	ul = templater.ul,
	li = templater.li,
	anchor = templater.a,
	blockquote = templater.blockquote,
	strong = templater.strong,
	fragment = templater.fragment;

var links = [
	{
		text: "BEM: Naming conventions for OOCSS",
		url: "http://getbem.com/introduction/"
	},
	{
		text: "Harry Roberts introduces ITCSS",
		url: "https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528"
	}
];

function Introduction() {
	this.element = this.render();
}

Introduction.prototype.render = function() {
	var intro = this.intro(),
		methodology = this.methodology();

	return div({
		class: "padding-all-2",
		children: [intro,methodology]
	});
};

Introduction.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom", text: "Introduction" }),
		paragraph({
			class: "margin-vertical",
			text: "This is the xememex style guide and UI kit. It's the single source of truth for all CSS patterns, components and UI design."
		})
	]);
};

Introduction.prototype.methodology = function() {
	var invertedTriangle = this.invertedTriangle(),
		oocss = this.oocss();

	return fragment([
		h2({ class: "margin-bottom", text: "Methodolgy" }),
		paragraph({
			class: "margin-vertical",
			text: "We use ITCSS to structure our CSS. We use OOCSS and BEM naming methodology for our component CSS classes."
		}),
		invertedTriangle,
		oocss
	]);
};

Introduction.prototype.oocss = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "OOCSS" }),
		paragraph({
			class: "margin-vertical",
			text: "We use OOCSS (Object Oriented CSS) to structure our CSS components."
		}),
		blockquote({
			class: "margin-all",
			content: anchor({
				href: "https://github.com/stubbornella/oocss/wiki",
				text: "https://github.com/stubbornella/oocss/wiki"
			})
		}),
		paragraph({
			class: "margin-vertical",
			text: "Overview:"
		}),
		ul({
			class: "bulleted-list padding-left-2",
			children: [
				li(paragraph({
						class: "margin-vertical",
						text: "We structure CSS into tight, lean and easy to conceptualise patterns."
				})),
				li(paragraph({
					class: "margin-vertical",
					text: "A CSS “object” is a repeating visual pattern, that can be abstracted into an independent snippet of HTML, CSS, and possibly JavaScript. That object can then be reused throughout a site."
				})),
			]
		}),
		paragraph({
			class: "margin-vertical",
			text: "Main principles:"
		}),
		ul()
	]);
};

Introduction.prototype.invertedTriangle = function() {
	return fragment([
		h3({ class: "margin-bottom", text: "ITCSS" }),
		paragraph({
			class: "margin-vertical",
			text: "We use ITCSS (Inverted Triangle CSS) to structure our CSS."
		}),
		blockquote({
			class: "margin-all",
			content: anchor({
				href: "https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528",
				text: "https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528"
			})
		}),
		paragraph({
			class: "margin-vertical",
			text: "Overview:"
		}),
		ul({
			class: "bulleted-list padding-left-2",
			children: [
				li([
					paragraph({ text: "We start at the widest, most generic level and increase in specificity and explicitness." }),
					ul([
						li({ class: "margin-left-2", text: "Generic -> Explicit" }),
						li({ class: "margin-left-2", text: "Low Specificity -> High Specificity" }),
						li({ class: "margin-left-2", text: "Far-Reaching -> Localised" })
					])
				]),
				li([
					paragraph({ text: "The codebase is structured in the following hierarchy:" }),
					ul([
						li({
							class: "margin-left-2",
							children: [
								strong({ text: "Generic & reset" }),
								ul(li({ class: "margin-left-2", text: "Global (* selector) rules and resets." }))
							]
						}),
						li({
							class: "margin-left-2",
							children: [
								strong({ text: "Elements" }),
								ul(li({ class: "margin-left-2", text: "Bare, unclassed HTML elements." }))
							]
						}),
						li({
							class: "margin-left-2",
							children: [
								strong({ text: "Objects" }),
								ul(li({ class: "margin-left-2", text: "Non-cosmetic design patterns. i.e. the Media Object." }))
							]
						}),
						li({
							class: "margin-left-2",
							children: [
								strong({ text: "Components" }),
								ul(li({ class: "margin-left-2", text: "Opinionated, styled pieces of the DOM." }))
							]
						}),
						li({
							class: "margin-left-2",
							children: [
								strong({ text: "Trumps and tools" }),
								ul(li({ class: "margin-left-2", text: "Highest specificity layer. Most explicit and narrowest focus. Includes utility and helper classes, hacks and overrides. A lot of the declarations in this layer will carry !important." }))
							]
						}),
					])
				])
			],
		})
	]);
};

module.exports = Introduction;