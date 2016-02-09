$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// Example values for model
	model.setNumberOfGuests(4);
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	//And create the needed controllers and views
	var splashView = new SplashView($("#view1"));
	var sidebar = new SidebarView($("#view2"), model);
	var selectDishView = new SelectDishView($("#view3"), model);
	var dishDetailsView = new DishDetailsView($("#view4"), model);
	var dinnerHeader = new DinnerHeaderView($("#view5"), model);
	var overviewView = new OverviewView($("#view6"), model);
	var instructionsView = new InstructionsView($("#view7"), model);
});