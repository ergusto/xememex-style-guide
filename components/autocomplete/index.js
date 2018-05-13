var templater = require("../../app/templater"),
	utils = require("../../app/utils");

var isArray = utils.isArray,
	isObject = utils.isObject,
	removeChildren = utils.removeChildren,
	clone = utils.clone,
	generateUUID = utils.generateUUID;

var div = templater.div,
	input = templater.input,
	ul = templater.ul,
	li = templater.li,
	anchor = templater.a;

var uuidProperty = "--autocomplete-uuid--",
	itemIdDataAttribute = "data-autocomplete-item-id",
	containerClass = "autocomplete__container inline-block relative",
	defaultInputClass = "autocomplete__input",
	listContainerClass = "autocomplete__choices-container hidden",
	defaultListClass = "autocomplete__choices-list",
	defaultItemClass = "autocomplete__item",
	defaultSelectedItemClass = "autocomplete__item--selected",
	defaultNoItemsClass = "autocomplete__no-items",
	clickEventType = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';

function cloneAndRemoveUUID(item) {
	if(isObject(item)) {
		var cloned = clone(item);
		delete cloned[uuidProperty];
		return cloned;
	}
	return item;
}

function Autocomplete(options) {
	this.items = [];
	this.filteredItems = [];
	this.chosenItems = [];
	this.activeItems = [];

	this.selectedItemId = null;
	this.onSelect = options.onSelect;

	this.inputClass = options.inputClass;
	this.listClass = options.listClass;
	this.itemClass = options.itemClass;
	this.noItemsClass = options.noItemsClass;
	this.selectedItemClass = options.selectedItemClass;

	this.defaultValue = options.defaultValue;
	this.placeholder = options.placeholder;

	this.itemTemplate = options.itemTemplate;
	this.filter = options.filter;

	if(options.items) {
		this.loadItems(options.items);
	}

	if(!this.filter) {
		throw new Errro("Autocomplete component requires a filter function");
	}

	if(!this.itemTemplate) {
		throw new Errro("Autocomplete component requires a template function");
	}

	if(!this.onSelect) {
		throw new Errro("Autocomplete component requires an onSelect function");
	}

	this.mouseoutEvent = this.mouseoutEvent.bind(this);
	this.documentClick = this.documentClick.bind(this);

	this.element = this.render();
	this.addEventListeners();
}

Autocomplete.prototype.loadItems = function(items) {
	if(isArray(items) && items.length) {
		items.forEach(function(item) {
			if(!isObject(item)) {
				throw new Error("Expected autocomplete item to be an object");
			}

			if(!item[uuidProperty]) {
				item[uuidProperty] = generateUUID();
			}

			this.items.push(item);
		}, this);
	}
};

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
				ref: { name: "input", context: this },
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
	var itemId = item[uuidProperty];
	this.removeChosenItemById(itemId);
};

Autocomplete.prototype.removeFilteredItemById = function(id) {
	this.filteredItems = this.filteredItems.filter(function(item) {
		return item[uuidProperty] !== id;
	});
};

Autocomplete.prototype.removeChosenItemById = function(id) {
	this.chosenItems = this.chosenItems.filter(function(item) {
		return item[uuidProperty] !== id;
	});
};

Autocomplete.prototype.addFilteredItem = function(item) {
	this.filteredItems.push(item);
};

Autocomplete.prototype.addChosenItem = function(item) {
	this.chosenItems.push(item);
};

Autocomplete.prototype.getItemById = function(id) {
	return this.items.find(function(item) {
		return item[uuidProperty] === id;
	});
};

Autocomplete.prototype.getFilteredItemById = function(id) {
	return this.filteredItems.find(function(item) {
		return item[uuidProperty] === id;
	});
};

Autocomplete.prototype.onItemSelect = function(item) {
	var itemId = item[uuidProperty];
	this.removeFilteredItemById(itemId);
	this.addChosenItem(item);

	this.onSelect(cloneAndRemoveUUID(item),this.unselect.bind(this,item));

	this.input.value = "";
	this.renderItems();
	this.hideList();
};

Autocomplete.prototype.setSelectedItemId = function(id) {
	this.selectedItemId = id;
};

Autocomplete.prototype.clearSelectedItemId = function() {
	this.selectedItemId = null;
};

Autocomplete.prototype.getSelectedItem = function() {
	if(this.selectedItemId) {
		return this.getItemById(this.selectedItemId);
	}
	return null;
};

Autocomplete.prototype.renderItems = function() {
	var itemClass = defaultItemClass,
		selectedItemClasses = defaultSelectedItemClass;
	
	this.removeItems();

	this.activeItems = this.filteredItems.filter(function(item) {
		return !this.chosenItems.filter(function(chosenItem) {
			return item[uuidProperty] === chosenItem[uuidProperty];
		}).length;
	}, this);

	if(this.activeItems.length) {
		if(this.itemClass) {
			itemClass += " ";
			itemClass += this.itemClass;
		}

		if(this.selectedItemClass) {
			selectedItemClasses += " ";
			selectedItemClasses += this.selectedItemClass;
		}

		this.activeItems.forEach(function(item,index) {
			var itemId = item[uuidProperty],
				parent = li({
					[itemIdDataAttribute]: itemId
				}),
				element = this.itemTemplate(item,this.onItemSelect.bind(this,item));

			parent.appendChild(element);

			if(this.selectedItemId === item[uuidProperty]) {
				selectedItemClasses.split(" ").map(function(selectedItemClass) {
					parent.classList.add(selectedItemClass);
				});
			}

			parent.addEventListener("mouseover", this.activateSelectedItem.bind(this,itemId));

			parent.addEventListener("mouseout",this.mouseoutEvent);

			this.list.appendChild(parent);
		}, this);

		this.showList();
	} else {
		this.renderNoItemsFound();
	}
};

