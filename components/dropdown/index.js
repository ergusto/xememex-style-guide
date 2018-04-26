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
	if(this.trigger) {
		if(this.triggeredOnHover) {
			this.trigger.addEventListener("mouseover", function() {
				self.body.classList.add("dropdown--open");
			});
			this.trigger.addEventListener("mouseout", function() {
				self.body.classList.remove("dropdown--open");
			});
		}
	}
};

Dropdown.prototype.render = function() {
	this.body = div({
		content: this.content
	});

	return div({
		class: "dropdown-container",
		content: this.body
	});
};

module.exports = Dropdown;