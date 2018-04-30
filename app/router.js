var Router = require("./utils/router.js");

var router = new Router({
	"/": "introduction",
	"/alerts": "alerts",
	"/buttons": "buttons",
	"/colors": "colors",
	"/dropdown": "dropdown",
	"/form-inputs": "form-inputs",
	"/media-queries": "media-queries",
	"/widths": "widths"
});

module.exports = router;