var App = require("./application.js");

module.exports = function(parent) {
	var app = new App();
	if(app.element) parent.appendChild(app.element);
};