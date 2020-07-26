var express = require('express');
var app = express();
const bodyParse = require('body-parser');
app.use(bodyParse);

module.exports.createUser =  (req, res, next) =>{
  res.send('createUser');
};

module.exports.updateUser =  (req, res, next)=> {
  res.send('updateUser');
};

module.exports.deleteUser =  (req, res, next) =>{
  res.send('deleteUser');
};

module.exports.getAllUsers =  (req, res, next) =>{
  res.send('getAllUsers');
};