Autocomplete.prototype.mouseoutEvent = function() {
	this.clearSelectedItemId();
};

Autocomplete.prototype.addSelectedItemClass = function(itemId) {
	var selectedItemClass = defaultSelectedItemClass;

	if(this.selectedItemClass) {
		selectedItemClass += " ";
		selectedItemClass += this.selectedItemClass;
	}

	var selectedItemClasses = selectedItemClass.split(" "),
		item = this.list.querySelector("li[" + itemIdDataAttribute + "='" + itemId + "']"),
		selector = "li[" + itemIdDataAttribute + "='" + itemId + "']";

	if(item) {
		selectedItemClasses.forEach(function(itemClass) {
			item.classList.add(itemClass);
		});
	}
};

Autocomplete.prototype.removeSelectedItemClass = function() {
	var selectedItemClass = defaultSelectedItemClass;

	if(this.selectedItemClass) {
		selectedItemClass += " ";
		selectedItemClass += this.selectedItemClass;
	}

	var selectedItemClasses = selectedItemClass.split(" "),
		item = this.list.querySelector("." + defaultSelectedItemClass);

	if(item) {
		selectedItemClasses.forEach(function(itemClass) {
			item.classList.remove(itemClass);
		});
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
	this.clearSelectedItemId();
	document.removeEventListener(clickEventType,this.documentClick);
};

Autocomplete.prototype.documentClick = function(event) {
	if(!this.element.contains(event.target)) {
		this.hideList();
	}
};

Autocomplete.prototype.filterItems = function(value) {
	value = value.toLowerCase();
	this.filteredItems = value.length ? this.filter(this.items,value) : [];
	this.renderItems();
};

Autocomplete.prototype.getChosenItems = function() {
	return this.chosenItems.slice();
};

Autocomplete.prototype.inputKeyDownHandler = function(event) {
	if(event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter") {
		event.preventDefault();
	}
};

Autocomplete.prototype.getActiveItemIndexById = function(id) {
	return this.activeItems.map(function(item) {
		return item[uuidProperty];
	}).indexOf(id);
};

Autocomplete.prototype.getNextActiveItem = function(item) {
	var itemIndex = this.getActiveItemIndexById(item[uuidProperty]);
	if(itemIndex === (this.activeItems.length - 1)) {
		return this.activeItems[0];
	}
	return this.activeItems[itemIndex + 1];
};

Autocomplete.prototype.getPreviousActiveItem = function(item) {
	var itemIndex = this.getActiveItemIndexById(item[uuidProperty]);
	if(itemIndex === 0) {
		return this.activeItems[this.activeItems.length - 1];
	}
	return this.activeItems[itemIndex - 1];
};

Autocomplete.prototype.activateSelectedItem = function(itemId) {
	this.removeSelectedItemClass();
	this.setSelectedItemId(itemId);
	this.addSelectedItemClass(itemId);
};

Autocomplete.prototype.inputKeyupHandler = function(event) {
	var value = event.target.value;

	if(this.activeItems.length) {
		var firstItem = this.activeItems[0],
			lastItem = this.activeItems[this.activeItems.length - 1],
			selectedItem = this.getSelectedItem();

		switch(event.key) {
			case "ArrowDown":
				if(selectedItem) {
					var nextItem = this.getNextActiveItem(selectedItem);
					if(nextItem) {
						nextItemId = nextItem[uuidProperty];
						this.activateSelectedItem(nextItemId);
					}
				} else {
					var firstItemId = firstItem[uuidProperty];
					this.activateSelectedItem(firstItemId);
				}
				return;
			case "ArrowUp":
				if(selectedItem) {
					var previousItem = this.getPreviousActiveItem(selectedItem);
					if(previousItem) {
						previousItemId = previousItem[uuidProperty];
						this.activateSelectedItem(previousItemId);
					}
				} else {
					var lastItemId = lastItem[uuidProperty];
					this.activateSelectedItem(lastItemId);
				}
				return;
			case "Enter":
				if(selectedItem) {
					this.onItemSelect(selectedItem);
				}
				return;
		}
	}

	if(value.length) {
		this.filterItems(value);
	} else {
		this.filterItems('');
		this.hideList();
	}
};

Autocomplete.prototype.inputFocusHandler = function(event) {
	if(event.target.value.length) {
		this.showList();
	}
};

Autocomplete.prototype.addEventListeners = function() {
	this.input.addEventListener("focus",this.inputFocusHandler.bind(this));
	this.input.addEventListener("keyup",this.inputKeyupHandler.bind(this));
	this.input.addEventListener("keydown",this.inputKeyDownHandler.bind(this));
};

module.exports = Autocomplete;