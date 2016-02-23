var OverviewView = function (container, model) {
	container.css("display", "inline");

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that respond to interaction)
	this.starter = container.find("#starter");
	this.mainDish = container.find("#mainDish");
	this.dessert = container.find("#dessert");

	this.totalCost = container.find("#totalDiv");

	this.printButton = container.find("#printButton");

	this.setDish = function (dishref, ref) {
		var dish = model.getSelectedDish(ref);
		if (dish === null) {
			dishref.find("h6").text("0 SEK");
			dishref.find("img").attr("src", "images/nullImage.png");
			dishref.find("h3").text("");
		} else {
			dishref.find("h6").text((dish['portions'] * model.getDishPrice(dish)).toFixed(2) + " SEK");
			dishref.find("img").attr("src", dish['ImageURL']);
			dishref.find("h3").text(dish['Title']);
		}
	};

	// Regardless of change, update view
	this.update = function (model, obj) {
		this.setDish(this.starter, "Appetizers");
		this.setDish(this.mainDish, "Main Dish");
		this.setDish(this.dessert, "Desserts");
		this.totalCost.text("Total: " + model.getTotalMenuPrice().toFixed(2) + " SEK");
	};

	this.update(model);

	model.addObserver(this);


	this.show = function () {
		container.css("display", "inline");
	};

	this.hide = function () {
		container.css("display", "none");
	}
};
