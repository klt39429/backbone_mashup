var UserNavigationView = Backbone.View.extend({
    
	el: $('#user_navigation'),
    user_navigation_template: $("#user_navigation_template").template(),
    add_user_notification_template: $("#add_user_notification_template").template(),
    
    initialize: function() {
    	_.bindAll(this, 'render', 'add_deal');
		this.model.get("deals").bind('add', this.add_deal);
    },
    
    render: function() {
		this.el.empty();
    	$.tmpl(this.user_navigation_template, this.model).appendTo(this.el);        
    },

	add_deal: function() {
		this.render();
		
		var notification = $.tmpl(this.add_user_notification_template, null);
		notification.appendTo(this.el);
		
		notification.fadeOut(1500, function() {
			notification.remove();
		});
	}
});
