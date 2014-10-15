var express = require('express');
var app = express();
var port = 8888;
var intersetRate;

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('listening' + port);

});

app.get('/interest_rate', function(req, res){

	interestRate = +(Math.random() * 19 + 1).toFixed(2)
	return res.status(200).send(JSON.stringify(interestRate)); 
})

