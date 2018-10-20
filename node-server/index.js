//initialize express app
var express = require('express');
var app = express();

//parser for request body json 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));

//import main 
var main = require('./routes/main');
app.use('/', main);


//ifconifg arc0 -> use that ip address instead of localhost
const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});
