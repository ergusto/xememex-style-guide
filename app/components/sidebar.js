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
	{ text: "Getting started" },
	{ text: "Introduction", url: "#/", routeName: "introduction" },
	{ text: "Colours", url: "#/colours", routeName: "colours" },
	{ text: "Components" },
	{ text: "Alerts", url: "#/alerts", routeName: "alerts" },
	{ text: "Buttons", url: "#/buttons", routeName: "buttons" },
	{ text: "Dropdown", url: "#/dropdown", routeName: "dropdown" },
];

function Sidebar() {
	this.header = this.renderHeader();
	this.list = this.renderList();
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
	var activeRoute = this.sidebarList.querySelector("." + activeRouteLinkClass),
		nextActiveRoute = this.sidebarList.querySelector('a[data-route-name="' + name + '"]');
	if(activeRoute) {
		activeRoute.classList.remove(activeRouteLinkClass);
	}
	if(nextActiveRoute) {
		nextActiveRoute.classList.add(activeRouteLinkClass);
	}
};

Sidebar.prototype.renderList = function() {
	return ul({
		ref: { name: "sidebarList", context: this },
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
					class: "block padding-horizontal padding-vertical-medium margin-top-small border-bottom border-color-dark-grey",
					text: item.text
				})
			}
		})
	});
};

Sidebar.prototype.renderHeader = function() {
	return header({
		content: h3({ class: "site-title comfortaa", text: "xememex style guide" }),
		class: "border-bottom border-color-dark-grey padding-all background-color-white"
	});
}

Sidebar.prototype.render = function() {
	return div({
		class: "layout-sidebar background-color-light-purple border-right border-color-dark-grey box-shadow",
		children: [this.header,this.list]
	});
};

module.exports = Sidebar;