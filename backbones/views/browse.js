var BrowseView = Backbone.View.extend({
    
	el: $('#main'),
    browse_template: $("#browse_template").template(),
    
    events: {
    	'mouseenter .item' : 'show_add',
    	'mouseleave .item' : 'hide_add'
    },
    
    render: function() {
        var bw = this;
        this.el.fadeOut('fast', function() {
            bw.el.empty();
        	$.tmpl(bw.browse_template, bw.collection.toArray()).appendTo(bw.el);
            bw.el.fadeIn('fast');
        });
        return this;
    },
    
    show_add: function(e) {
    	$(e.currentTarget).children(".item-add").slideDown("fast");
    },
    
    hide_add: function(e) {
    	$(e.currentTarget).children(".item-add").slideUp("fast");
    }

});

var BrowseItemView = Backbone.View.extend({
	
	
	
});
