$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// Example values for model
	model.setNumberOfGuests(7);
	model.addDishToMenu(3);
	model.addDishToMenu(100);
	model.addDishToMenu(201);


	this.goForward = function(){};
	this.goBack = function(){};
	//And create the needed controllers and views
	//var splashView = new SplashView($("#view1"), this);
	var sidebar = new SidebarView($("#view2"), model);
	var sideBarController = new SidebarController(sidebar, model, $("#view2"), this);
	var selectDishView = new SelectDishView($("#view3"), model);
	var selectDishController = new SelectDishController(selectDishView, model, $("#view3"), this);
	//var dishDetailsView = new DishDetailsView($("#view4"), model);
	//var dinnerHeader = new DinnerHeaderView($("#view5"), model);
	//var overviewView = new OverviewView($("#view6"), model);
//	var instructionsView = new InstructionsView($("#view7"), model);
});