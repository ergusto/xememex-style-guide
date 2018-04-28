var templater = require("../../app/templater");

var div = templater.div,
	dropdownOpenClass = "dropdown__container--open";

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
	this.documentClick = this.documentClick.bind(this);
	this.addEventListeners();
}

Dropdown.prototype.documentClick = function(event) {
	if(!this.element.contains(event.target)) {
		this.close();
	}
}

Dropdown.prototype.addEventListeners = function() {
	var self = this;
	if(this.triggeredOnClick) {
		this.trigger.addEventListener("click",function(event) {
			event.preventDefault();

			if(self.isOpen()) {
				self.close();
			} else {
				self.open();
				document.addEventListener("click",self.documentClick);
			}
		});
	}
};

Dropdown.prototype.isOpen = function() {
	return this.element.classList.contains(dropdownOpenClass);
};

Dropdown.prototype.open = function() {
	this.element.classList.add(dropdownOpenClass);
};

Dropdown.prototype.close = function() {
	this.element.classList.remove(dropdownOpenClass);
	document.removeEventListener("click",this.documentClick);
};

Dropdown.prototype.render = function() {
	var className = "dropdown__container";

	if(this.triggeredOnHover) {
		className += " dropdown__container--shown-on-hover";
	} else if(this.triggeredOnClick) {
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