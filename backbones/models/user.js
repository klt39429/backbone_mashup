var User = Backbone.Model.extend({
	defaults: {
		id: 0,
		name: "Shrek",
		image: 'images/profile.jpeg',
		deals: new DealCollection()
	}	
});