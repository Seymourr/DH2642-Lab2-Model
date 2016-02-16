var SidebarView = function (container, model) {
    container.css("display", "inline");

    this.button = container.find("#confirm-button-sidebar");
    this.guests = container.find("#guest-number");
    this.table = container.find("#table-body");
    this.cost = container.find("#total-cost");



    this.guests.val(model.getNumberOfGuests());
    this.cost.val(model.getTotalMenuPrice());
    updateTable(this.table);

    model.addObserver(function(model, obj) {
        if(typeof obj === 'number'){
            this.guests.val(obj); //New number of guests
            this.cost.val(model.getTotalMenuPrice());
        } else if(typeof obj === 'object') {
            //Something was removed or added to the menu
            updateTable(this.table);
        }
    });
   
    function updateTable(table) {
        table.empty();
        var menu = model.getFullMenu();
        for (i = 0; i < menu.length; i++) {
        var tr = $("<tr>");
            tr.append("<td>" + menu[i]['portions'] + "</td>");
            tr.append("<td>" + menu[i]["name"] + "</td>");
            tr.append("<td>" + model.getDishPrice(menu[i]["id"]) + "</td>");
            table.append(tr);
        }
    }
};