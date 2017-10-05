var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var arr = require('./config/data.js')

app.use(express.static('public'));

// respond  when a GET request is made to the homepage
app.get('/',function(req,res){
	
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/filter',arr.filter)
app.post('/search',arr.search)






















app.listen(8080,function(){

	console.log('服务器启动成功')
})
