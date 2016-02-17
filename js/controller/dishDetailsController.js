var DishDetailsController = function (view, model, master) {
    view.goBackButton.click(master.goBack());
    view.confirmButton.click(master.goForward());
};
