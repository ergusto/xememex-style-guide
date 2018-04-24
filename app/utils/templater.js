var utils = require("./index.js"),
	isObject = utils.isObject,
	isArray = utils.isArray,
	isElement = utils.isElement,
	isString = utils.isString;

function templater(config) {
	var prop,
		textNode,
		type = config.type,
		events = config['events'],
		content = config.content,
		text = config.text,
		parent = config.parent,
		click = config.click,
		submit = config.submit,
		keyup = config.keyup,
		keydown = config.keydown,
		focus = config.focus,
		blur = config.blur,
		keypress = config.keypress,
		element = document.createElement(type);

	delete config['type'];
	delete config['events'];
	delete config['content'];
	delete config['text'];
	delete config['parent'];

	delete config['click'];
	delete config['submit'];
	delete config['keyup'];
	delete config['keydown'];
	delete config['keypress'];
	delete config['focus'];
	delete config['blur'];

	if(!isObject(events)) events = {};

	if(click) events['click'] = click;
	if(submit) events['submit'] = submit;
	if(keyup) events['keyup'] = keyup;
	if(keydown) events['keydown'] = keydown;
	if(keypress) events['keypress'] = keypress;
	if(focus) events['focus'] = keydown;
	if(blur) events['blur'] = blur;

	for(var prop in events) {
		if(Object.prototype.hasOwnProperty.call(events,prop)) {
			element.addEventListener(prop,events[prop]);
		}
	}

	for(var prop in config) {
		if(Object.prototype.hasOwnProperty.call(config, prop)) {
			element.setAttribute(prop,config[prop]);
		}
	}

	if(content) {
		if(isElement(content)) {
			element.appendChild(content);
		} else if(isObject(content)) {
			element.appendChild(templater(content));
		} else if(isArray(content)) {
			content.forEach(function(child) {
				if(child) {
					if(isObject(child)) {
						element.appendChild(templater(child));
					} else if(isElement(child)) {
						element.appendChild(child);
					}
				}
			});
		}
	}

	if(text) {
		textNode = document.createTextNode(text);
		element.appendChild(textNode);
	}

	if(parent) {
		parent.appendChild(element);
	}

	return element;
}

function makeTemplateFunction(type) {
	return function(template) {
		if(!template) template = {};
		template.type = type;
		return templater(template);
	};
}

function fragment(/* nodes */) {
	var children = Array.prototype.slice.call(arguments),
		fragment = document.createDocumentFragment();

	children.forEach(function(child) {
		if(child) {
			if(isObject(child)) {
				child = templater(child);
			}
			fragment.appendChild(child);
		}
	});

	return fragment;
}

function Templater(types) {
	if(!types) {
		types = Templater.types;
	} else if(!isArray(types)) {
		types = Array.prototype.slice.call(arguments);
	}

	function templater(config) {
		return templater(config);
	}

	templater.fragment = fragment;
	
	types.forEach(function(type) {
		templater[type] = makeTemplateFunction(type);
	});

	return templater;
}

Templater.types = ['address','article','aside','footer','header','h1','h2','h3','h4','h5','h6','hgroup','nav','section','blockquote','dd','dir','div','dl','dt','figcaption','figure','hr','li','main','ol','pre','ul','a','abbr','b','bdi','bdo','br','cite','code','data','dfn','em','i','kbd','mark','nobr','q','rp','rt','rtc','ruby','s','samp','small','span','strong','sub','sup','time','tt','u','var','wbr','area','audio','img','map','track','video','applet','embed','iframe','noembed','object','param','picture','source','canvas','noscript','script','del','ins','caption','col','colgroup','table','tbody','td','tfoot','th','thead','tr','button','datalist','fieldset','form','input','label','legend','meter','optgroup','option','output','progress','select','textarea','details','dialog','menu','menuitem','summary','content','element','shadow','slot','template','p'];

module.exports = Templater;