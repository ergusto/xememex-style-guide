var Router = require("./utils/router.js");

var router = new Router({
	"/": "introduction",
	"/alerts": "alerts",
	"/buttons": "buttons",
	"/colors": "colors",
	"/dropdown": "dropdown",
	"/form-inputs": "form-inputs"
});

module.exports = router;