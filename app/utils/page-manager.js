var utils = require("./index.js");

var removeChildren = utils.removeChildren,
	simpleObjectComparison = utils.simpleObjectComparison,
  removeChildren = utils.removeChildren;

function PageManager(container,pages) {
	this.pages = {};
	this.container = container;
	this.currentPage = null;
	this.currentParams = null;
	this.addPages(pages);
}

PageManager.prototype.addPages = function(pages) {
	pages.forEach(this.addPage.bind(this));
};

PageManager.prototype.addPage = function(page) {
	this.pages[page.name] = page;
};

PageManager.prototype.getPage = function(name) {
	var currentPage = this.pages[name];

	if(!currentPage) {
		throw new Error('Tried to access unregistered page');
	}

	return currentPage;
};

PageManager.prototype.removeChildren = function() {
	removeChildren(this.container);
};

PageManager.prototype.renderPage = function(pageName,params) {
	var page = this.getPage(pageName);

	if(this.currentPage !== page.name || !simpleObjectComparison(this.currentParams,params)) {
		var template = page.render(params);
		this.currentParams = params;
		this.currentPage = page.name;
		this.removeChildren();
		this.container.appendChild(template);
	}
};

PageManager.prototype.routerMiddleware = function() {
	var self = this;

	return function pageManager(routeName,params) {
		self.renderPage(routeName,params);
	};
};

module.exports = PageManager;