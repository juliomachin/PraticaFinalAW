var express=require('express');
const port = 3000;
const bodyParser =  require("body-parser");


var usuarios = require('./routes/usuarios')
var cors = require('cors')

var app=express();
app.use(cors())

// Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/usuarios', usuarios)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})


app.get('/', function(req, res) {

  res.sendFile(__dirname + "/templates/index.html");
  console.log(req.body);

});


