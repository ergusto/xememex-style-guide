var Router = require("./utils/router.js");

var router = new Router({
	"/": "introduction",
	"/buttons": "buttons",
	"/colours": "colours",
	"/dropdown": "dropdown"
});

module.exports = router;