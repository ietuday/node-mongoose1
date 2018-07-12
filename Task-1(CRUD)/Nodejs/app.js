var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/schoolAPI');

var School = require('./models/schoolModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

schoolRouter = require('./Routes/schoolRoutes')(School);

app.use('/api', schoolRouter);


app.get('/', function(req, res){
    res.send('Welcome to School API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});