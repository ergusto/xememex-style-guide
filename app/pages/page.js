// renderFunction is expected to return a single node
function Page(name,renderFunction) {
	this.name = name;
	this.render = renderFunction;
	this.element = null;
}

module.exports = Page;