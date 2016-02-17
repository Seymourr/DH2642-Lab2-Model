var DishDetailsController = function (view, model, master) {
    view.backButton.click(master.goBack);
    view.confirmButton.click(master.goForward);
};
