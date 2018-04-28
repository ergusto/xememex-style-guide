var templater = require("../templater");

var div = templater.div;

function InfoIcon(className) {
	var _className = "icon icon-info";

	if(className) {
		_className = _className + " " + className;
	}
	var element = div({ class: _className });
	element.innerHTML = '<svg viewBox="0 0 128 128" width="16pt" height="16pt"><g fill-rule="evenodd"><g transform="translate(0.049406, 0.000000)"><path d="M64,128 C99.346224,128 128,99.346224 128,64 C128,28.653776 99.346224,0 64,0 C28.653776,0 0,28.653776 0,64 C0,99.346224 28.653776,128 64,128 Z M64,112 C90.509668,112 112,90.509668 112,64 C112,37.490332 90.509668,16 64,16 C37.490332,16 16,37.490332 16,64 C16,90.509668 37.490332,112 64,112 Z"></path><circle cx="64" cy="32" r="8"></circle><rect x="56" y="48" width="16" height="56" rx="8"></rect></g></g></svg>';
	return element;
}

module.exports = InfoIcon;