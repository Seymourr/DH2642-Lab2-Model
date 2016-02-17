var InstructionsController = function (view, model, master) {
    view.goBackButton.click(function () {
        master.goBack();
    });
};
