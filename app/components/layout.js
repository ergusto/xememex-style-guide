var templater = require("../templater"),
	Sidebar = require("./sidebar.js");

var div = templater.div;

function Layout() {
	this.element = this.render();
}

Layout.prototype.render = function() {
	var sidebar = new Sidebar();

	div({
		class: "layout-body padding-horizontal",
		ref: { name: "body", context: this }
	});

	return div({
		class: "layout",
		children: [sidebar.element,this.body]
	});
};

module.exports = Layout;