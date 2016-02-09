var SplashView = function (container) {
    container.css("display", "inline");

    if (document.getElementById("view1").style.display != 'none') {
        document.body.style.backgroundImage = "url('images/firstpage.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.position = "static";
        document.getElementById("header").style.opacity = "0.8";
        document.getElementById("header").style.filter = "alpha(opacity=40)";
        document.getElementById("header").style.backgroundColor = "#FFDEAD";
    }

    this.button = container.find("#startButton");
};

