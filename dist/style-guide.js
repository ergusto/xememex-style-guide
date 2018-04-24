/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/application.js":
/*!****************************!*\
  !*** ./app/application.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var templater = __webpack_require__(/*! ./templater.js */ \"./app/templater.js\");\n\nvar div = templater.div;\n\nfunction Application() {\n\tthis.element = this.render();\n}\n\nApplication.prototype.render = function() {\n\tconsole.log(templater);\n\tvar element = div({\n\t\ttext: \"Hi there\"\n\t});\n\n\treturn element;\n};\n\nmodule.exports = Application;\n\n//# sourceURL=webpack:///./app/application.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var App = __webpack_require__(/*! ./application.js */ \"./app/application.js\");\n\nmodule.exports = function(parent) {\n\tvar app = new App();\n\tif(app.element) parent.appendChild(app.element);\n};\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/templater.js":
/*!**************************!*\
  !*** ./app/templater.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Templater = __webpack_require__(/*! ./utils/templater.js */ \"./app/utils/templater.js\");\n\nmodule.exports = Templater(\"div\");\n\n//# sourceURL=webpack:///./app/templater.js?");

/***/ }),

/***/ "./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function toString(obj) {\n\treturn Object.prototype.toString.call(obj);\n}\n\nmodule.exports.toString = toString;\n\nfunction isArray(obj) {\n\treturn toString(obj) === \"[object Array]\";\n}\n\nmodule.exports.isArray = isArray;\n\nfunction isFunction(obj) {\n\treturn toString(obj) === \"[object Function]\";\n}\n\nmodule.exports.isFunction = isFunction;\n\nfunction isString(obj) {\n\treturn toString(obj) === \"[object String]\";\n}\n\nmodule.exports.isString = isString;\n\nfunction isObject(object) {\n\treturn object instanceof Object && object.varructor === Object;\n}\n\nmodule.exports.isObject = isObject;\n\nfunction isElement(element) {\n\treturn element instanceof Element;  \n}\n\nmodule.exports.isElement = isElement;\n\nfunction createElement(type,attributes,text,child) {\n\tvar element = document.createElement(type);\n\tif(attributes) {\n\t\tfor (var prop in attributes) {\n\t\t\tif(attributes.hasOwnProperty(prop)) {\n\t\t\t\telement.setAttribute(prop,attributes[prop]);\n\t\t\t}\n\t\t}\n\t}\n\tif(text) {\n\t\tvar textNode = document.createTextNode(text);\n\t\telement.appendChild(textNode);\n\t}\n\tif(child) {\n\t\tif(isArray(child)) {\n\t\t\tvar children = child;\n\t\t\tfor (var i = 0, l = children.length; i < l; i++) {\n\t\t\t\tchild = children[i];\n\t\t\t\telement.appendChild(child);\n\t\t\t}\n\t\t} else {\n\t\t\telement.appendChild(child);\n\t\t}\n\t}\n\treturn element;\n}\n\nmodule.exports.createElement = createElement;\n\nfunction makeLowercaseAndCapitalizeFirstCharacterOfEachWord(string) {\n\tstring = string || \"\";\n\tvar str = string.toLowerCase();\n\treturn str.replace(/[^\\s]+/g, function(word) {\n\t\treturn word.replace(/^./, function(first) {\n\t\t\treturn first.toUpperCase();\n\t\t});\n\t});\n}\n\nmodule.exports.makeLowercaseAndCapitalizeFirstCharacterOfEachWord = makeLowercaseAndCapitalizeFirstCharacterOfEachWord;\n\nfunction convertUnderscoresToSpaces(string) {\n\tstring = string || \"\";\n\treturn string.replace(\"_\",\" \");\n}\n\nmodule.exports.convertUnderscoresToSpaces = convertUnderscoresToSpaces;\n\nfunction getUserStatus(user) {\n\tif(user.UserStatus) {\n\t\tif(user.UserStatus === \"FORCE_CHANGE_PASSWORD\") {\n\t\t\treturn \"Unconfirmed\";\n\t\t} else {\n\t\t\treturn makeLowercaseAndCapitalizeFirstCharacterOfEachWord(convertUnderscoresToSpaces(user.UserStatus));\n\t\t}\n\t}\n}\n\nmodule.exports.getUserStatus = getUserStatus;\n\nfunction userIsAdmin(user) {\n\treturn user && user.groups && user.groups.indexOf(\"admin\") >= 0;\n}\n\nmodule.exports.userIsAdmin = userIsAdmin;\n\nfunction removeChildren(element) {\n\twhile (element.hasChildNodes()) {\n\t\telement.removeChild(element.firstChild);\n\t}\n}\n\nmodule.exports.removeChildren = removeChildren;\n\nfunction getHash() {\n\treturn window.location.hash.slice(1);\n}\n\nmodule.exports.getHash = getHash;\n\nfunction pathToArray(path) {\n\treturn path.split(\"/\").filter(function(part) {\n\t\treturn !!part;\n\t});\n}\n\nmodule.exports.pathToArray = pathToArray;\n\nfunction isCaptureGroup(string) {\n\treturn string.charAt(0) === \":\";\n}\n\nmodule.exports.isCaptureGroup = isCaptureGroup;\n\nfunction addHashListener(listener) {\n\twindow.addEventListener('hashchange',listener,false);\n}\n\nmodule.exports.addHashListener = addHashListener;\n\nfunction removeHashListener(listener) {\n\twindow.removeEventListener('hashchange',listener,false);\n}\n\nmodule.exports.removeHashListener = removeHashListener;\n\n// If the current route (hash) matches provided route, \n// return an object containing captured params, otherwise false.\nfunction matchRouteAndGetParams(hash,route) {\n\tvar match = true,\n\t\thashPart,\n\t\troutePart;\n\tvar params = {},\n\t\thashPartArray = pathToArray(hash),\n\t\troutePartArray = pathToArray(route);\n\n\tif(hashPartArray.length !== routePartArray.length) {\n\t\treturn false;\n\t}\n\n\tfor(var i = 0, l = hashPartArray.length; i < l; i++) {\n\t\thashPart = hashPartArray[i];\n\t\troutePart = routePartArray[i];\n\n\t\tif (isCaptureGroup(routePart)) {\n\t\t\tparams[routePart.slice(1)] = hashPart;\n\t\t} else if (hashPart !== routePart) {\n\t\t\tmatch = false;\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn match ? params : false;\n}\n\nmodule.exports.matchRouteAndGetParams = matchRouteAndGetParams;\n\nfunction findMatchingRoute(hash,routes) {\n\tvar route,\n\t\tparams;\n\n\tfor(var i = 0, l = routes.length; i < l; i++) {\n\t\troute = routes[i];\n\t\t// route matches if matchRouteAndGetParams returns non-falsy\n\t\tparams = matchRouteAndGetParams(hash,route.route);\n\n\t\tif (params) {\n\t\t\treturn {\n\t\t\t\tname: route.name,\n\t\t\t\tparams: params\n\t\t\t}\n\t\t}\n\t}\n\n\treturn false;\n}\n\nmodule.exports.findMatchingRoute = findMatchingRoute;\n\nfunction AuthenticationMiddleware(routeName,params) {\n\tvar user = $xememex.server.user;\n\tif(!user || !userIsAdmin(user)) {\n\t\twindow.location.hash = \"unauthorised\";\n\t}\n}\n\nmodule.exports.AuthenticationMiddleware = AuthenticationMiddleware;\n\nfunction listenToAuthenticationStatusChange() {\n\t$xememex.server.addEventListener(\"login-status-change\", function(user) {\n\t\tif(user && userIsAdmin(user)) {\n\t\t\twindow.location.hash = \"\";\n\t\t} else {\n\t\t\twindow.location.hash = \"unauthorised\";\n\t\t}\n\t});\n}\n\nmodule.exports.listenToAuthenticationStatusChange = listenToAuthenticationStatusChange;\n\nfunction dynamicSort(array, property) {\n    var sortOrder = 1;\n\n    if(property[0] === \"-\") {\n        sortOrder = -1;\n        property = property.substr(1);\n    }\n\n    var properties = property.split('.'),\n    \tlen = properties.length;\n\n    return function (a, b) {\n        var i = 0, result;\n        while( i < len ) { a = a[properties[i]]; b = b[properties[i]]; i++; }\n\n        if (a < b) {\n            result = -1;\n        } else if (a > b) {\n            result = 1;\n        } else {\n            result = 0;\n        }\n\n        return result * sortOrder;\n    };\n};\n\nfunction sortByNestedObjectProperty(array,property) {\n\tif(array && isArray(array)) {\n\t\tvar result = Array.prototype.sort.call(array,dynamicSort(array,property));\n\t\treturn result;\n\t}\n\treturn array;\n}\n\nmodule.exports.sortByNestedObjectProperty = sortByNestedObjectProperty; \n\nfunction filterUsers(users,filter) {\n\treturn users.filter(function(user) {\n\t\tvar attributes = user.Attributes;\n\t\treturn user.Username.toLowerCase().startsWith(filter) || attributes.name.toLowerCase().startsWith(filter) || attributes.email.toLowerCase().startsWith(filter);\n\t});\n}\n\nmodule.exports.filterUsers = filterUsers;\n\nfunction simpleObjectComparison(object1, object2) {\n\tvar property;\n\tif(isObject(object1) && isObject(objec2)) {\n\t\tfor(property in object1){\n\t\t\tif(object1.hasOwnProperty(property)){\n\t\t\t\tif(object1[property] !== object2[property]){\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tfor(property in object2){\n\t\t\tif(object2.hasOwnProperty(property)){\n\t\t\t\tif(object1[property] !== object2[property]){\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t} else {\n\t\treturn false;\n\t}\n\treturn true;\n}\n\nmodule.exports.simpleObjectComparison = simpleObjectComparison;\n\n//# sourceURL=webpack:///./app/utils/index.js?");

