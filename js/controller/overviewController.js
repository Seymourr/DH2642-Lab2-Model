var OverviewController = function (view, model, master) {

	view.printButton.click(function () {
		master.goForward();
	});
};
