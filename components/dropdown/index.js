var templater = require("../../app/templater");

var div = templater.div;

function Dropdown(props) {
	props = props || {};
	this.trigger = props.trigger;
	this.triggeredOnHover = props.triggeredOnHover;
	this.triggeredOnClick = props.triggeredOnClick;
	this.alignLeft = props.alignLeft;
	this.alignRight = props.alignRight;
	this.alignCenter = props.alignCenter;
	this.content = props.content;
	this.element = this.render();
	this.addEventListeners();
}

Dropdown.prototype.addEventListeners = function() {
	var self = this;
	if(this.triggeredOnClick) {
		this.trigger.addEventListener("click",function(event) {
			event.preventDefault();

			self.open();

			document.addEventListener("click",function(event) {
				if(!self.element.contains(event.target)) self.close();
			});
		});
	}
};

Dropdown.prototype.open = function() {
	this.element.classList.add("dropdown__container--open");
};

Dropdown.prototype.close = function() {
	this.element.classList.remove("dropdown__container--open");
};

Dropdown.prototype.render = function() {
	var className = "dropdown__container";

	if(this.triggeredOnHover) {
		className += " dropdown__container--shown-on-hover";
	}

	if(this.triggeredOnClick) {
		className += " dropdown__container--shown-on-click";
	}

	if(this.alignLeft) {
		className += " dropdown__container--align-left";
	} else if(this.alignRight) {
		className += " dropdown__container--align-right";
	} else if(this.alignCenter) {
		className += " dropdown__container--align-center";
	}

	return div({
		class: className,
		children: [
			this.trigger,
			div({
				class: "dropdown",
				ref: { name: "dropdown", context: this },
				content: this.content
			})
		]
	});
};

module.exports = Dropdown;