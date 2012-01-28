var UserNavigationView = Backbone.View.extend({
    
	el: $('#user_navigation'),
    user_navigation_template: $("#user_navigation_template").template(),
    
    initialize: function() {
    	_.bindAll(this, 'render');
    },
    
    render: function() {
    	$.tmpl(this.user_navigation_template, this.model).appendTo(this.el);        

    },
});
