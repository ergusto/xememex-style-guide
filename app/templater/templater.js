var utils = require("../utils"),
	isObject = utils.isObject,
	isArray = utils.isArray,
	isFunction = utils.isFunction,
	isDOMNode = utils.isDOMNode,
	isString = utils.isString,
	extend = utils.extend;

function templater(options) {
	var prop,
		textNode,
		refName,
		refContext,
		ref = options.ref,
		type = options.type,
		events = options.events,
		content = options.content,
		text = options.text,
		parent = options.parent,
		children = options.children,
		click = options.click,
		submit = options.submit,
		keyup = options.keyup,
		keydown = options.keydown,
		focus = options.focus,
		blur = options.blur,
		keypress = options.keypress,
		element = document.createElement(type);

	delete options['ref'];
	delete options['type'];
	delete options['events'];
	delete options['content'];
	delete options['text'];
	delete options['parent'];
	delete options['children'];

	delete options['click'];
	delete options['submit'];
	delete options['keyup'];
	delete options['keydown'];
	delete options['keypress'];
	delete options['focus'];
	delete options['blur'];

	if(!isObject(events)) events = {};

	if(click) events['click'] = click;
	if(submit) events['submit'] = submit;
	if(keyup) events['keyup'] = keyup;
	if(keydown) events['keydown'] = keydown;
	if(keypress) events['keypress'] = keypress;
	if(focus) events['focus'] = focus;
	if(blur) events['blur'] = blur;

	for(prop in events) {
		if(Object.prototype.hasOwnProperty.call(events,prop)) {
			element.addEventListener(prop,events[prop]);
		}
	}

	for(prop in options) {
		if(Object.prototype.hasOwnProperty.call(options, prop)) {
			element.setAttribute(prop,options[prop]);
		}
	}

	if(content) {
		if(isFunction(content)) {
			content = content();
		}

		if(isObject(content)) {
			content = templater(content);
		}

		element.appendChild(content);
	}

	if(children && isArray(children)) {
		children.forEach(function(child) {
			if(child) {
				if(isDOMNode(child)) {
					element.appendChild(child);
				} else if(isObject(child)) {
					element.appendChild(templater(child));
				} 
			}
		});
	}

	if(text && isString(text)) {
		textNode = document.createTextNode(text);
		element.appendChild(textNode);
	}

	if(parent && isDOMNode(parent)) {
		parent.appendChild(element);
	}
	
	if(ref && isObject(ref)) {
		refName = ref.name;
		refContext = ref.context;
		
		if(!refName || !refContext) {
			throw new Error("Templater ref object must contain name and context properties");
		}

		refContext[refName] = element;
	}

	return element;
}

function makeTemplateFunction(type) {
	return function(template) {
		var children;
		if(!template) template = {};
		if(!isObject(template)) {
			if(isArray(template)) {
				children = template;
			} else if(isDOMNode(template)) {
				children = Array.prototype.slice.call(arguments);
			}
			template = {};
			template.children = children;
		}
		template.type = type;
		return templater(template);
	};
}

function fragment(children) {
	var fragment = document.createDocumentFragment();
	
	if(!isArray(children)) {
		children = Array.prototype.slice.call(arguments);
	}

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

function text(content) {
	return document.createTextNode(content);
}

function Templater(types) {
	if(!types) {
		types = Templater.types;
	} else if(!isArray(types)) {
		types = Array.prototype.slice.call(arguments);
	}

	function templater(options) {
		return templater(options);
	}

	templater.fragment = fragment;
	templater.text = text;
	
	types.forEach(function(type) {
		templater[type] = makeTemplateFunction(type);
	});

	return templater;
}

Templater.types = ['address','article','aside','footer','header','h1','h2','h3','h4','h5','h6','hgroup','nav','section','blockquote','dd','dir','div','dl','dt','figcaption','figure','hr','li','main','ol','pre','ul','a','abbr','b','bdi','bdo','br','cite','code','data','dfn','em','i','kbd','mark','nobr','q','rp','rt','rtc','ruby','s','samp','small','span','strong','sub','sup','time','tt','u','var','wbr','area','audio','img','map','track','video','applet','embed','iframe','noembed','object','param','picture','source','canvas','noscript','script','del','ins','caption','col','colgroup','table','tbody','td','tfoot','th','thead','tr','button','datalist','fieldset','form','input','label','legend','meter','optgroup','option','output','progress','select','textarea','details','dialog','menu','menuitem','summary','content','element','shadow','slot','template','p'];

module.exports = Templater;