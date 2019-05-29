var express = require('express')
var router = express.Router()
const Task = require('../models/Usuario')

router.get('/usuarios', function(req, res, next) {
  Usuario.findAll()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
