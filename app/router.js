var Router = require("./utils/router.js");

var router = new Router({
	"/": "introduction",
	"/alerts": "alerts",
	"/buttons": "buttons",
	"/clearfix": "clearfix",
	"/collapse": "collapse",
	"/colors": "colors",
	"/display": "display",
	"/dropdown": "dropdown",
	"/form-inputs": "form-inputs",
	"/margin-and-padding": "margin-and-padding",
	"/media-queries": "media-queries",
	"/widths": "widths"
});

module.exports = router;