/***/ }),

/***/ "./app/utils/templater.js":
/*!********************************!*\
  !*** ./app/utils/templater.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var utils = __webpack_require__(/*! ./index.js */ \"./app/utils/index.js\"),\n\tisObject = utils.isObject,\n\tisArray = utils.isArray,\n\tisElement = utils.isElement,\n\tisString = utils.isString;\n\nfunction templater(config) {\n\tvar prop,\n\t\ttextNode,\n\t\ttype = config.type,\n\t\tevents = config['events'],\n\t\tcontent = config.content,\n\t\ttext = config.text,\n\t\tparent = config.parent,\n\t\tclick = config.click,\n\t\tsubmit = config.submit,\n\t\tkeyup = config.keyup,\n\t\tkeydown = config.keydown,\n\t\tfocus = config.focus,\n\t\tblur = config.blur,\n\t\tkeypress = config.keypress,\n\t\telement = document.createElement(type);\n\n\tdelete config['type'];\n\tdelete config['events'];\n\tdelete config['content'];\n\tdelete config['text'];\n\tdelete config['parent'];\n\n\tdelete config['click'];\n\tdelete config['submit'];\n\tdelete config['keyup'];\n\tdelete config['keydown'];\n\tdelete config['keypress'];\n\tdelete config['focus'];\n\tdelete config['blur'];\n\n\tif(!isObject(events)) events = {};\n\n\tif(click) events['click'] = click;\n\tif(submit) events['submit'] = submit;\n\tif(keyup) events['keyup'] = keyup;\n\tif(keydown) events['keydown'] = keydown;\n\tif(keypress) events['keypress'] = keypress;\n\tif(focus) events['focus'] = keydown;\n\tif(blur) events['blur'] = blur;\n\n\tfor(var prop in events) {\n\t\tif(Object.prototype.hasOwnProperty.call(events,prop)) {\n\t\t\telement.addEventListener(prop,events[prop]);\n\t\t}\n\t}\n\n\tfor(var prop in config) {\n\t\tif(Object.prototype.hasOwnProperty.call(config, prop)) {\n\t\t\telement.setAttribute(prop,config[prop]);\n\t\t}\n\t}\n\n\tif(content) {\n\t\tif(isElement(content)) {\n\t\t\telement.appendChild(content);\n\t\t} else if(isObject(content)) {\n\t\t\telement.appendChild(templater(content));\n\t\t} else if(isArray(content)) {\n\t\t\tcontent.forEach(function(child) {\n\t\t\t\tif(child) {\n\t\t\t\t\tif(isObject(child)) {\n\t\t\t\t\t\telement.appendChild(templater(child));\n\t\t\t\t\t} else if(isElement(child)) {\n\t\t\t\t\t\telement.appendChild(child);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\tif(text) {\n\t\ttextNode = document.createTextNode(text);\n\t\telement.appendChild(textNode);\n\t}\n\n\tif(parent) {\n\t\tparent.appendChild(element);\n\t}\n\n\treturn element;\n}\n\nfunction makeTemplateFunction(type) {\n\treturn function(template) {\n\t\tif(!template) template = {};\n\t\ttemplate.type = type;\n\t\treturn templater(template);\n\t};\n}\n\nfunction fragment(/* nodes */) {\n\tvar children = Array.prototype.slice.call(arguments),\n\t\tfragment = document.createDocumentFragment();\n\n\tchildren.forEach(function(child) {\n\t\tif(child) {\n\t\t\tif(isObject(child)) {\n\t\t\t\tchild = templater(child);\n\t\t\t}\n\t\t\tfragment.appendChild(child);\n\t\t}\n\t});\n\n\treturn fragment;\n}\n\nfunction Templater(types) {\n\tif(!types) {\n\t\ttypes = Templater.types;\n\t} else if(!isArray(types)) {\n\t\ttypes = Array.prototype.slice.call(arguments);\n\t}\n\n\tfunction templater(config) {\n\t\treturn templater(config);\n\t}\n\n\ttemplater.fragment = fragment;\n\t\n\ttypes.forEach(function(type) {\n\t\ttemplater[type] = makeTemplateFunction(type);\n\t});\n\n\treturn templater;\n}\n\nTemplater.types = ['address','article','aside','footer','header','h1','h2','h3','h4','h5','h6','hgroup','nav','section','blockquote','dd','dir','div','dl','dt','figcaption','figure','hr','li','main','ol','pre','ul','a','abbr','b','bdi','bdo','br','cite','code','data','dfn','em','i','kbd','mark','nobr','q','rp','rt','rtc','ruby','s','samp','small','span','strong','sub','sup','time','tt','u','var','wbr','area','audio','img','map','track','video','applet','embed','iframe','noembed','object','param','picture','source','canvas','noscript','script','del','ins','caption','col','colgroup','table','tbody','td','tfoot','th','thead','tr','button','datalist','fieldset','form','input','label','legend','meter','optgroup','option','output','progress','select','textarea','details','dialog','menu','menuitem','summary','content','element','shadow','slot','template','p'];\n\nmodule.exports = Templater;\n\n//# sourceURL=webpack:///./app/utils/templater.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! ./app */ \"./app/index.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n\tvar appNode = document.querySelector(\"#app\");\n\tapp(appNode);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });