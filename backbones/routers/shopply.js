var ShopplyRouter = Backbone.Router.extend({
	
	_browse: null,
	_navigation_user: null,
	_my_deals: null,
	_search_prompt: null,
	
	routes: {
		"" : "browse",
		"browse/:search": "browse",
		"my_deals": "my_deals"
	},

    initialize: function(options) {
	    var ws = this;    	
	    
	    // Init other views
	    this._my_deals = new MyDealsView();
	    this._search_prompt = new SearchPromptView();
	    
	    // render navigtaion user tab
	    this._navigation_user = new UserNavigationView({model: new User()});
	    this._navigation_user.render();
	    
	    if (this._browse === null){
	        $.ajax({
	            url: 'data/sample.json',
	            dataType: 'json',
	            data: {},
	            success: function(data) {
	                ws._browse = new BrowseView({collection: new DealCollection(data)});
	                ws._browse.render();
	                Backbone.history.loadUrl();
	            },
	            error: function(e,a) {
	            	console.log(e);
	            	console.log(a);
	            }
	        });
	        return this;
	    }
	    return this;
	},
	
    browse: function(search) {
    	if (null != search && 1 == search) {
    		var tags = prompt("Search tags - separated by spaces","amazon online");

    		this._browse.filter.set({tags: tags.split(" ")});
    		console.log(this._browse.filter.get("tags"));
    	}
    	else {
    		this._browse.filter.set({tags: []});
    	}
    	this._browse.render();
    },	
   

	my_deals: function() {
		this._my_deals.collection = this._navigation_user.model.get("deals");
		this._my_deals.render();
	}
	
});

shopply = new ShopplyRouter();
Backbone.history.start();
