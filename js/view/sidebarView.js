var SidebarView = function (container, model) {

	container.css("display", "inline");

	this.button = container.find("#confirm-button-sidebar");
	this.guests = container.find("#guest-number");
	this.table = container.find("#table-body");
	this.cost = container.find("#total-cost");


	this.guests.val(model.getNumberOfGuests());
	this.cost.val(model.getTotalMenuPrice());


	this.updateTable = function () {
		this.table.empty();
		var menu = model.getFullMenu();
		for (var i = 0; i < menu.length; i++) {
			console.log(menu);
			var tr = $("<tr>");
			tr.append("<td>" + menu[i]['portions'] + "</td>");
			tr.append("<td>" + menu[i]['Title'] + "</td>");
			tr.append("<td>" + menu[i]['portions'] * model.getDishPrice(menu[i]).toFixed(2) + "</td>").data("RecipeID", menu[i]["RecipeID"]);
			var div = $("<div class='trdiv'>");
			div.append($("<button type='button' class='btn btn-danger btn-circle'><i class='glyphicon glyphicon-remove'></i></button>"));
			tr.append(div);
			this.table.append(tr);
		}
	};
	this.updateTable();

	this.update = function (model, obj, status) {
		if (typeof obj === 'number' && status === model.numberMessage) {
			this.guests.val(obj); //New number of guests
		} else if (typeof obj === 'object') {
			if(status === model.addMessage || status === model.removeMessage) {
				//Something was removed or added to the menu
				this.updateTable();
			}			
		}
		this.cost.text("SEK " + model.getTotalMenuPrice().toFixed(2));
	};

	model.addObserver(this);

	this.show = function () {
		container.css("display", "inline");
	};

	this.hide = function () {
		container.css("display", "none");
	}
};