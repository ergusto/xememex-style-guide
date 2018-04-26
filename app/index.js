var Layout = require("./components/layout.js"),
	PageManager = require("./utils/page-manager.js"),
	pageList = require("./pages"),
	router = require("./router.js");

require("typeface-assistant");
require("./style.css");
require("./style-guide.css");

module.exports = function(appNode) {
	var layout = new Layout(),
		pageManager = new PageManager(layout.body, pageList);

	appNode.appendChild(layout.element);

	router.register(pageManager.routerMiddleware());
	router.start();
};