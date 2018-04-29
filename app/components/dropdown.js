var templater = require("../templater"),
	DropdownComponent = require("../../components/dropdown");

var button = templater.button,
	div = templater.div,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	pre = templater.pre,
	code = templater.code,
	span = templater.span,
	paragraph = templater.p,
	fragment = templater.fragment,
	br = templater.br;

function Dropdown() {
	this.element = this.render();
}

Dropdown.prototype.intro = function() {
	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Dropdown" }),
		paragraph({
			class: "margin-vertical line-height-1p5",
			text: "A versatile dropdown. No cosmetic styling is applied to these classes."
		}),
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Base HTML structure" }),
		pre({
			class: "preformatted margin-vertical padding-all-small",
			children: [
				code({ class: "code", text: '<div class="dropdown__container">'}),
				br(),
				code({ class: "code", text: "    <button>Trigger</button>"}),
				br(),
				code({ class: "code", text: '    <div class="dropdown">'}),
				br(),
				code({ class: "code", text: '        * Dropdown Content *'}),
				br(),
				code({ class: "code", text: "    </div>"}),
				br(),
				code({ class: "code", text: "</div>"})
			]
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
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Dropdown content"
				})
			})
		}
	});


	return fragment([
		h3({ class: "margin-vertical", text: "Dropdown On Hover" }),
		dropdown.element,
		paragraph({
			class: "margin-vertical", 
			children: [
				span({ text: "Add a " }),
				code({ class: "code", text: ".dropdown__container--shown-on-hover" }),	
				span({ text: " class to the "}),
				code({ class: "code", text: ".dropdown__container" }),
				span({ text: " element to show the dropdown on hover." }),
			]
		}),
		paragraph({
			class: "margin-vertical",
			children: [
				span({ text: "Hovering over any element contained within " }),
				code({ class: "code", text: ".dropdown__container" }),
				span({ text: " will act as a trigger."})
			]
		}),
		paragraph({
			class: "line-height-1p5 alert alert--blue padding-vertical-small padding-horizontal-medium inline-block small",
			text: "Note: hover effects may not work properly on mobile devices."
		})
	]);
};

Dropdown.prototype.onHoverAlignLeft = function() {
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
					text: "Aligned left dropdown content"
				})
			})
		}
	});


	return fragment([
		h3({ class: "margin-vertical", text: "Aligned left dropdown" }),
		dropdown.element,
		pre({
			class: "preformatted margin-vertical-medium padding-all-small",
			content: code({ class: "code", text: ".dropdown__container--align-left" })
		})
	]);
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
					text: "Centered dropdown content"
				})
			})
		}
	});


	return fragment([
		h3({ class: "margin-vertical", text: "Centered dropdown" }),
		dropdown.element,
		pre({
			class: "preformatted margin-vertical-medium padding-all-small",
			content: code({ class: "code", text: ".dropdown__container--align-center" })
		})
	]);
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


	return fragment([
		h3({ class: "margin-vertical", text: "Aligned right dropdown" }),
		dropdown.element,
		pre({
			class: "preformatted margin-vertical-medium padding-all-small",
			content: code({ class: "code", text: ".dropdown__container--align-right" })
		})
	]);
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


	return fragment([
		h3({ class: "margin-vertical", text: "Javascript triggered dropdown" }),
		dropdown.element,
		pre({
			class: "preformatted margin-vertical-medium padding-all-small",
			content: code({ class: "code", text: ".dropdown__container--shown-on-click" })
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
	]);
};

Dropdown.prototype.shiftAnimation = function() {
	var trigger = button({
		class: "button box-shadow",
		text: "Hover to show dropdown"
	});

	var dropdown = new DropdownComponent({
		trigger: trigger,
		triggeredOnHover: true,
		alignLeft: true,
		shiftAnimation: true,
		content: function() {
			return div({
				class: "padding-all margin-top-small background-color-white border-radius-all border-all border-color-grey inline-block box-shadow",
				content: paragraph({
					text: "Dropdown content with shift animation"
				})
			})
		}
	});


	return fragment([
		h3({ class: "margin-vertical", text: "Dropdown shift animation" }),
		dropdown.element,
		pre({
			class: "preformatted margin-vertical-medium padding-all-small",
			content: code({ class: "code", text: ".dropdown__container--shift-animation" })
		})
	]);
};

Dropdown.prototype.options = function() {
	var onHover = this.onHover(),
		onHoverAlignLeft = this.onHoverAlignLeft(),
		onHoverCentered = this.onHoverCentered(),
		onHoverAlignRight = this.onHoverAlignRight(),
		javascript = this.javascript(),
		shiftAnimation = this.shiftAnimation();

	return fragment([
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Options" }),
		onHover,onHoverAlignLeft,onHoverCentered,onHoverAlignRight,javascript,shiftAnimation
	]);
};

Dropdown.prototype.render = function() {
	var intro = this.intro(),
		options = this.options();

	return div({
		class: "max-width-5 centered padding-all padding-all-2-mobile margin-vertical-2 border background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [intro,options]
	});
};

module.exports = Dropdown;