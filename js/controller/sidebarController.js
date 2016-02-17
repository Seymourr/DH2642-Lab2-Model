var SidebarController = function (view, model, container, master) {


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

	view.button.click(master.goForward);

};
