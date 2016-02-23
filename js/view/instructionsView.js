var InstructionsView = function (container, model) {
	container.css("display", "inline");

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that respond to interaction)


	this.addElement = function (dish) {
		var imgBox = $("<div class='image-box-no-text'>");
		imgBox.append("<img src='" + dish['ImageURL'] + "'>");
		var col1 = $("<div class='prep col-xs-6 col-sm-3 col-lg-2 col-lg-offset-2'>");
		col1.append(imgBox);

		var h1 = $("<h1>" + dish['Title'] + "</h1>");
		var p1 = $("<p>" + dish['Description'] + "</p>");
		var col2 = $("<div class='prep col-xs-6 col-sm-4 col-lg-3'>");
		col2.append(h1);
		col2.append(p1);

		var h2 = $("<h4>PREPERATION</h4>");
		var p2 = $("<p>" + dish['Instructions'] + "</p>");
		var col3 = $("<div class='prep col-xs-6 col-sm-5 col-lg-3'>");
		col3.append(h2);
		col3.append(p2);

		var row = $("<div class= 'row itemRow'>");
		row.append(col1);
		row.append(col2);
		row.append(col3);
		container.append(row);
	};


	this.updateInstructions = function () {
		container.empty();

		var selectedDishes = model.getFullMenu();
		if (selectedDishes.length == 0) {
			//TODO: Error message..?
		} else {
			for (var i = 0; i < selectedDishes.length; i++) {
				this.addElement(selectedDishes[i]);
			}
		}
	};

	this.updateInstructions();

	this.update = function (model, obj) {
		if (typeof obj === 'object') {
			this.updateInstructions();
		}
	};
	model.addObserver(this);


	this.show = function () {
		container.css("display", "inline");
	};

	this.hide = function () {
		container.css("display", "none");
	}
};
