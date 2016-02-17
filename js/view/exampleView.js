//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("<h1>Hello World</h1>");

	this.show = function () {
		container.css("display", "inline");
	}

	this.hide = function () {
		container.css("display", "none");
	}
}
 
