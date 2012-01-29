var BrowseView = Backbone.View.extend({
    
	el: $('#main'),
    browse_template: $("#browse_template").template(),
    
    initialize: function() {
    	this.filter = new Filter();
    	//this.filter.bind("change",this.render);
    	
    	_.bindAll(this,'render');
    },
    
    render: function() {
        var bv = this;
        bv.el.fadeOut('fast', function() {
            bv.el.empty();
            bv.collection.each(function(item) {
            	// if item tags match filter / search criteria, then display
            	if ( (0 == bv.filter.get("tags").length) || (0 != _.intersection(bv.filter.get("tags"), item.get("tags")).length) ) {
            		var biv = new BrowseItemView({model: item})
            		biv.render();
            		bv.el.append(biv.el);
            	}
            });
        	
            bv.el.fadeIn('fast');
        });
        return this;
    },
});

var BrowseItemView = Backbone.View.extend({
	
	tagName: 'div',
    browse_template: $("#browse_template").template(),

    events: {
    	'mouseenter .item' : 'show_add',
    	'mouseleave .item' : 'hide_add',
    	'click .item-add img' : 'add_item'
    },
    
    initialize: function() {
    	_.bindAll(this, 'render', 'hide_add', 'show_add', 'add_item');
    },
    
    render: function() {
    	var browse_item = $.tmpl(this.browse_template, this.model)
    	this.div_id = "browse_item_" + this.model.id;
    	browse_item.attr("id", this.div_id );
    	browse_item.appendTo(this.el);
    },

    show_add: function(e) {
    	$(e.currentTarget).children(".item-add").slideDown("fast");
    },
    
    hide_add: function(e) {
    	$(e.currentTarget).children(".item-add").slideUp("fast");
    },
    
    add_item: function(e) {
		var user_deals = shopply._navigation_user.model.get("deals");
		if (-1 == _.indexOf(user_deals.toArray(),this.model)) {
			user_deals.add(this.model);
		}
    }
    
});
