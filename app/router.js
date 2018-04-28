var Router = require("./utils/router.js");

var router = new Router({
	"/": "introduction",
	"/alerts": "alerts",
	"/buttons": "buttons",
	"/colors": "colors",
	"/dropdown": "dropdown",
	"/form-controls": "form-controls"
});

module.exports = router;