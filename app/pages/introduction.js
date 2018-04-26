var Page = require("./page.js"),
	Introduction = require("../components/introduction.js");

var IntroductionPage = new Page("introduction", function(params) {
	var intro = new Introduction();
	return intro.element;
});

module.exports = IntroductionPage;