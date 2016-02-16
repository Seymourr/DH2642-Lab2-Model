var SplashController = function (view, model) {

   var listeners = [];

	//Add observer to list of listeners
	this.addObserver = function(observer){
		listeners.push(observer);
	};

	//Private function, notify all observers on this model
	this.notifyObservers = function(obj) {
		for(var i = 0; i < listeners.length; i++) {
			listeners[i](this,obj);
		}
	};

	view.button.click(this.notifyObservers());
};
