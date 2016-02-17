var sidebarController = function (view, model, container, master) {

    var listeners = [];

	//Add observer to list of listeners
	this.addObserver = function(observer){
		listeners.push(observer);
	};

	//Private function, notify all observers on this model
	this.notifyObservers = function(obj) {
		for(var i = 0; i < listeners.length; i++) {
			listeners[i](this,obj);
		}
	};

	$("#table-body").on("click", "tr", function() {
		model.removeDishFromMenu($(this).data("id"));
	}); 

	var input = $("#guest-number");
	input.change(function() {
		if(input.val() < 1) {
			input.val(1);
		} else {
			model.setNumberOfGuests(input.val());
		}
	});

	view.button.click(master.goForward());

};
