var SelectDishController = function (view, model, container, master) {

	var search = function(){
 		var searchText = view.searchText;
 		var type = $("#dropdown option:selected");
 		var text = searchText.val();

 		if(type.text() === "all"){
			model.getAllDishes(text);
 		} else {
			model.getAllDishes(text, type.text());
		}
 	};

 	view.searchButton.click(search);
	view.dropdown.click(search);

 	//Enter
 	$(document).keypress(function(e) {
	    if(e.which === 13) {
	        search();
	    }
	});

	view.browsingPane.on("click", ".image-box", function() {
		master.goForward($(this).data("RecipeID"));
	});
};
