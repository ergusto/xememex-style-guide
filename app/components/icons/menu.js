var templater = require("../../templater");

var div = templater.div;

function MenuIcon(className) {
	var _className = "icon icon-menu";

	if(className) {
		_className = _className + " " + className;
	}
	var element = div({ class: _className });
	element.innerHTML = '<svg viewBox="0 0 128 128" width="16pt" height="16pt"><rect x="0" y="16" width="128" height="16" rx="8"></rect><rect x="0" y="56" width="128" height="16" rx="8"></rect><rect x="0" y="96" width="128" height="16" rx="8"></rect></svg>';
	return element;
}

module.exports = MenuIcon;