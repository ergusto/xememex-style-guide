var templater = require("../../app/templater");

var div = templater.div;

function Dropdown(props) {
	props = props || {};
	this.trigger = props.trigger;
	this.triggeredOnHover = props.triggeredOnHover;
	this.content = props.content;
	this.element = this.render();
	this.addEventListeners();
}

Dropdown.prototype.addEventListeners = function() {
	var self = this;
};

Dropdown.prototype.render = function() {
	var className = "dropdown__container";

	if(this.triggeredOnHover) {
		className += " dropdown__container--on-hover";
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