var templater = require("../templater"),
	router = require("../router.js"),
	menuIcon = require("./icons/menu.js");

var div = templater.div,
	ul = templater.ul,
	li = templater.li,
	h3 = templater.h3,
	h4 = templater.h4,
	button = templater.button,
	anchor = templater.a,
	header = templater.header,
	fragment = templater.fragment;

var activeRouteLinkClass = "site-menu-link--active",
	hiddenMenuListClass = "site-menu-list--mobile-hidden";

var menuItems = [
	{ text: "Getting started" },
	{ text: "Introduction", url: "#/", routeName: "introduction" },
	{ text: "Colors", url: "#/colors", routeName: "colors" },
	{ text: "Media queries", url: "#/media-queries", routeName: "media-queries" },
	{ text: "Objects" },
	{ text: "Dropdown", url: "#/dropdown", routeName: "dropdown" },
	{ text: "Components" },
	{ text: "Alerts", url: "#/alerts", routeName: "alerts" },
	{ text: "Buttons", url: "#/buttons", routeName: "buttons" },
	{ text: "Form inputs", url: "#/form-inputs", routeName: "form-inputs" },
	{ text: "Layout" },
	{ text: "Widths & Max Widths", url: "#/widths", routeName: "widths" },
	{ text: "Margin and padding", url: "#/margin-and-padding", routeName: "margin-and-padding" },
	{ text: "Typography" },
	{ text: "Font family", url: "#/font-family", routeName: "font-family" },
	{ text: "Theming" },
	{ text: "Borders", url: "#/borders", routeName: "borders" },
];

function SiteMenu() {
	this.element = this.render();
	this.documentClick = this.documentClick.bind(this);
	this.addEventListeners();
	this.addRouteListener();
}

SiteMenu.prototype.addRouteListener = function() {
	var self = this;
	router.register(function(name) {
		self.addActiveRoute(name);
		self.hideList();
	});
};

SiteMenu.prototype.showList = function() {
	this.siteMenuList.classList.remove(hiddenMenuListClass);
};

SiteMenu.prototype.hideList = function() {
	this.siteMenuList.classList.add(hiddenMenuListClass);
};

SiteMenu.prototype.addActiveRoute = function(name) {
	var activeRoute = this.siteMenuList.querySelector("." + activeRouteLinkClass),
		nextActiveRoute = this.siteMenuList.querySelector('a[data-route-name="' + name + '"]');
	if(activeRoute) {
		activeRoute.classList.remove(activeRouteLinkClass);
	}
	if(nextActiveRoute) {
		nextActiveRoute.classList.add(activeRouteLinkClass);
	}
};

SiteMenu.prototype.addEventListeners = function() {
	var self = this;
	this.siteMenuTrigger.addEventListener("click",function(event) {
		event.preventDefault();
		event.stopPropagation();

		if(self.isOpen()) {
			self.close();
		} else {
			self.open();
			document.addEventListener("click",self.documentClick);
		}
	});
};

SiteMenu.prototype.open = function() {
	this.siteMenuList.classList.remove(hiddenMenuListClass);
};

SiteMenu.prototype.close = function() {
	this.siteMenuList.classList.add(hiddenMenuListClass);
};

SiteMenu.prototype.isOpen = function() {
	return !this.siteMenuList.classList.contains(hiddenMenuListClass);
};

SiteMenu.prototype.documentClick = function(event) {
	event.stopPropagation();
	if(!this.siteMenuList.contains(event.target)) {
		this.close();
		document.removeEventListener("click",this.documentClick);
	}
};

SiteMenu.prototype.list = function() {
	return ul({
		class: "site-menu-list padding-bottom " + hiddenMenuListClass,
		ref: { name: "siteMenuList", context: this },
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
		children: [
			button({
				ref: { name: "siteMenuTrigger", context: this },
				class: "inline-block no-decoration borderless float-right cursor-pointer",
				content: menuIcon("show-site-menu-button fill-darker-grey"),
			}),
			anchor({
				class: "no-decoration color-inherit inline-block",
				href: "#/",
				content: h3({ class: "site-title comfortaa", text: "xememex style guide" })
			}),
		],
		class: "site-menu-header padding-all background-color-white"
	});
}

SiteMenu.prototype.render = function() {
	var header = this.header(),
		list = this.list();
	return div({
		class: "layout__site-menu background-color-light-purple border-right border-color-grey box-shadow",
		children: [header,list]
	});
};

module.exports = SiteMenu;