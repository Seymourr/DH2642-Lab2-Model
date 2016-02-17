var DinnerHeaderView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
	this.numberOfPeople = container.find("#numberOfPeople");
	this.goBackButton = container.find("#goBackButton");

	this.numberOfPeople.text(model.getNumberOfGuests());

	model.addObserver(function (model, obj) {
		if (typeof obj === 'number') {
			this.numberOfPeople.text(obj);
		}
	});

	this.show = function () {
		container.css("display", "inline");
	}

	this.hide = function () {
		container.css("display", "none");
	}
};
