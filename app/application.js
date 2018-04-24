var templater = require("./templater.js");

var div = templater.div;

function Application() {
	this.element = this.render();
}

Application.prototype.render = function() {
	console.log(templater);
	var element = div({
		text: "Hi there"
	});

	return element;
};

module.exports = Application;