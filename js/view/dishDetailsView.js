var DishDetailsView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
    this.rightPane = container.find("right-pane");
    this.backButton = container.find("#back-button");
    this.confirmButton = container.find("#confirm-button");
    this.name = container.find("#dish");
    this.cost = container.find("#ingredients-total-cost");
    this.image = container.find("#dish-image");
    this.description = container.find("#description");
    this.people = container.find("#people-title");
    this.preparation = container.find("#preparation");
    this.ingredients = container.find("table");

 //   this.detailedDish = model.getSelectedDish("starter"); //TODO: Get clicked dish.. somehow.. (REMOVE?)

    this.appendDetailedView = function(dish) {
        this.ingredients.empty();
        this.name.text(dish['Title']);
        this.cost.text(model.getNumberOfGuests() * model.getDishPrice(dish['RecipeID']));
        this.image.attr("src", dish['ImageURL']);
        this.description.text(dish['Description']);
        this.preparation.text(dish['Instructions']);
        this.people.text(model.getNumberOfGuests());

        for (i = 0; i < dish['Ingredients'].length; i++) {
            var currentIngredient = dish['Ingredients'][i];
            var tr = $("<tr>");
            tr.append("<td>" + model.getNumberOfGuests() * currentIngredient['Quantity'] + " " + currentIngredient['Unit'] + "</td>");
            tr.append("<td>" + currentIngredient['IngredientInfo']['name'] + "</td>");
            tr.append("<td> SEK " + model.getNumberOfGuests() * model.getIngredientPrice(currentIngredient) + "</td>");
            this.ingredients.append(tr);
        }
    };

  //  this.appendDetailedView(this.detailedDish);


	this.update = function (model, obj) {
        if (typeof obj === 'number') {
            this.appendDetailedView(this.detailedDish);
        }
    };
    
    model.addObserver(this);
    
    
   

    this.show = function (dish) {
        container.css("display", "inline");
        this.detailedDish = model.getDish(dish);
        this.appendDetailedView(this.detailedDish);
    }

    this.hide = function () {
        container.css("display", "none");
    }
};
