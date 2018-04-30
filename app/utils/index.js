function toString(obj) {
	return Object.prototype.toString.call(obj);
}

module.exports.toString = toString;

function isArray(obj) {
	return toString(obj) === "[object Array]";
}

module.exports.isArray = isArray;

function isFunction(obj) {
	return toString(obj) === "[object Function]";
}

module.exports.isFunction = isFunction;

function isString(obj) {
	return toString(obj) === "[object String]";
}

module.exports.isString = isString;

function isObject(object) {
	return object instanceof Object && object.constructor === Object;
}

module.exports.isObject = isObject;

function isElement(element) {
	return element instanceof Element;  
}

module.exports.isElement = isElement;

function isDOMNode(node) {
	return node instanceof Node;
}

module.exports.isDOMNode = isDOMNode;

function createElement(type,attributes,text,child) {
	var element = document.createElement(type);
	if(attributes) {
		for (var prop in attributes) {
			if(attributes.hasOwnProperty(prop)) {
				element.setAttribute(prop,attributes[prop]);
			}
		}
	}
	if(text) {
		var textNode = document.createTextNode(text);
		element.appendChild(textNode);
	}
	if(child) {
		if(isArray(child)) {
			var children = child;
			for (var i = 0, l = children.length; i < l; i++) {
				child = children[i];
				element.appendChild(child);
			}
		} else {
			element.appendChild(child);
		}
	}
	return element;
}

module.exports.createElement = createElement;

function makeLowercaseAndCapitalizeFirstCharacterOfEachWord(string) {
	string = string || "";
	var str = string.toLowerCase();
	return str.replace(/[^\s]+/g, function(word) {
		return word.replace(/^./, function(first) {
			return first.toUpperCase();
		});
	});
}

module.exports.makeLowercaseAndCapitalizeFirstCharacterOfEachWord = makeLowercaseAndCapitalizeFirstCharacterOfEachWord;

function convertUnderscoresToSpaces(string) {
	string = string || "";
	return string.replace("_"," ");
}

module.exports.convertUnderscoresToSpaces = convertUnderscoresToSpaces;

function getUserStatus(user) {
	if(user.UserStatus) {
		if(user.UserStatus === "FORCE_CHANGE_PASSWORD") {
			return "Unconfirmed";
		} else {
			return makeLowercaseAndCapitalizeFirstCharacterOfEachWord(convertUnderscoresToSpaces(user.UserStatus));
		}
	}
}

module.exports.getUserStatus = getUserStatus;

function userIsAdmin(user) {
	return user && user.groups && user.groups.indexOf("admin") >= 0;
}

module.exports.userIsAdmin = userIsAdmin;

function removeChildren(element) {
	while (element.hasChildNodes()) {
		element.removeChild(element.firstChild);
	}
}

module.exports.removeChildren = removeChildren;

function getHash() {
	return window.location.hash.slice(1);
}

module.exports.getHash = getHash;

function pathToArray(path) {
	return path.split("/").filter(function(part) {
		return !!part;
	});
}

module.exports.pathToArray = pathToArray;

function isCaptureGroup(string) {
	return string.charAt(0) === ":";
}

module.exports.isCaptureGroup = isCaptureGroup;

function addHashListener(listener) {
	window.addEventListener("hashchange",listener,false);
}

module.exports.addHashListener = addHashListener;

function removeHashListener(listener) {
	window.removeEventListener("hashchange",listener,false);
}

module.exports.removeHashListener = removeHashListener;

// If the current route (hash) matches provided route, 
// return an object containing captured params, otherwise false.
function matchRouteAndGetParams(hash,route) {
	var match = true,
		hashPart,
		routePart;
	var params = {},
		hashPartArray = pathToArray(hash),
		routePartArray = pathToArray(route);

	if(hashPartArray.length !== routePartArray.length) {
		return false;
	}

	for(var i = 0, l = hashPartArray.length; i < l; i++) {
		hashPart = hashPartArray[i];
		routePart = routePartArray[i];

		if (isCaptureGroup(routePart)) {
			params[routePart.slice(1)] = hashPart;
		} else if (hashPart !== routePart) {
			match = false;
			break;
		}
	}

	return match ? params : false;
}

module.exports.matchRouteAndGetParams = matchRouteAndGetParams;

function findMatchingRoute(hash,routes) {
	var route,
		params;

	for(var i = 0, l = routes.length; i < l; i++) {
		route = routes[i];
		// route matches if matchRouteAndGetParams returns non-falsy
		params = matchRouteAndGetParams(hash,route.route);

		if (params) {
			return {
				name: route.name,
				params: params
			}
		}
	}

	return false;
}

module.exports.findMatchingRoute = findMatchingRoute;

function AuthenticationMiddleware(routeName,params) {
	var user = $xememex.server.user;
	if(!user || !userIsAdmin(user)) {
		window.location.hash = "unauthorised";
	}
}

module.exports.AuthenticationMiddleware = AuthenticationMiddleware;

function listenToAuthenticationStatusChange() {
	$xememex.server.addEventListener("login-status-change", function(user) {
		if(user && userIsAdmin(user)) {
			window.location.hash = "";
		} else {
			window.location.hash = "unauthorised";
		}
	});
}

module.exports.listenToAuthenticationStatusChange = listenToAuthenticationStatusChange;

function dynamicSort(array, property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    var properties = property.split("."),
    	len = properties.length;

    return function (a, b) {
        var i = 0, result;
        while( i < len ) { a = a[properties[i]]; b = b[properties[i]]; i++; }

        if (a < b) {
            result = -1;
        } else if (a > b) {
            result = 1;
        } else {
            result = 0;
        }

        return result * sortOrder;
    };
};

function sortByNestedObjectProperty(array,property) {
	if(array && isArray(array)) {
		var result = Array.prototype.sort.call(array,dynamicSort(array,property));
		return result;
	}
	return array;
}

module.exports.sortByNestedObjectProperty = sortByNestedObjectProperty; 

function filterUsers(users,filter) {
	return users.filter(function(user) {
		var attributes = user.Attributes;
		return user.Username.toLowerCase().startsWith(filter) || attributes.name.toLowerCase().startsWith(filter) || attributes.email.toLowerCase().startsWith(filter);
	});
}

module.exports.filterUsers = filterUsers;

function simpleObjectComparison(object1, object2) {
	var property;
	if(isObject(object1) && isObject(object2)) {
		for(property in object1){
			if(object1.hasOwnProperty(property)){
				if(object1[property] !== object2[property]){
					return false;
				}
			}
		}
		for(property in object2){
			if(object2.hasOwnProperty(property)){
				if(object1[property] !== object2[property]){
					return false;
				}
			}
		}
	} else {
		return false;
	}
	return true;
}

module.exports.simpleObjectComparison = simpleObjectComparison;

function extend(source,properties) {
	var property;
	for(property in properties) {
		if(properties.hasOwnProperty(property)) {
			source[property] = properties[property];
		}
	}
	return source;
}

module.exports.extend = extend;

function scrollToDocumentTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

module.exports.scrollToDocumentTop = scrollToDocumentTop;