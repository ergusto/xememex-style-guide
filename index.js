var app = require("./app");

document.addEventListener("DOMContentLoaded", function() {
	var appNode = document.querySelector("#app");
	app(appNode);
});