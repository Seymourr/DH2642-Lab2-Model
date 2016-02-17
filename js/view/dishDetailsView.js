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

    this.detailedDish = model.getSelectedDish("starter"); //TODO: Get clicked dish.. somehow..

    this.appendDetailedView = function(dish) {
        this.ingredients.empty();
        this.name.text(dish["name"]);
        this.cost.text(dish["portions"] * model.getDishPrice(dish["id"]));
        this.image.attr("src", "images/" + dish["image"]);
        this.description.text(dish["description"]);
        this.preparation.text(dish["description"]);
        this.people.text(dish['portions']);

        for (i = 0; i < dish["ingredients"].length; i++) {
            var currentDish = dish["ingredients"][i];
            var tr = $("<tr>");
            tr.append("<td>" + dish["portions"] * currentDish["quantity"] + " " + currentDish["unit"] + "</td>");
            tr.append("<td>" + currentDish["name"] + "</td>");
            tr.append("<td> SEK " + dish["portions"] * currentDish["price"] + "</td>");
            this.ingredients.append(tr);
        }
    };

    this.appendDetailedView(this.detailedDish);

    model.addObserver(function (model, obj) {
        if (typeof obj === 'number') {
            this.appendDetailedView(this.detailedDish);
        }
    });

    this.show = function () {
        container.css("display", "inline");
    }

    this.hide = function () {
        container.css("display", "none");
    }
};