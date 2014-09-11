// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Collections.tax = Alloy.createCollection('tax');
Alloy.Collections.history = Alloy.createCollection('history');
/*
 *
 * for (var i = 0; i < 100; i++) {
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

 //Alloy.Collections.history.at(0).destroy();

 $.tblView.addEventListener('click', function(e) {

 var name = e.row.name;

 var id = e.row.rowid;

 Ti.API.info('------name:' + name);

 Ti.API.info('------id:' + id);

 var lenlast = (Alloy.Collections.history.length - 1);

 Ti.API.info('=====lenlastt:' + (Alloy.Collections.history.length - 1));

 if (Alloy.Collections.history.length > 4) {

 for (var i = 0; i < Alloy.Collections.history.length; i++) {

 Ti.API.info('----Alloy.Collections.history.at(i):' + Alloy.Collections.history.at(i));

 if (Alloy.Collections.history.at(i).get('term_id') == id) {

 alert('345');

 Alloy.Collections.history.at(i).destroy();

 var hisModel = Alloy.createModel('history', {

 'term_name' : name,
 'term_id' : id
 });

 hisModel.save();

 Alloy.Collections.history.fetch();

 break;

 } else {

 alert('789');

 Ti.API.info('---------------------remove grater than 5 ----------------:' + Alloy.Collections.history.length);

 Ti.API.info('-------------------------Before remove-------------------------' + Alloy.Collections.history.length);

 Ti.API.info('-------------------------After------------------------');

 var hisModel = Alloy.createModel('history', {
 'term_name' : name,
 'term_id' : id
 });
 hisModel.save();

 }
 }

 } else {

 if (Alloy.Collections.history.length > 0) {

 Ti.API.info('------ seond time length grater' + Alloy.Collections.history.length);

 for (var i = 0; i < Alloy.Collections.history.length; i++) {

 Ti.API.info('-----Alloy.Collections.history.at(i).get(term_id)---------:' + Alloy.Collections.history.at(i).get('term_id'));

 Ti.API.info('--- JSON:' + JSON.stringify(Alloy.Collections.history.at(i)));

 Ti.API.info('-----id---------:' + id);

 if (Alloy.Collections.history.at(i).get('term_id') == id) {

 alert('123');

 Alloy.Collections.history.at(i).destroy();

 var hisModel = Alloy.createModel('history', {
 'term_name' : name,
 'term_id' : id
 });
 hisModel.save();

 break;
 } else {

 var hisModel = Alloy.createModel('history', {
 'term_name' : name,
 'term_id' : id
 });
 hisModel.save();
 //break;
 }

 }
 } else {

 Ti.API.info('------------------------------------ Add first------------------------------------');

 var hisModel = Alloy.createModel('history', {
 'term_name' : name,
 'term_id' : id
 });
 hisModel.save();

 }

 }

 });
 var clickbtndet = function() {
 var details = Alloy.createController('hiswin').getView();
 details.open();
 };

 $.index.open();

 ///http://developer.appcelerator.com/question/145906/alloycollectionsreset-really-working-#comment-218275
 //https://developer.appcelerator.com/question/149527/delete-sql-query-on-alloy-collections
 */