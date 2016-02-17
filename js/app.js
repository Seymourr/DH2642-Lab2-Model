$(function() {
	//We instantiate our model
	var views = [];
	var currentView = 0; // zero-indexed
	var model = new DinnerModel();

	// Example values for model
	model.setNumberOfGuests(7);
	model.addDishToMenu(3);
	model.addDishToMenu(100);
	model.addDishToMenu(201);

	//And create the needed controllers and views
	//var splashView = new SplashView($("#view1"), this);
	var sidebar = new SidebarView($("#view2"), model);
	var sideBarController = new SidebarController(sidebar, model, $("#view2"), this);
	var selectDishView = new SelectDishView($("#view3"), model);
	var selectDishController = new SelectDishController(selectDishView, model, $("#view3"), this);
	var dishDetailsView = new DishDetailsView($("#view4"), model);
	var dishDetailsController = new DishDetailsController(dishDetailsView, model, this);
	var dinnerHeader = new DinnerHeaderView($("#view5"), model);
	var dinnerHeaderController = new DinnerHeaderController(dinnerHeader, model, this);
	var overviewView = new OverviewView($("#view6"), model);
	var overviewController = new OverviewController(overviewView, model, this);
	var instructionsView = new InstructionsView($("#view7"), model);

	views.push(sidebar, selectDishView, dishDetailsView, dinnerHeader, overviewView);

	// dish may be undefined
	this.goForward = function(dish){
		currentView++;
		updateVisibility(views, dish);
	};

	this.goBack = function(){
		currentView--;
		updateVisibility(views, dish);
	};

	function updateVisibility(views, dish) {
		for (i = 0; i < views.length; i++) {
			views[i].hide();
		}

		views[currentView].show(dish);
	}
});