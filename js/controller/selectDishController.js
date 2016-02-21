var SelectDishController = function (view, model, container, master) {

	var search = function(){
 		var searchText = view.searchText;
 		var type = $("#dropdown option:selected");
 		var text = searchText.val();
 		var collection;
 		if(type.text() === "all"){
 			if(text.length === 0){
 				collection = model.getAllDishes();
 			} else {
				collection = model.getAllFilteredDishes("starter", text);
				collection = collection.add(model.getAllFilteredDishes("main dish", text));
				collection = collection.add(model.getAllFilteredDishes("dessert", text));
			}
 		} else {
 			if(text.length === 0) {
				collection = model.getAllFilteredDishes(type.text());
			} else {
				collection = model.getAllFilteredDishes(type.text(), text);
			}
		}

 		view.appendDishes(collection);
 	};

 	view.searchButton.click(search);
 	$(view.dropdown).click(function() {
 		var type = $("#dropdown option:selected");
 		var collection;
 		if(type.text() === "all"){
 			collection = model.getAllDishes();
 		} else if(type.text() === "starter") {
 			collection = model.getAllFilteredDishes("starter");
 		} else if(type.text() === "main dish") {
 			collection = model.getAllFilteredDishes("main dish");
 		} else if(type.text() === "dessert") {
 			collection = model.getAllFilteredDishes("dessert");
 		}
 		view.appendDishes(collection);
 	});

 	//Enter
 	$(document).keypress(function(e) {
	    if(e.which === 13) {
	        search();
	    }
	});

	view.browsingPane.on("click", ".image-box", function() {
		master.goForward($(this).data("id"));
	}); 
};
