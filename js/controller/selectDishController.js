var SelectDishController = function (view, model, container, master) {

	var search = function () {
		var searchText = view.searchText;
		var type = $("#dropdown option:selected");
		var text = searchText.val();

		if (type.text() === "all") {
			view.setLoading();
			model.getAllDishes(text);
		} else {
			view.setLoading();
			model.getAllDishes(text, type.text());
		}
	};

	// http://stackoverflow.com/a/10124169/1729441
	var timer = 0;
	view.searchForm.on("input", function () {
		if (timer != 0) {
			clearTimeout(timer);
		}

		timer = setTimeout(search, 500);
	});

	view.dropdown.change(search);
	view.searchButton.click(search);

	//Enter
	$(document).keypress(function (e) {
		if (e.which === 13) {
			search();
		}
	});

	view.browsingPane.on("click", ".image-box", function () {
		master.goForward($(this).data("RecipeID"));
	});
};
