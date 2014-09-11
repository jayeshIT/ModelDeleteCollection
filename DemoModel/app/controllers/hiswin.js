Alloy.Collections.history.fetch({
	query : "SELECT * FROM history",
	success : function(res) {
		//Ti.API.info('------name:' + res.length);
		//Ti.API.info('--------- JSON:' + JSON.stringify(res));
	},
	error : function() {
	}
});

Alloy.Collections.history.comparator = function(chapter) {
	return -chapter.get("id");
	// Note the minus!
};

var btnClose = Titanium.UI.createButton({
	top : 10,
	left : 10,
	title : 'Close'
});
btnClose.addEventListener('click', function(e) {
	$.hiswin.close();
});
$.hiswin.add(btnClose);

///http://developer.appcelerator.com/question/145906/alloycollectionsreset-really-working-#comment-218275
//https://developer.appcelerator.com/question/149527/delete-sql-query-on-alloy-collections