var templater = require("../templater"),
	SiteMenu = require("./site-menu.js");

var div = templater.div;

function Layout() {
	this.element = this.render();
}

Layout.prototype.render = function() {
	var siteMenu = new SiteMenu();

	return div({
		class: "layout",
		children: [
			siteMenu.element, 
			div({
				class: "layout__body padding-all-medium padding-horizontal-2-phablet",
				ref: { name: "body", context: this }
			})
		]
	});
};

module.exports = Layout;