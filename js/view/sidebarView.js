var SidebarView = function (container, model) {

    container.css("display", "inline");

    this.button = container.find("#confirm-button-sidebar");
    this.guests = container.find("#guest-number");
    this.table = container.find("#table-body");
    this.cost = container.find("#total-cost");



    this.guests.val(model.getNumberOfGuests());
    this.cost.val(model.getTotalMenuPrice());
  

 
   
    this.updateTable = function() {
        this.table.empty();
        var menu = model.getFullMenu();
        for (var i = 0; i < menu.length; i++) {
            var tr = $("<tr>");
            tr.append("<td>" + menu[i]['portions'] + "</td>");
            tr.append("<td>" + menu[i]['Title'] + "</td>");
            tr.append("<td>" + menu[i]['portions']*model.getDishPrice(menu[i]['RecipeID']) + "</td>");   
            var div = $("<div class='trdiv'>");
            div.append($("<button type='button' class='btn btn-danger btn-circle'><i class='glyphicon glyphicon-remove'></i></button>").data("RecipeID", menu[i]["RecipeID"]));      
            tr.append(div); 
            this.table.append(tr);
        }
    };
    this.updateTable();

    this.update = function(model, obj) {
        if(typeof obj === 'number'){
            this.guests.val(obj); //New number of guests
        } else if(typeof obj === 'object') {
            //Something was removed or added to the menu
            this.updateTable();
        }

        this.cost.text("SEK " + model.getTotalMenuPrice());
    };
    
    model.addObserver(this);

    this.show = function () {
        container.css("display", "inline");
    }

    this.hide = function () {
        container.css("display", "none");
    }
};