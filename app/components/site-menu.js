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

var activeRouteLinkClass = "site-menu-link--active";

var menuItems = [
	{ text: "Getting started" },
	{ text: "Introduction", url: "#/", routeName: "introduction" },
	{ text: "Colors", url: "#/colors", routeName: "colors" },
	{ text: "Components" },
	{ text: "Alerts", url: "#/alerts", routeName: "alerts" },
	{ text: "Buttons", url: "#/buttons", routeName: "buttons" },
	{ text: "Dropdown", url: "#/dropdown", routeName: "dropdown" },
	{ text: "Form inputs", url: "#/form-inputs", routeName: "form-inputs" },
	{ text: "Layout" },
	{ text: "Widths", url: "#/widths", routeName: "widths" },
	{ text: "Margin and padding", url: "#/margin-and-padding", routeName: "margin-and-padding" },
	{ text: "Typography" },
	{ text: "Font family", url: "#/font-family", routeName: "font-family" },
	{ text: "Theming" },
	{ text: "Borders", url: "#/borders", routeName: "borders" },
];

function SiteMenu() {
	this.element = this.render();
	this.addRouteListener();
}

SiteMenu.prototype.addRouteListener = function() {
	var self = this;
	router.register(function(name) {
		self.addActiveRoute(name);
	});
};

SiteMenu.prototype.addActiveRoute = function(name) {
	var activeRoute = this.sitemenuList.querySelector("." + activeRouteLinkClass),
		nextActiveRoute = this.sitemenuList.querySelector('a[data-route-name="' + name + '"]');
	if(activeRoute) {
		activeRoute.classList.remove(activeRouteLinkClass);
	}
	if(nextActiveRoute) {
		nextActiveRoute.classList.add(activeRouteLinkClass);
	}
};

SiteMenu.prototype.list = function() {
	return ul({
		ref: { name: "sitemenuList", context: this },
		children: menuItems.map(function(item) {
			if(item.routeName) {
				return li({
					class: "block border-bottom border-color-light-grey background-color-white",
					content: anchor({
						class: "site-menu-link block no-decoration color-inherit padding-horizontal padding-vertical-medium bold-on-hover",
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

SiteMenu.prototype.header = function() {
	return header({
		content: anchor({
			class: "no-decoration color-inherit",
			href: "#/",
			content: h3({ class: "site-title comfortaa text-align-center", text: "xememex style guide" })
		}),
		class: "border-bottom border-color-light-grey padding-all background-color-white"
	});
}

SiteMenu.prototype.render = function() {
	var header = this.header(),
		list = this.list();
	return div({
		class: "layout__site-menu background-color-light-purple border-right border-color-grey box-shadow padding-bottom",
		children: [header,list]
	});
};

module.exports = SiteMenu;