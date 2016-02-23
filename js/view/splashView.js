var SplashView = function (container) {
	container.css("display", "inline");

	this.button = container.find("#startButton");

	this.show = function () {
		container.css("display", "inline");

		document.body.style.backgroundImage = "url('images/firstpage.jpg')";
		document.body.style.backgroundSize = "100%";
		document.body.style.position = "static";
		document.getElementById("header").style.opacity = "0.8";
		document.getElementById("header").style.filter = "alpha(opacity=40)";
		document.getElementById("header").style.backgroundColor = "#FFDEAD";
	};

	this.hide = function () {
		container.css("display", "none");

		$(document.body).css("background-image", "");
		$("#header").css({"opacity": "1", "background-color": "#ededed"});
	}
};

