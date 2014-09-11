exports.definition = {
	config : {
		columns : {
			"id" : 'INTEGER PRIMARY KEY AUTOINCREMENT',
			"term_id" : "TEXT",
			"term_name" : "TEXT",
			"city_name" : "TEXT",
			"state_name" : "TEXT"
		},
		adapter : {
			type : "sql",
			collection_name : "history",
			idAttribute : "term_id"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		return Collection;
	}
};
