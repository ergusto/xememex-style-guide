var templater = require("../../app/templater");

var div = templater.div,
	containerClass = "collapse__container",
	collapseOpenClass = "collapse__container--open";

function Collapse(options) {
	options = options || {};
	this.trigger = options.trigger;
	this.content = options.content;
	this.element = this.render();
	this.addEventListeners();
}

Collapse.prototype.addEventListeners = function() {
	var self = this;

	this.trigger.addEventListener("click",function(event) {
		event.preventDefault();
		event.stopPropagation();

		if(self.isOpen()) {
			self.close();
		} else {
			self.open();
		}
	});
};

Collapse.prototype.isOpen = function() {
	return this.element.classList.contains(collapseOpenClass);
};

Collapse.prototype.open = function() {
	this.element.classList.add(collapseOpenClass);
	if(this.height) {
		this.content.style.maxHeight = this.height;
	}
};

Collapse.prototype.close = function() {
	if(!this.height) {
		this.height = this.content.offsetHeight;
	}
	this.element.classList.remove(collapseOpenClass);
	this.content.style.maxHeight = 0;
};

Collapse.prototype.render = function() {
	return div({
		class: containerClass,
		children: [
			this.trigger,
			div({
				ref: { name: "content", context: this },
				class: "collapse__content",
				content: this.content
			})
		]
	});
};

module.exports = Collapse;