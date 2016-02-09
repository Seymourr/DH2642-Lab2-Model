var DishDetailsView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
    this.backButton = container.find("#back-button");
    this.confirmButton = container.find("#confirm-button");

    this.name = container.find("#dish");
    this.cost = container.find("#ingredients-total-cost");
    this.image = container.find("#dish-image");
    this.description = container.find("#description");
    this.people = container.find("#people-title");
    this.preparation = container.find("#preparation");
    this.ingredients = container.find("table");

    var dish = model.getDish(1); // arbitrary dish while controller isn't implemented
    this.name.text(dish["name"]);
    this.cost.val(model.getDishPrice(dish["id"]));
    this.image.attr("src", "images/" + dish["image"]);
    this.description.text(dish["description"]);
    this.preparation.text(dish["description"]);
    this.people.text(model.getNumberOfGuests());

    for (i = 0; i < dish["ingredients"].length; i++) {
        var currentDish = dish["ingredients"][i];

        var tr = $("<tr>");
        tr.append("<td>" + currentDish["quantity"] + " " + currentDish["unit"] + "</td>");
        tr.append("<td>" + currentDish["name"] + "</td>");
        tr.append("<td>" + currentDish["price"] + "</td>");

        this.ingredients.append(tr);
    }
};