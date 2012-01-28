var ShopplyController = Backbone.Controller.extend({
	
	_browse: null,
	_deals: null,
	
	routes: {
		"": "browse",
		"test" : "test"
	},

    initialize: function(options) {
	    var ws = this;    	
	    if (this._browse === null){
	        $.ajax({
	            url: 'data/sample.json1',
	            dataType: 'json',
	            data: {},
	            success: function(data) {
	                ws._deals = new DealCollection(data);
	                ws._browse = new BrowseView({collection: ws._deals}); 
	                Backbone.history.loadUrl();
	            },
	            error: function(data,e) {
	            	alert(data);
	            	console.log(data);
	            	console.log(e);
	            }
	        });
	        return this;
	    }
	    return this;
	},
	
    browse: function() {
        this._browse.render();
    },	
    
    test: function() {
    	this._browse.model = [this._browse.model._deals[0], this._browse.model._deals[1]];
    	console.log(this._browse.model);
    	this._browse.render();
    }
	
});

shopply = new ShopplyController();
Backbone.history.start();
