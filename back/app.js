var express=require('express');
var app=express();
const port = 3000;
const bodyParser =  require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/', express.static("templates"));

const db = require('./Config/configuracion');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(port, function(){
	console.log("Corriendo en el puerto 3000");
});

