var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/pillayar', function (req, res){
    res.send('everything starts with this first God ! Jai vinayaga !!!');  
 });
app.get('/bhrama', function (req, res){
    res.send('Bhrama is nature is to create everything !!!');  
 }); 
 app.get('/vishnu', function (req, res){
    res.send('God quality to protect every being is VISHNU !!!');  
 });
  app.get('/SIVA', function (req, res){
    res.send('God quality to DIMINISH every sin in to ashes is SIVA !!!');  
 });
 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
