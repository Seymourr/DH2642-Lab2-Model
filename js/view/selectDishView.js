var SelectDishView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
    this.searchText = container.find("#search-text");
    this.searchButton = container.find("#search-button");
    this.searchForm = container.find("#search-form");
    this.dropdown = container.find("#dropdown");
    this.browsingPane = container.find("#browsing-pane");

    this.appendDishes = function(dishes){
        this.browsingPane.empty();
        for (i = 0; i < dishes.length; i++) {
            var course = $("<div class='course col-xs-6 col-sm-4 col-lg-2'>");
            var imageBox = $("<div class='image-box'>").data('RecipeID', dishes[i]['RecipeID']);

            var img = $("<img>");
            img.attr("src", dishes[i]['ImageURL']); //CHANGED TO ONLINE SRC
            var name = $("<h3>");
            name.text(dishes[i]["Title"]);
            var description = $("<p>");
            description.text(dishes[i]['Description']);

            imageBox.append(img);
            imageBox.append(name);
           // imageBox.append(description);
            course.append(imageBox);
         
            this.browsingPane.append(course);
        }
    };

    this.setLoading = function () {
        this.browsingPane.empty();
        var spinner = new Spinner().spin();
        this.browsingPane.append($(spinner.el));
    };

    this.setFailedRequest = function () {
        this.browsingPane.empty();
        this.browsingPane.append('<div class="alert alert-warning" role="alert">Request failed. Make sure your internet connection is working and make another search.</div>');
    };

    this.show = function () {
        container.css("display", "inline");
    };

    this.hide = function () {
        container.css("display", "none");
    };

    this.setLoading();
    model.getAllDishes();

    model.addObserver(this);

    this.update = function (model, obj) {
        if (obj === null) {
            this.setFailedRequest();
        } else if (typeof obj === 'object') {
            if (obj["Results"] !== undefined) {
                this.appendDishes(obj.Results);
            } else {
                this.setFailedRequest();
            }
        }
    };
};
