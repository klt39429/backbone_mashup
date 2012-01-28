var BrowseView = Backbone.View.extend({
    
	el: $('#main'),
    browse_template: $("#browse_template").template(),
    
    render: function() {
        var bv = this;
        this.el.fadeOut('fast', function() {
            bv.el.empty();
            
            bv.collection.each(function(item) {
            	var biv = new BrowseItemView({model: item})
            	biv.render();
            	bv.el.append(biv.el);
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
    	_(this).bindAll('hide_add', 'show_add', 'add_item');
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
    	console.log(this.div_id);
    	var item = $("#" + this.div_id );
    	item.remove();
    	//this.model.destroy();
    }
    
});
