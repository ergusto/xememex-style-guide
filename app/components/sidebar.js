var templater = require("../templater"),
	router = require("../router.js");

var div = templater.div,
	ul = templater.ul,
	li = templater.li,
	h3 = templater.h3,
	anchor = templater.a,
	header = templater.header,
	fragment = templater.fragment;

var activeRouteLinkClass = "sidebar-list-link--active";

var pages = [
	{ text: "Introduction", url: "#/", name: "introduction" },
	{ text: "Colours", url: "#/colours", name: "colours" }
];

function Sidebar() {
	this.element = this.render();
	this.addRouteListener();
}

Sidebar.prototype.addRouteListener = function() {
	var self = this;
	router.register(function(name,params) {
		self.addActiveRoute(name);
	});
};

Sidebar.prototype.addActiveRoute = function(name) {
	if(this.sidebarList) {
		var activeRoute = this.sidebarList.querySelector("." + activeRouteLinkClass),
			nextActiveRoute = this.sidebarList.querySelector('a[data-route-name="' + name + '"]');
		if(activeRoute !== nextActiveRoute) {
			if(activeRoute) {
				activeRoute.classList.remove(activeRouteLinkClass);
			}
			nextActiveRoute.classList.add(activeRouteLinkClass);
		}
	}
};

Sidebar.prototype.list = function() {
	this.sidebarList = ul({
		children: pages.map(function(page) {
			return li({
				class: "block border-bottom border-color-dark-grey",
				content: anchor({
					class: "sidebar-list-link block no-decoration color-inherit padding-horizontal padding-vertical-medium",
					href: page.url,
					"data-route-name": page.name,
					text: page.text
				})
			});
		})
	});

	return this.sidebarList;
};

Sidebar.prototype.header = function() {
	return header({
		content: h3({ text: "Xememex" }),
		class: "border-bottom border-color-dark-grey padding-all"
	});
}

Sidebar.prototype.render = function() {
	return div({
		class: "layout-sidebar background-color-white border-right border-color-dark-grey box-shadow",
		children: [this.header(),this.list()]
	});
};

module.exports = Sidebar;