var SelectDishView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
    this.searchText = container.find("#search-text");
    this.searchButtom = container.find("#search-button");
    this.dropdown = container.find("#dropdown");
    this.browsingPane = container.find("#browsing-pane");

    var dishes = model.getAllDishes();
    for (i = 0; i < dishes.length; i++) {
        var course = $("<div class='course col-xs-6 col-sm-4 col-lg-2'>");
        var imageBox = $("<div class='image-box'>");

        var img = $("<img>");
        img.attr("src", "images/" + dishes[i]["image"]);
        var name = $("<h3>");
        name.text(dishes[i]["name"]);
        var description = $("<p>");
        description.text(dishes[i]["description"]);

        imageBox.append(img);
        imageBox.append(name);
        course.append(imageBox);
        course.append(description);
        this.browsingPane.append(course);
    }
};