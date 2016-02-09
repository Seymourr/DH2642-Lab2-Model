var InstructionsView = function (container, model) {
    container.css("display", "inline");

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
	

	this.addElement = function(dish){
		var imgBox = $("<div class='image-box-no-text'>");
		imgBox.append("<img src='images/" + dish['image'] +"'>");
		var col1 = $("<div class='prep col-xs-6 col-sm-3 col-lg-2 col-lg-offset-2'>");
		col1.append(imgBox);

		var h1 = $("<h1>"+ dish['name'] + "</h1>");
		var p1 = $("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.</p>");
		var col2 = $("<div class='prep col-xs-6 col-sm-4 col-lg-3'>");
		col2.append(h1);
		col2.append(p1);

		var h2 = $("<h4>PREPERATION</h4>");
		var p2 = $("<p>" + dish['description'] + "</p>");
		var col3 = $("<div class='prep col-xs-6 col-sm-5 col-lg-3'>");
		col3.append(h2);
		col3.append(p2);

		var row = $("<div class= 'row itemRow'>");
		row.append(col1);
		row.append(col2);
		row.append(col3);
		container.append(row);
	}


	var selectedDishes = model.getFullMenu();
	if(selectedDishes.length == 0) {
		//TODO: Error message..?
	} else {
		for(var i = 0; i < selectedDishes.length; i++){
			console.log("Yes");
			this.addElement(selectedDishes[i]);
		}
	}
};