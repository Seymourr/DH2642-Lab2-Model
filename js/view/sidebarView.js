var SidebarView = function (container, model) {
    container.css("display", "inline");

    this.button = container.find("#confirm-button-sidebar");
    this.guests = container.find("#guest-number");
    this.table = container.find("#table-body");
    this.cost = container.find("#total-cost");

    this.guests.val(model.getNumberOfGuests());
    var menu = model.getFullMenu();
    for (i = 0; i < menu.length; i++) {
        var tr = $("<tr>");
        tr.append("<td></td>");
        tr.append("<td>" + menu[i]["name"] + "</td>");
        tr.append("<td>" + model.getDishPrice(menu[i]["id"]) + "</td>");

        this.table.append(tr);
    }

    this.cost.val(model.getTotalMenuPrice());
    this.guests.val(model.getNumberOfGuests());
};