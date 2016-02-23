var SidebarController = function (view, model, container, master) {

	$("#table-body").on("click", "td", function () {
		master.goToDetails($(this).parent().data("RecipeID"));
	});

	$("#table-body").on("click", "button", function () {
		model.removeDishFromMenu($(this).parent().parent().data("RecipeID"));
	});

	var input = $("#guest-number");
	input.change(function () {
		if (input.val() < 1) {
			input.val(1);
		} else {
			model.setNumberOfGuests(parseInt(input.val()));
		}
	});

	view.button.click(function () {
		master.goForward();
	});

};
