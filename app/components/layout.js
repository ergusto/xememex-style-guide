var templater = require("../templater"),
	Sidebar = require("./sidebar.js");

var div = templater.div;

function Layout() {
	this.element = this.render();
}

Layout.prototype.render = function() {
	var sidebar = new Sidebar();

	var body = div({
		class: "layout-body padding-horizontal",
		ref: { name: "body", context: this }
	});

	return div({
		class: "layout",
		children: [sidebar.element,body]
	});
};

module.exports = Layout;