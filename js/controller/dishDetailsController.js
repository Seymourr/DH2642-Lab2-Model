var DishDetailsController = function (view, model, master) {
    view.backButton.click(function () {
        master.goBack();
    });
    view.confirmButton.click(function () {
        master.goForward();
    });
};
