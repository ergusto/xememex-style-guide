var templater = require("../templater"),
	Colors = require("./colors.js"),
	Introduction = require("./introduction.js");

var fragment = templater.fragment;

function Application() {
	this.element = this.render();
}

Application.prototype.render = function() {
	this.introduction = new Introduction();
	this.colors = new Colors();

	var element = fragment();

	element.appendChild(this.introduction.element);
	element.appendChild(this.colors.element);

	return element;
};

module.exports = Application;	