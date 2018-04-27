var Page = require("./page.js"),
	Alerts = require("../components/alerts.js");

var AlertsPage = new Page("alerts", function(params) {
	var alerts = new Alerts();
	return alerts.element;
});

module.exports = AlertsPage;