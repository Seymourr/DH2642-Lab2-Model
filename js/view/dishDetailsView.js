var DishDetailsView = function (container, model) {
	container.css("display", "inline");

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that respond to interaction)
	this.rightPane = container.find("#right-pane");
	this.backButton = container.find("#back-button");
	this.confirmButton = container.find("#confirm-button");
	this.name = container.find("#dish");
	this.cost = container.find("#ingredients-total-cost");
	this.image = container.find("#dish-image");
	this.description = container.find("#description");
	this.people = container.find("#people-title");
	this.preparation = container.find("#preparation");
	this.ingredients = container.find("table");
	this.spinner = $(new Spinner().spin().el);

	this.appendDetailedView = function (dish) {
		this.ingredients.empty();
		this.description.empty();
		this.name.text(dish['Title']);
		this.cost.text((model.getNumberOfGuests() * model.getDishPrice(dish)).toFixed(2));
		this.image.hide();
		this.image.load(function () {
			container.find("#dish-image").show();
		});
		this.image.attr("src", dish['ImageURL']);
		this.description.text(dish['Description']);
		this.preparation.text(dish['Instructions']);
		this.people.text(model.getNumberOfGuests());

		for (i = 0; i < dish['Ingredients'].length; i++) {
			var currentIngredient = dish['Ingredients'][i];
			var tr = $("<tr>");
			var unit = currentIngredient['Unit'];
			if (unit === null) {
				unit = "pc";
			}
			tr.append("<td>" + (model.getNumberOfGuests() * currentIngredient['Quantity']).toFixed(2) + " " + unit + "</td>");
			tr.append("<td>" + currentIngredient['Name'] + "</td>");
			tr.append("<td> SEK " + (model.getNumberOfGuests() * model.getIngredientPrice(currentIngredient)).toFixed(2) + "</td>");
			this.ingredients.append(tr);
		}

		this.rightPane.css("display", "inline");
	};

	this.setLoading = function () {
		this.rightPane.css("display", "none");
		container.css("display", "inline");
	};

	this.setFailedRequest = function () {
		this.ingredients.empty();
		this.description.empty();
		this.preparation.empty();
		this.ingredients.append('<span class="glyphicon glyphicon-alert" aria-hidden="true"></span>');
		this.ingredients.append("Request failed. Make sure your internet connection is working and make another search.");
		this.description.append('<span class="glyphicon glyphicon-alert" aria-hidden="true"></span>');
		this.description.append("Request failed. Make sure your internet connection is working and make another search.");

		this.rightPane.css("display", "inline");
	};


	this.detailedDish = null;

	this.update = function (model, obj, status) {
		this.spinner.css("display", "none");
		this.rightPane.css("display", "inline");
		if (typeof obj === 'number') {
			this.appendDetailedView(this.detailedDish);
		} else if (typeof obj === 'object' && status === model.getSingleMessage) {
			this.detailedDish = obj;
			this.appendDetailedView(this.detailedDish);
		} else if (obj === null && status === model.errorMessage) {
			this.setFailedRequest();
		}
	};

	container.append(this.spinner);
	model.addObserver(this);

	this.show = function (dish) {
		this.spinner.css("display", "inline");
		this.setLoading();
		model.getDish(dish);
	};

	this.hide = function () {
		container.css("display", "none");
	}
};
