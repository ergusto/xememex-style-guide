var Layout = require("./components/layout.js"),
	PageManager = require("./utils/page-manager.js"),
	pageList = require("./pages"),
	router = require("./router.js"),
	utils = require("./utils");

var scrollToDocumentTop = utils.scrollToDocumentTop;

require("typeface-assistant");
require("typeface-comfortaa");
require("./style.css");
require("./padding-and-margin.css");
require("./style-guide.css");

module.exports = function(appNode) {
	var layout = new Layout(),
		pageManager = new PageManager(layout.body, pageList);

	appNode.appendChild(layout.element);

	pageManager.register(scrollToDocumentTop);
	router.register(pageManager.routerMiddleware());
	router.start();
};