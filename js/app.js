$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// Example values for model
	model.setNumberOfGuests(7);
	model.addDishToMenu(3);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	//And create the needed controllers and views
	//var splashView = new SplashView($("#view1"), this);
	var sidebar = new SidebarView($("#view2"), model, this);
	var sideBarController = new sidebarController(sidebar, model, $("#view2"));
	//var selectDishView = new SelectDishView($("#view3"), model, this);
	//var dishDetailsView = new DishDetailsView($("#view4"), model, this);
	//var dinnerHeader = new DinnerHeaderView($("#view5"), model, this);
	//var overviewView = new OverviewView($("#view6"), model, this);
//	var instructionsView = new InstructionsView($("#view7"), model);
});