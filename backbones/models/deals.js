var Deal = Backbone.Model.extend({
	destroy: function() {
	    console.log(this);
	    console.log("model remove: "+this.get('id'));
	    return Backbone.Model.prototype.destroy.call(this);
	}	
});

var DealCollection = Backbone.Collection.extend({
	model: Deal
});