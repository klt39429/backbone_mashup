var MyDealsView = Backbone.View.extend({
    
	el: $('#main'),
    my_deals_table_template: $("#my_deals_table_template").template(),
    my_deals_row_template: $("#my_deals_row_template").template(),
    
    initialize: function() {
    	_.bindAll(this, 'render');
    },
    
    render: function() {
        var mdv = this;
        this.el.fadeOut('fast', function() {
        	mdv.el.empty();
        	
        	var table = $.tmpl(mdv.my_deals_table_template, null);
        	var rows = $.tmpl(mdv.my_deals_row_template, mdv.collection.toArray());
        	
        	rows.appendTo(table.children("tbody"));
        	
        	table.appendTo(mdv.el);
        	mdv.el.fadeIn('fast');
        });
    },
});