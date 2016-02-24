var DinnerHeaderView = function (container, model) {
	container.css("display", "inline");

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that respond to interaction)
	this.numberOfPeople = container.find("#numberOfPeople");
	this.goBackButton = container.find("#goBackButton");

	this.numberOfPeople.text(model.getNumberOfGuests());

	this.update = function (model, obj, status) {
		if (typeof obj === 'number' && status === model.numberMessage) {
			this.numberOfPeople.text(obj);
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
