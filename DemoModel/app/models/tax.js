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
			collection_name : "taxonomy",
			db_name : "city.db",
			db_file : "/city.db",
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
			deleteAll : function() {
				var collection = this;
				var sql = "DELETE FROM " + collection.config.adapter.collection_name;
				db = Ti.Database.open(collection.config.adapter.db_name);
				db.execute(sql);
				db.close();
				collection.trigger('sync');
			},
		});

		return Collection;
	}
};
