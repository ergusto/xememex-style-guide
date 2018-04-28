var templater = require("../templater"),
	DropdownComponent = require("../../components/dropdown");

var button = templater.button,
	div = templater.div,
	h1 = templater.h1,
	h3 = templater.h3,
	pre = templater.pre,
	code = templater.code,
	span = templater.span,
	paragraph = templater.p,
	fragment = templater.fragment;

function Dropdown() {
	this.element = this.render();
}

Dropdown.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Dropdown" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "A versatile dropdown component."
		})
	]);
};

Dropdown.prototype.onHover = function() {
	var trigger = button({
		class: "button box-shadow",
		text: "Hover to show dropdown"
	});

	var dropdown = new DropdownComponent({
		trigger: trigger,
		triggeredOnHover: true,
		alignLeft: true,
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Dropdown content"
				})
			})
		}
	});


	return div({
		class: "margin-vertical",
		children: [
			h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Dropdown On Hover" }),
			dropdown.element,
			pre({
				class: "preformatted margin-vertical-medium padding-all-small",
				content: code({ class: "code", text: ".dropdown__container.dropdown__container--align-left.dropdown__container--shown-on-hover .dropdown" })
			}),
			paragraph({
				class: "margin-vertical-medium",
				children: [
					span({
						text: "Hovering over any element contained within the "
					}),
					code({
						class: "code",
						text: ".dropdown__container"
					}),
					span({
						text: " will trigger the dropdown."
					})
				]
			})
		]
	});
};

Dropdown.prototype.onHoverCentered = function() {
	var trigger = button({
		class: "button box-shadow",
		text: "Hover to show dropdown"
	});

	var dropdown = new DropdownComponent({
		trigger: trigger,
		triggeredOnHover: true,
		alignCenter: true,
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Dropdown content centered"
				})
			})
		}
	});


	return div({
		class: "margin-vertical",
		children: [
			h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Centered dropdown" }),
			dropdown.element,
			pre({
				class: "preformatted margin-vertical-medium padding-all-small",
				content: code({ class: "code", text: ".dropdown__container.dropdown__container--align-center .dropdown" })
			})
		]
	});
};

Dropdown.prototype.onHoverAlignRight = function() {
	var trigger = button({
		class: "button box-shadow",
		text: "Hover to show dropdown"
	});

	var dropdown = new DropdownComponent({
		trigger: trigger,
		triggeredOnHover: true,
		alignRight: true,
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Aligned right dropdown content"
				})
			})
		}
	});


	return div({
		class: "margin-vertical",
		children: [
			h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Aligned right dropdown" }),
			dropdown.element,
			pre({
				class: "preformatted margin-vertical-medium padding-all-small",
				content: code({ class: "code", text: ".dropdown__container.dropdown__container--align-right .dropdown" })
			})
		]
	});
};

Dropdown.prototype.javascript = function() {
	var trigger = button({
		class: "button box-shadow",
		text: "Click to show dropdown"
	});

	var dropdown = new DropdownComponent({
		trigger: trigger,
		triggeredOnClick: true,
		alignLeft: true,
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Dropdown content shown on click"
				})
			})
		}
	});


	return div({
		class: "margin-vertical",
		children: [
			h3({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Javascript triggered dropdown" }),
			dropdown.element,
			pre({
				class: "preformatted margin-vertical-medium padding-all-small",
				content: code({ class: "code", text: ".dropdown__container.dropdown__container--shown-on-click .dropdown" })
			}),
			paragraph({
				class: "margin-top",
				children: [
					span({
						text: "Add and remove the "
					}),
					code({
						class: "code",
						text: ".dropdown__container--open"
					}),
					span({
						text: " class to the container element with Javascript."
					})
				]
			})
		]
	});
};

Dropdown.prototype.render = function() {
	var intro = this.intro(),
		onHover = this.onHover(),
		onHoverCentered = this.onHoverCentered(),
		onHoverAlignRight = this.onHoverAlignRight(),
		javascript = this.javascript();

	return div({
		class: "max-width-5 centred padding-all-2 margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro,onHover,onHoverCentered,onHoverAlignRight,javascript]
	});
};

module.exports = Dropdown;