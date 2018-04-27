var templater = require("../templater"),
	DropdownComponent = require("../../components/dropdown");

var button = templater.button,
	div = templater.div,
	h1 = templater.h1,
	paragraph = templater.p,
	fragment = templater.fragment;

function Dropdown() {
	this.element = this.render();
}

Dropdown.prototype.intro = function() {
	var trigger = button({
		class: "button box-shadow",
		text: "Hover to show dropdown"
	});

	var dropdown = new DropdownComponent({
		trigger: trigger,
		triggeredOnHover: true,
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Dropdown Content"
				})
			})
		}
	});

	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Dropdown" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "A dropdown component."
		}),
		dropdown.element
	]);
};

Dropdown.prototype.render = function() {
	var intro = this.intro();

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro]
	});
};

module.exports = Dropdown;