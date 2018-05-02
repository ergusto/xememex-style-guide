var templater = require("../../app/templater");

var div = templater.div,
	dropdownOpenClass = "dropdown__container--open",
	clickEventType = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';

function Dropdown(options) {
	options = options || {};
	this.trigger = options.trigger;
	this.triggeredOnHover = options.triggeredOnHover;
	this.triggeredOnClick = options.triggeredOnClick;
	this.alignLeft = options.alignLeft;
	this.alignRight = options.alignRight;
	this.alignCenter = options.alignCenter;
	this.shiftAnimation = options.shiftAnimation;
	this.content = options.content;
	this.element = this.render();
	this.documentClick = this.documentClick.bind(this);
	this.addEventListeners();
}

Dropdown.prototype.documentClick = function(event) {
	event.stopPropagation();
	if(!this.element.contains(event.target)) {
		this.close();
	}
}

Dropdown.prototype.addEventListeners = function() {
	var self = this;
	if(this.triggeredOnClick) {
		this.trigger.addEventListener(clickEventType,function(event) {
			event.preventDefault();
			event.stopPropagation();

			if(self.isOpen()) {
				self.close();
			} else {
				self.open();
				document.addEventListener(clickEventType,self.documentClick);
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
	document.removeEventListener(clickEventType,this.documentClick);
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

	if(this.shiftAnimation) {
		className += " dropdown__container--shift-animation";
	}

	return div({
		class: className,
		children: [
			this.trigger,
			div({
				class: "dropdown",
				content: this.content
			})
		]
	});
};

module.exports = Dropdown;