for (var i = 0; i < 100; i++) {
	var db = Titanium.Database.install('/city.db', 'city.db');
	db.execute("insert into taxonomy(term_id,term_name)values(?,?)", i, (i + 'jayesh'));
	db.close();
}
Alloy.Collections.tax.fetch({
	query : "SELECT * FROM taxonomy",
	success : function(res) {
	},
	error : function() {
	}
});
$.tblView.addEventListener('click', function(e) {
	var name = e.row.name.toString();
	var id = e.row.rowid;
	if (Alloy.Collections.history.length > 4) {
		var hist = Alloy.Collections.history.where({
			'term_name' : name
		});
		if (hist.length > 0) {
			var index = Alloy.Collections.history.indexOf(hist[0]);
			Alloy.Collections.history.at(index).destroy();
			var termData = Alloy.createModel('history', {
				'term_name' : name,
				'term_id' : id
			});
			termData.save(termData);
		} else {
			Alloy.Collections.history.at(Alloy.Collections.history.length - 1).destroy();
			var termData = Alloy.createModel('history', {
				'term_name' : name,
				'term_id' : id
			});
			termData.save();
		}
	} else {
		if (Alloy.Collections.history.length > 0) {
			var hist0 = Alloy.Collections.history.where({
				'term_name' : name
			});
			if (hist0.length > 0) {
				var index = Alloy.Collections.history.indexOf(hist0[0]);
				Alloy.Collections.history.at(index).destroy();
				var termData = Alloy.createModel('history', {
					'term_name' : name,
					'term_id' : id
				});
				termData.save(termData);
			} else {
				var termData = Alloy.createModel('history', {
					'term_name' : name,
					'term_id' : id
				});
				termData.save();
			}
		} else {
			var termData = Alloy.createModel('history', {
				'term_name' : name,
				'term_id' : id
			});
			termData.save();
		}
	}
});
var clickbtndet = function() {
	var details = Alloy.createController('hiswin').getView();
	details.open();
};
$.index.open();
