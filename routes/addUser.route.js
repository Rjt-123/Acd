const express = require('express');  
const app = express();  
const addUserRoutes = express.Router();  
// Require Product model in our routes module 
let Product = require('../models/Product');  
let Cart = require('../models/Cart');  
let Person = require('../models/Customer');  
let Users = require('../models/Users');  



//registerrr
addUserRoutes.route('/addUser').post(function (req, res) {  
  let user = new Users(req.body);  
  console.log(user);
  user.save()  
    .then(user => {  
      res.status(200).json({'Users': 'Register has been added successfully'});  
    })  
    .catch(err => {  
    //  console.log(user);
    res.status(400).send("unable to save to database");  
    });  
});

addUserRoutes.route('/login').post(function (req, res) {  
  Users.findOne(req.params.Email, function(err, user) {  
    if (!user)  
      res.status(404).send("Record not found");  
    else {  
      
          res.json(user);  
       
    }  
  });  
});  

module.exports = addUserRoutes;  