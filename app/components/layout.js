var templater = require("../templater"),
	Sidebar = require("./sidebar.js");

var div = templater.div;

function Layout() {
	this.element = this.render();
}

Layout.prototype.render = function() {
	var sidebar = new Sidebar();

	this.body = div({ class: "layout-body padding-horizontal" });

	return div({
		class: "layout",
		children: [sidebar.element,this.body]
	});
};

module.exports = Layout;