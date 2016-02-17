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
            var tr = $("<tr>").data("id", menu[i]["id"]);
            tr.append("<td>" + menu[i]['portions'] + "</td>");
            tr.append("<td>" + menu[i]["name"] + "</td>");
            tr.append("<td>" + model.getDishPrice(menu[i]["id"]) + "</td>");
            this.table.append(tr);
        }
    };
    this.updateTable();

    this.update = function(model, obj) {
        if(typeof obj === 'number'){
            this.guests.val(obj); //New number of guests
            this.cost.val(model.getTotalMenuPrice());
        } else if(typeof obj === 'object') {
            //Something was removed or added to the menu
            this.updateTable();
        }
    };
    
    model.addObserver(this);
};