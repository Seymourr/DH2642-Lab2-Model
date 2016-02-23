//DinnerModel Object constructor
var DinnerModel = function() {
 	
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var numberOfGuests = 0;
	var selectedDishes = [];
	var listeners = [];

	//Add observer to list of listeners
	this.addObserver = function(observer){
		listeners.push(observer);
	};

	//Private function, notify all observers on this model
	this.notifyObservers = function(obj) {
		for(var i = 0; i < listeners.length; i++) {
			listeners[i].update(this,obj);
		}
	};

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		var url = "http://api.bigoven.com/recipe/" + id + "?api_key=18f3cT02U9f6yRl3OKDpP8NA537kxYKu&pg=1&rpp=1";
	//	console.log(url);
		$.ajax({
			context: this,
			dataType: "json",
			url: url,
			success: function (data) {
				// dishes has been loaded
				console.log(data);
				this.notifyObservers(data);
			},
			fail: function () {
				// notify that the loading failed
				this.notifyObservers(null);
			}
		});
	};

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		this.notifyObservers(num);
	};

	// should return 
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	};

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		for(i = 0; i < selectedDishes.length; i++){
			if(selectedDishes[i]['Category'] === type) {
				return selectedDishes[i];
			}
		}
		return null;
	};

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes;
	};


	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO: Concatenate similar ingredients
		var ingredientList = [];
		for(i = 0; i < selectedDishes.length; i++){
			var ing = selectedDishes[i]['Ingredients'];
			for(j = 0; j < ing.length; j++){
				ingredientList.push(ing[j]);
			}
		}
		return ingredientList;
	};

	this.getIngredientPrice = function(ing) {
		return ing['Quantity']; //Quantity is ingredient price..
	}
	//Return the cost of a specific dish 
	this.getDishPrice = function(dish) {
		var totalPrice = 0;
		for (i = 0; i < dish['Ingredients'].length; i++) {
			totalPrice += dish['Ingredients'][i]['Quantity']; //Quantity used as currency..
		}
		return totalPrice;
	};

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		for(var i = 0; i < selectedDishes.length; i++){
			var dish = selectedDishes[i];
			totalPrice += dish['portions']*this.getDishPrice(dish);
		}
		
		return totalPrice;

	};

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(dish) {
		dish['portions'] = numberOfGuests;
		var currentDish = this.getSelectedDish(dish['Category']);

		if(currentDish !== null){
			this.removeDishFromMenu(currentDish['RecipeID']);
		}

		selectedDishes.push(dish);
		this.notifyObservers(dish);
	};

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var removed;
		for (i = 0; i < selectedDishes.length; i++) {
			if (selectedDishes[i]['RecipeID'] === id) {
				removed = selectedDishes.splice(i, 1);
				break;
			}
		}
		this.notifyObservers(removed);
	};

	this.getAllDishes = function (searchField, category) {
		var url = "http://api.bigoven.com/recipes?api_key=18f3cT02U9f6yRl3OKDpP8NA537kxYKu&pg=1&rpp=200";

		if (searchField !== undefined && searchField.length > 0) {
			url += "&title_kw=" + searchField;
		}

		if (category !== undefined && category.length > 0) {
			url += "&include_primarycat=" + category;
		}

		$.ajax({
			context: this,
			dataType: "json",
			url: url,
			timeout: 5000,
			success: function (data) {
				// dishes has been loaded
			//	console.log(data);
				this.notifyObservers(data);
			},
			error: function () {
				// notify that the loading failed
				this.notifyObservers(null);
			}
		});
	};

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllFilteredDishes = function (type, filter) {
		this.getAllDishes(filter, type);
	};
};