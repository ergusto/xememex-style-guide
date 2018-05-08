var app = require("./app");

document.addEventListener("DOMContentLoaded", function() {
	if (!('ontouchstart' in document.documentElement)) {
		document.documentElement.classList.add('no-touch');
	}

	var appNode = document.querySelector("#app");
	app(appNode);
});

module.exports = function() { console.log('lol') }
exports.thing = 'haha'

console.log(module.exports);
console.log(exports);

console.log(module)