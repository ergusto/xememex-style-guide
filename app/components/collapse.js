var templater = require("../templater"),
	CollapseComponent = require("../../components/collapse");

var div = templater.div,
	button = templater.button,
	fieldset = templater.fieldset,
	label = templater.label,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	paragraph = templater.p,
	span = templater.span,
	pre = templater.pre,
	code = templater.code,
	br = templater.br,
	form = templater.form,
	input = templater.input,
	fragment = templater.fragment;


function Collapse() {
	this.element = this.render();
}

Collapse.prototype.intro = function() {
	var trigger = button({
		class: "button",
		text: "Click to toggle content"
	});

	var collapse = new CollapseComponent({
		trigger: trigger,
		content: function() {
			return div({
				class: "padding-all-4 margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Collapse content"
				})
			})
		}
	});

	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Collapse" }),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "A generic collapse pattern. No cosmetic styling is applied to these classes."
		}),
		paragraph({
			class: "margin-vertical line-height-copy",
			children: [
				span({ text: "Add a " }),
				code({ class: "code", text: ".collapse__container--open" }),	
				span({ text: " class to the "}),
				code({ class: "code", text: ".collapse__container" }),
				span({ text: " element with Javascript to show the collapsed content." }),
			]
		}),
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Base HTML structure" }),
		pre({
			class: "preformatted margin-vertical padding-all-small line-height-copy",
			children: [
				code({ class: "code", text: '<div class="collapse__container">'}),
				br(),
				code({ class: "code", text: "    <button>Click to toggle content</button>"}),
				br(),
				code({ class: "code", text: '    <div class="collapse__content">'}),
				br(),
				code({ class: "code", text: '        * Collapse Content *'}),
				br(),
				code({ class: "code", text: "    </div>"}),
				br(),
				code({ class: "code", text: "</div>"})
			]
		}),
		collapse.element
	]);
};

Collapse.prototype.render = function() {
	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [this.intro()]
	});
};

module.exports = Collapse;