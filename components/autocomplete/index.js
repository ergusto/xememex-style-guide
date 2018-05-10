var templater = require("../../app/templater"),
	utils = require("../../app/utils");

var isArray = utils.isArray,
	removeChildren = utils.removeChildren,
	difference = utils.difference;

var div = templater.div,
	input = templater.input,
	ul = templater.ul,
	li = templater.li,
	containerClass = "autocomplete__container inline-block relative",
	defaultInputClass = "autocomplete__input",
	listContainerClass = "autocomplete__choices-container absolute left right hidden",
	defaultListClass = "autocomplete__choices-list margin-bottom background-color-white",
	defaultItemClass = "autocomplete__item",
	defaultSelectedItemClass = "autocomplete__item--selected",
	defaultNoItemsClass = "autocomplete__no-items",
	clickEventType = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';

function Autocomplete(options) {
	this.items = options.items || [];
	this.filteredItems = [];
	this.exclude = options.exclude || [];
	this.selectedItems = [];
	this.placeholder = options.placeholder;
	this.defaultValue = options.defaultValue;
	this.inputClass = options.inputClass;
	this.listClass = options.listClass;
	this.itemClass = options.itemClass;
	this.itemTemplate = options.itemTemplate;
	this.noItemsClass = options.noItemsClass;
	this.filter = options.filter;
	this.onSelect = options.onSelect;
	this.selectedItemIndex = 0;
	this.inputValue = '';

	this.element = this.render();
	this.documentClick = this.documentClick.bind(this);
	this.addEventListeners();
}

Autocomplete.prototype.render = function() {
	var inputClass = defaultInputClass,
		listClass = defaultListClass;

	if(this.inputClass) {
		inputClass += " ";
		inputClass += this.inputClass;
	}

	if(this.listClass) {
		listClass += " ";
		listClass += this.listClass;
	}

	return div({
		class: containerClass,
		children: [
			input({
				class: inputClass,
				value: this.defaultValue ? this.defaultValue : "",
				placeholder: this.placeholder ? this.placeholder : "",
				ref: { name: "input", context: this }
			}),
			div({
				class: listContainerClass,
				ref: { name: "listContainer", context: this },
				content: ul({
					class: listClass,
					ref: { name: "list", context: this },
				})
			})
		]
	});
};

Autocomplete.prototype.removeItems = function() {
	removeChildren(this.list);
};

Autocomplete.prototype.unselect = function(item) {
	var excludeIndex = this.exclude.indexOf(item);
	if(excludeIndex >= 0) {
		this.exclude.splice(excludeIndex, 1);
	}

	var selectedIndex = this.selectedItems.indexOf(item);
	if(selectedIndex >= 0) {
		this.selectedItems.splice(selectedIndex, 1);
	}
};

Autocomplete.prototype.onItemSelect = function(item) {
	this.exclude.push(item);
	this.selectedItems.push(item);
	this.onSelect(item,this.unselect.bind(this,item));
	this.hideList();
	this.input.value = "";
};

Autocomplete.prototype.setSelectedItemIndex = function(index) {
	this.selectedItemIndex = index;
	this.renderItems()
};

Autocomplete.prototype.clearSelectedItemIndex = function() {
	this.selectedItemIndex = null;
};

Autocomplete.prototype.getFilteredItemByIndex = function(index) {
	return this.filteredItems[index];
};

Autocomplete.prototype.renderItems = function() {
	var self = this,
		itemClass = defaultItemClass,
		selectedItemClass = defaultSelectedItemClass;

	this.removeItems();

	if(this.filteredItems.length) {
		if(this.itemClass) {
			itemClass += " ";
			itemClass += this.itemClass;
		}

		if(this.selectedItemClass) {
			selectedItemClass += " ";
			selectedItemClass += this.selectedItemClass;
		}

		difference(this.filteredItems,this.exclude).map(function(item,index) {
			var element;

			if(self.itemTemplate) {
				element = self.itemTemplate(item,self.onItemSelect.bind(self,item,index),index);
			} else {
				element = li({
					class: itemClass,
					text: item,
					click: function(event) {
						self.onItemSelect.bind(self,item,index);
					}
				});
			}

			if(self.selectedItemIndex === index) {
				element.classList.add(selectedItemClass);
			}

			element.addEventListener("mouseover",function(event) {
				self.setSelectedItemIndex(index);
			});

			element.addEventListener("mouseout",function(event) {
				self.clearSelectedItemIndex();
			});

			self.list.appendChild(element);
		});

		this.showList();
	} else {
		this.renderNoItemsFound();
	}
};

Autocomplete.prototype.renderNoItemsFound = function() {
	var noItemsClass = defaultNoItemsClass;

	if(this.noItemsClass) {
		noItemsClass += " ";
		noItemsClass += this.noItemsClass;
	}

	this.removeItems();

	this.list.appendChild(div({
		class: noItemsClass,
		text: "No items found"
	}));

	this.showList();
};

Autocomplete.prototype.listIsOpen = function() {
	return !this.listContainer.classList.contains("hidden");
}

Autocomplete.prototype.showList = function() {
	this.listContainer.classList.remove("hidden");
	document.addEventListener(clickEventType,this.documentClick);
};

Autocomplete.prototype.hideList = function() {
	this.listContainer.classList.add("hidden");
	document.removeEventListener(clickEventType,this.documentClick);
};

Autocomplete.prototype.documentClick = function(event) {
	if(!this.element.contains(event.target)) {
		event.stopPropagation();
		this.hideList();
	}
};

Autocomplete.prototype.filterItems = function(value) {
	if(!value) {
		this.filteredItems = [];
	} else if(this.filter) {
		this.filteredItems = this.filter(this.items,value);
	} else {
		this.filteredItems = this.items.filter(function(item) {
			return item.startsWith(value);
		});
	}
	
	this.renderItems();
};

Autocomplete.prototype.inputKeyDownHandler = function(event) {
	if(event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter") {
		event.preventDefault();
	}
};

Autocomplete.prototype.inputEventHandler = function(event) {
	var value = event.target.value;
	switch(event.key) {
		case "ArrowDown":
			if(this.selectedItemIndex === this.filteredItems.length) {
				this.selectedItemIndex = 0;
			} else {
				this.selectedItemIndex++;
			}
			this.renderItems();
			return;
		case "ArrowUp":
			if(this.selectedItemIndex === 0) {
				this.selectedItemIndex = this.filteredItems.length;
			} else {
				this.selectedItemIndex--;
			}
			this.renderItems();
			return;
		case "Enter":
			var item = this.getFilteredItemByIndex(this.selectedItemIndex);
			this.onItemSelect(item);
			return;
	}

	if(value.length) {
		this.filterItems(value);
	} else {
		this.filterItems('');
		this.hideList();
	}
};

Autocomplete.prototype.addEventListeners = function() {
	var self = this;
	this.input.addEventListener("focus",this.inputEventHandler.bind(this));
	this.input.addEventListener("keyup",this.inputEventHandler.bind(this));
	this.input.addEventListener("keydown",this.inputKeyDownHandler.bind(this));
};

module.exports = Autocomplete;