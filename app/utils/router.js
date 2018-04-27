var utils = require("./index.js");

var isFunction = utils.isFunction,
	addHashListener = utils.addHashListener,
	getHash = utils.getHash,
	findMatchingRoute = utils.findMatchingRoute,
	userIsAdmin = utils.userIsAdmin;

function Router(routes) {
	this.routes = [];
	this.handlers = [];
	this.routeHandlers = {};
	this.routeHandlers['not-found'] = [];
	this.handleHashChange = this.handleHashChange.bind(this);

	if(routes) {
		this.addRoutes(routes);
	}
}

Router.prototype.start = function() {
	this.handleHashChange();
	addHashListener(this.handleHashChange);
};

Router.prototype.handleHashChange = function() {
	var hash = getHash(),
		currentRoute = findMatchingRoute(hash, this.routes),
		name = currentRoute.name,
		params = currentRoute.params;

	if (name === undefined) {
		this.run("not-found", {});
	} else {
		this.run(name, params);
	}
};

Router.prototype.addRoutes = function(routes) {
	var self = this;
	Object.keys(routes).forEach(function(route) {
		self.routes.push({
			name: routes[route],
			route: route
		});
	});
};

Router.prototype.register = function(name,handler) {
	if (isFunction(name)) {
		handler = name;
		if (this.handlers.indexOf(handler) === -1) {
			this.handlers.push(handler);
		}
	} else {
		if (!this.routeHandlers[name]) {
			this.routeHandlers[name] = [];
		}
		if (this.routeHandlers[name].indexOf(handler) === -1) {
			this.routeHandlers[name].push(handler);
		}
	}
};

Router.prototype.run = function(name,params) {
	var self = this;

	this.handlers.forEach(function(handler) {
		handler(name, params);
	});

	if (this.routeHandlers[name]) {
		this.routeHandlers[name].forEach(function(handler) {
			handler(name, params);
		});
	}
};

module.exports = Router;