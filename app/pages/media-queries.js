var Page = require("./page.js"),
	MediaQueries = require("../components/media-queries.js");

var MediaQueriesPage = new Page("media-queries", function(params) {
	var mediaQueries = new MediaQueries();
	return mediaQueries.element;
});

module.exports = MediaQueriesPage;