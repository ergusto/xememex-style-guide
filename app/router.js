var Router = require("./utils/router.js");

var router = new Router({
	"/": "introduction",
	"/colours": "colours"
});

module.exports = router;