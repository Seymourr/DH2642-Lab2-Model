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
        this.description.empty();
      //  $('#loadingscreenSpinner').remove();
        this.name.text(dish['Title']);
        this.cost.text(model.getNumberOfGuests() * model.getDishPrice(dish));
        this.image.attr("src", dish['ImageURL']);
        this.description.text(dish['Description']);
        this.preparation.text(dish['Instructions']);
        this.people.text(model.getNumberOfGuests());

        for (i = 0; i < dish['Ingredients'].length; i++) {
            var currentIngredient = dish['Ingredients'][i];
            var tr = $("<tr>");
            var unit = currentIngredient['Unit'];
            if(unit === null) {
                unit = "pc";
            }
            tr.append("<td>" + model.getNumberOfGuests() * currentIngredient['Quantity'] + " " + unit + "</td>");
            tr.append("<td>" + currentIngredient['Name'] + "</td>");
            tr.append("<td> SEK " + model.getNumberOfGuests() * model.getIngredientPrice(currentIngredient) + "</td>");
            this.ingredients.append(tr);
        }
    };

  //  this.appendDetailedView(this.detailedDish);

    this.setLoading = function () {
        var spinner = new Spinner().spin();
    //    console.log(spinner);
      //  spinner.setAttribute("id", "loadingscreenSpinner");
     //   this.ingredients.append($(spinner.el));
        this.description.append($(spinner.el));
    };

    this.setFailedRequest = function () {
        this.ingredients.empty();
        this.ingredients.append('<span class="glyphicon glyphicon-alert" aria-hidden="true"></span>');
        this.ingredients.append("Request failed. Make sure your internet connection is working and make another search.");
        this.description.append('<span class="glyphicon glyphicon-alert" aria-hidden="true"></span>');
        this.description.append("Request failed. Make sure your internet connection is working and make another search.");
    };


    this.detailedDish = null;

	this.update = function (model, obj) {
        console.log(obj);
        if (typeof obj === 'number') {
            this.appendDetailedView(this.detailedDish);
        } else if(obj["RecipeID"] !== undefined){
            this.detailedDish = obj;
            this.appendDetailedView(this.detailedDish);
        } else if(obj['Results'] === undefined){
            //Show error view
            this.setFailedRequest();
        }
    };
    
    model.addObserver(this);
    

    this.show = function (dish) {
        container.css("display", "inline");
        this.setLoading();
        model.getDish(dish);
    }

    this.hide = function () {
        container.css("display", "none");
    }
};
