var exp = require('express');
var app = exp();
var hbars = require('express-handlebars');
var bodyparser = require('body-parser');
var r = require('./routes/routes.js');

app.use(exp.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.set('view engine', 'handlebars');
app.engine('handlebars', hbars({}));

app.get('/', r.rootHandler);	//-----------MAPPING FOR method=get & action=/ ---------
app.get('/calc-form', r.calcFormHandler); 
app.get('/conv-form', r.convFormHandler); 
app.post('/calc-result', r.calcResultHandler);
app.post('/conv-result', r.convResultHandler); 
//process.env.npm_package_config_port
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('server listening on port ' + port);
});
 