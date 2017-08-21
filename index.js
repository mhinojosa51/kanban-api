console.log('Hello');
var express = require('express');
var app = express();

var tasks = require('./api/v1/tasks.js');

app.get('/', function(req,res,next){
	res.send('hello');
})

app.use('/tasks/', tasks);

app.listen(4000, function(){
	console.log('listening on port 4000');
})
