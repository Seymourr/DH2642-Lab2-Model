var OverviewView = function (container, model) {
    container.css("display", "inline");
    
    // Get all the relevant elements of the view (ones that show data
    // and/or ones that respond to interaction)
	this.starter = container.find("#starter");
	this.mainDish = container.find("#mainDish");
	this.dessert = container.find("#dessert");

	this.totalCost = container.find("#totalDiv");

	this.printButton = container.find("#printButton");


	this.initPagez = function(dishref, ref) {
			var dish = model.getSelectedDish(ref);
			if(dish == null) {
				dishref.find("h6").text("0 SEK");
				dishref.find("img").attr("src","images/nullImage.png");
				dishref.find("h3").text("");
			} else {
				dishref.find("h6").text =  model.getDishPrice(dish['id']) + " SEK";
				dishref.find("img").src = "images/" + dish['image'];
				dishref.find("h3").text = dish['name'];
			}
		}
		
	

	this.initPagez(this.starter, "starter");
	this.initPagez(this.mainDish, "mainDish");
	this.initPagez(this.dessert, "dessert");
	this.totalCost.text("Total: " + model.getTotalMenuPrice() + " SEK");


};
