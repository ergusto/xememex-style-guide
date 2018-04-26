var templater = require("../templater"),
	router = require("../router.js");

var div = templater.div,
	ul = templater.ul,
	li = templater.li,
	h3 = templater.h3,
	h4 = templater.h4,
	anchor = templater.a,
	header = templater.header,
	fragment = templater.fragment;

var activeRouteLinkClass = "sidebar-list-link--active";

var items = [
	{ text: "Introduction", url: "#/", routeName: "introduction" },
	{ text: "Colours", url: "#/colours", routeName: "colours" }
];

function Sidebar() {
	this.element = this.render();
	this.addRouteListener();
}

Sidebar.prototype.addRouteListener = function() {
	var self = this;
	router.register(function(name) {
		self.addActiveRoute(name);
	});
};

Sidebar.prototype.addActiveRoute = function(name) {
	if(this.sidebarList) {
		var activeRoute = this.sidebarList.querySelector("." + activeRouteLinkClass),
			nextActiveRoute = this.sidebarList.querySelector('a[data-route-name="' + name + '"]');
		if(activeRoute) {
			activeRoute.classList.remove(activeRouteLinkClass);
		}
		if(nextActiveRoute) {
			nextActiveRoute.classList.add(activeRouteLinkClass);
		}
	}
};

Sidebar.prototype.list = function() {
	this.sidebarList = ul({
		children: items.map(function(item) {
			if(item.routeName) {
				return li({
					class: "block border-bottom border-color-dark-grey background-color-white",
					content: anchor({
						class: "sidebar-list-link block no-decoration color-inherit padding-horizontal padding-vertical-medium",
						href: item.url,
						"data-route-name": item.routeName,
						text: item.text
					})
				});
			} else {
				return h4({
					class: "block padding-horizontal padding-bottom padding-top border-bottom border-color-dark-grey",
					text: item.text
				})
			}
		})
	});

	return this.sidebarList;
};

Sidebar.prototype.header = function() {
	return header({
		content: h3({ text: "Xememex" }),
		class: "border-bottom border-color-dark-grey padding-all background-color-white"
	});
}

Sidebar.prototype.render = function() {
	return div({
		class: "layout-sidebar background-color-light-purple border-right border-color-dark-grey box-shadow",
		children: [this.header(),this.list()]
	});
};

module.exports = Sidebar;