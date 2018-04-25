var App = require("./components/application.js");

require("typeface-assistant");
require("./style.css");
require("./style-guide.css");

module.exports = function(parent) {
	var app = new App();
	parent.appendChild(app.element);
};