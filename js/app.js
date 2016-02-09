$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var splashView = new SplashView($("#view1"));
	var sidebar = new SidebarView($("#view2"), model);
	var selectDishView = new SelectDishView($("#view3"), model);
	var dishDetailsView = new DishDetailsView($("#view4"), model);
	var dinnerHeader = new DinnerHeaderView($("#view5"));
	var overviewView = new OverviewView($("#view6"), model);
	var instructionsView = new InstructionsView($("#view7"), model);
});