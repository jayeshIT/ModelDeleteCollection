var args = arguments[0] || {};
var btnClose = Titanium.UI.createButton({
	top : 10,
	left : 10,
	title : 'Close'
});
btnClose.addEventListener('click', function(e) {
	$.details.close();
});
var data = Alloy.Collections.tax;
var textField = Titanium.UI.createTextField({
	top : 60,
	left : 10,
	right : 10,
	height : 45,
	borderColor : 'red'
});
$.details.add(btnClose);

var btnAdd = Titanium.UI.createButton({
	top : 120,
	left : 10,
	height : 40,
	title : 'Add data'
});

btnAdd.addEventListener('click', function(e) {

	textField.blur();

	var db = Titanium.Database.install('/city.db', 'city.db');
	db.execute("insert into taxonomy(term_id,term_name)values(?,?)", 10, textField.value);
	db.close();

	Alloy.Collections.tax.reset( ignorePersistenceLayer = true);

	Alloy.Collections.tax.fetch({
		query : "SELECT * FROM taxonomy"
	});

	/*
	 while (Alloy.Collections.tax.length > 0) {
	 var model = Alloy.Collections.tax.at(0);
	 Alloy.Collections.tax.remove(model);
	 model.destroy();
	 }*/

});
$.details.add(textField);

$.details.add(btnAdd);
