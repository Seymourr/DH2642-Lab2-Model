var DishDetailsController = function (view, model, master) {
	view.backButton.click(function () {
		master.goBack();
	});
	view.confirmButton.click(function () {
		model.addDishToMenu(view.detailedDish);
		master.goBack();
	});
};
