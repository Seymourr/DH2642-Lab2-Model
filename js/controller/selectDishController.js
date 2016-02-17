var SelectDishController = function (view, model, container, master) {

 	view.searchButton.click(function(){
 		var searchText = view.searchText;
 		var type = $("#dropdown option:selected");
 		var text = searchText.val().toLowerCase();
 		var collection;
 		if(type.text() === "all"){
 			if(text === "enter keywords"){
 				collection = model.getAllFilteredDishes();
 			} else {
	 			collection = model.getAllFilteredDishes("starter", text);
	 			collection = collection.add(model.getAllFilteredDishes("main dish", text));
	 			collection = collection.add(model.getAllFilteredDishes("dessert", text));
 			}
 			
 		} else {
 			collection = model.getAllFilteredDishes(type.text(), text);
 			console.log(type.text());
 			console.log(text);
 		}
 		view.appendDishes(collection);
 	});
};
