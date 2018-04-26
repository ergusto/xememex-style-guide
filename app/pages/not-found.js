var Page = require("./page.js"),
	NotFound = require("../components/not-found.js");

var NotFoundPage = new Page("not-found", function(params) {
	var notFound = new NotFound();
	return notFound.element;
});

module.exports = NotFoundPage;