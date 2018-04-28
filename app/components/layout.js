var templater = require("../templater"),
	SiteMenu = require("./site-menu.js");

var div = templater.div;

function Layout() {
	this.element = this.render();
}

Layout.prototype.render = function() {
	var siteMenu = new SiteMenu();

	this.body = div({ class: "layout__body padding-horizontal" });

	return div({
		class: "layout",
		children: [siteMenu.element,this.body]
	});
};

module.exports = Layout;