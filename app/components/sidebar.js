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
	{ text: "Layout" },
	{ text: "Widths", url: "#/widths", routeName: "widths" },
	{ text: "Margin and padding", url: "#/margin-and-padding", routeName: "margin-and-padding" },
	{ text: "Typography" },
	{ text: "Font family", url: "#/font-family", routeName: "font-family" },
	{ text: "Theming" },
	{ text: "Borders", url: "#/borders", routeName: "borders" },
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
	var activeRoute = this.sidebarList.querySelector("." + activeRouteLinkClass),
		nextActiveRoute = this.sidebarList.querySelector('a[data-route-name="' + name + '"]');
	if(activeRoute) {
		activeRoute.classList.remove(activeRouteLinkClass);
	}
	if(nextActiveRoute) {
		nextActiveRoute.classList.add(activeRouteLinkClass);
	}
};

Sidebar.prototype.list = function() {
	return ul({
		ref: { name: "sidebarList", context: this },
		children: items.map(function(item) {
			if(item.routeName) {
				return li({
					class: "block border-bottom border-color-light-grey background-color-white",
					content: anchor({
						class: "sidebar-list-link block no-decoration color-inherit padding-horizontal padding-vertical-medium",
						href: item.url,
						"data-route-name": item.routeName,
						text: item.text
					})
				});
			} else {
				return li({
					class: "margin-top-small",
					content: h4({
						class: "block padding-horizontal padding-vertical-medium border-bottom border-color-light-grey font-weight-normal",
						text: item.text
					})
				});
			}
		})
	});
};

Sidebar.prototype.header = function() {
	return header({
		content: anchor({
			class: "no-decoration color-inherit",
			href: "#/",
			content: h3({ class: "site-title comfortaa text-align-center font-weight-normal", text: "xememex style guide" })
		}),
		class: "border-bottom border-color-light-grey padding-all background-color-white"
	});
}

Sidebar.prototype.render = function() {
	var header = this.header(),
		list = this.list();
	return div({
		class: "layout-sidebar background-color-light-purple border-right border-color-grey box-shadow padding-bottom",
		children: [header,list]
	});
};

module.exports = Sidebar;