var express = require('express.io');
var app = express();
app.http().io();
var PORT = 7000;
console.log('server started');

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.render('index.ejs');
});

app.io.route('ready', function(req){
	req.io.join(req.data);
	app.io.room(req,data).broadcast('announce', {
		message: 'new client in the' + req.data + 'room.'
	})
})
app.listen(PORT);