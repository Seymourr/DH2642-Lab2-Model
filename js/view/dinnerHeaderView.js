var DinnerHeaderView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
	this.numberOfPeople = container.find("#numberOfPeople");
	this.goBackButton = container.find("#goBackButton");

	this.numberOfPeople.text(model.getNumberOfGuests());
};
