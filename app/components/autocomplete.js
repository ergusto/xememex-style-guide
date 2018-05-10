var templater = require("../templater"),
	AutocompleteComponent = require("../../components/autocomplete");

var div = templater.div,
	button = templater.button,
	fieldset = templater.fieldset,
	label = templater.label,
	h1 = templater.h1,
	h2 = templater.h2,
	h3 = templater.h3,
	paragraph = templater.p,
	span = templater.span,
	pre = templater.pre,
	code = templater.code,
	br = templater.br,
	form = templater.form,
	ul = templater.ul,
	li = templater.li,
	input = templater.input,
	fragment = templater.fragment,
	anchor = templater.a;


function Autocomplete() {
	this.element = this.render();
}

Autocomplete.prototype.intro = function() {
	var self = this,
		autocomplete = new AutocompleteComponent({
		inputClass: "field-input",
		placeholder: "Fruit",
		listClass: "box-shadow",
		noItemsClass: "padding-all-medium background-color-white",
		items: ['apples', 'apricots', 'avocados','asparagus', 'oranges', 'pears'],
		filter: function(items,value) {
			return items.filter(function(item) {
				return item.startsWith(value);
			});
		},
		onSelect: function(item, unselect) {
			var item = li({
				text: item,
				click: function(event) {
					unselect();
					self.addedFruit.removeChild(item);
				}
			});

			self.addedFruit.appendChild(item);
		},
		itemTemplate: function(item,selectItem) {
			return li({
				class: "item padding-all-medium background-color-white cursor-pointer",
				children: [
					anchor({ text: item, click: selectItem })
				]
			})
		}
	});

	return fragment([
		h1({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Autocomplete" }),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "A versatile autocomplete Javascript component."
		}),
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Usage" }),
		pre({
			class: "preformatted margin-vertical padding-all-small line-height-copy",
			children: [
				code({ class: "code", text: "var fruitChoices = ['apples', 'apricots', 'avocados','asparagus', 'oranges', 'pears'];" }),
				br(),
				br(),
				code({ class: "code", text: "var autocomplete = new Autocomplete({"}),
				br(),
				code({ class: "code", text: "	items: fruitChoices,"}),
				br(),
				code({ class: "code", text: "	filter: function(items,value) {"}),
				br(),
				code({ class: "code", text: "		return items.filter(function(item) {"}),
				br(),
				code({ class: "code", text: "			return item.startsWith(value);"}),
				br(),
				code({ class: "code", text: "		});"}),
				br(),
				code({ class: "code", text: "	},"}),
				br(),
				code({ class: "code", text: "	onSelect: function(item,unselect) {"}),
				br(),
				code({ class: "code", text: "		var element = document.createElement(\"li\");"}),
				br(),
				code({ class: "code", text: "		var text = document.createTextNode(item.text);"}),
				br(),
				code({ class: "code", text: "		element.appendChild(text);"}),
				br(),
				code({ class: "code", text: "		element.addEventListener(\"click\", function() {"}),
				br(),
				code({ class: "code", text: "			unselect()"}),
				br(),
				code({ class: "code", text: "			addedFruitList.removeChild(element)"}),
				br(),
				code({ class: "code", text: "		})"}),
				br(),
				code({ class: "code", text: "		addedFruitList.appendChild(element);"}),
				br(),
				code({ class: "code", text: "	},"}),
				br(),
				code({ class: "code", text: "	itemTemplate: function(item,selectItem) {"}),
				br(),
				code({ class: "code", text: "		var element = document.createElement(\"li\");"}),
				br(),
				code({ class: "code", text: "		var text = document.createTextNode(item.text);"}),
				br(),
				code({ class: "code", text: "		element.appendChild(text);"}),
				br(),
				code({ class: "code", text: "		element.addEventListener(\"click\", selectItem);"}),
				br(),
				code({ class: "code", text: "		return element;"}),
				br(),
				code({ class: "code", text: "	}"}),
				br(),
				code({ class: "code", text: "});"}),
				br(),
				br(),
				code({ class: "code", text: "autocomplete.element"}),
			]
		}),
		paragraph({
			class: "margin-vertical line-height-copy",
			text: "Add the autocomplete element into the DOM."
		}),
		h2({ class: "margin-bottom padding-bottom border-bottom border-color-grey", text: "Example" }),
		autocomplete.element,
		div({
			children: [
				h3({ class: "margin-vertical", text: "Added fruit" }),
				ul({
					class: "margin-vertical",
					ref: { name: "addedFruit", context: this }
				})
			]
		})
	]);
};

Autocomplete.prototype.render = function() {
	return div({
		class: "max-width-7 centered padding-all padding-all-2-phablet margin-vertical-2 background-color-white border-all border-color-grey box-shadow border-radius-all",
		children: [this.intro()]
	});
};

module.exports = Autocomplete;