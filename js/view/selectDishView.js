var SelectDishView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
    this.searchText = container.find("#search-text");
    this.searchButton = container.find("#search-button");
    this.dropdown = container.find("#dropdown");
    this.browsingPane = container.find("#browsing-pane");

    model.getAllDishes();

    this.appendDishes = function(dishes){
        this.browsingPane.empty();
        for (i = 0; i < dishes.length; i++) {
            var course = $("<div class='course col-xs-6 col-sm-4 col-lg-2'>");
            var imageBox = $("<div class='image-box'>").data('RecipeID', dishes[i]['RecipeID']);

            var img = $("<img>");
            img.attr("src", dishes[i]['ImageURL']); //CHANGED TO ONLINE SRC
            var name = $("<h3>");
            name.text(dishes[i]["name"]);
            var description = $("<p>");
            description.text(dishes[i]['Description']);

            imageBox.append(img);
            imageBox.append(name);
            course.append(imageBox);
            course.append(description);
            this.browsingPane.append(course);
        }
    };

    this.show = function () {
        container.css("display", "inline");
    };

    this.hide = function () {
        container.css("display", "none");
    };

    model.addObserver(this);

    this.update = function (model, obj) {
        if (obj === null) {
            // TODO: Do something reasonable
        } else if (typeof obj === 'object') {
            //Something was removed or added to the menu
            this.appendDishes(obj);
        }

        this.cost.text("SEK " + model.getTotalMenuPrice());
    };
};
