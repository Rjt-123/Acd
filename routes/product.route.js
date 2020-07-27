const express = require('express');  
const app = express();  
const productRoutes = express.Router();  
// Require Product model in our routes module  
let Product = require('../models/Product');  
let Cart = require('../models/Cart');  
let Person = require('../models/Customer');  
let Users = require('../models/Users');  

// Defined store route  
productRoutes.route('/add').post(function (req, res) {  
  let product = new Product(req.body);  
  product.save()  
    .then(product => {  
      res.status(200).json({'Product': 'Product has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  

    });  
});  

// Defined addToCart route  
productRoutes.route('/addToCart').post(function (req, res) {  
  let cart = new Cart(req.body);  
  cart.save()  
    .then(cart => {  
      res.status(200).json({'Cart': 'Product has been added  cart successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});  

// Defined get data(index or listing) route  
productRoutes.route('/').get(function (req, res) {  
  Product.find(function (err, products){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(products);  
    }  
  });  
});  

// Defined get cart data(index or listing) route  
productRoutes.route('/Cart').get(function (req, res) {  
  Cart.find(function (err, carts){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(carts);  
    }  
  });  
});  
// Defined edit route  
productRoutes.route('/edit/:id').get(function (req, res) {  
  let id = req.params.id;  
  Product.findById(id, function (err, product){  
      res.json(product);  
  });  
});  
//  Defined update route  
productRoutes.route('/update/:id').post(function (req, res) {  
  Product.findById(req.params.id, function(err, product) {  
    if (!product)  
      res.status(404).send("Record not found");  
    else {  
      product.ProductName = req.body.ProductName;  
      product.ProductDescription = req.body.ProductDescription;  
      product.ProductPrice = req.body.ProductPrice;  
 product.save().then(product => {  
          res.json('Update complete');  
      })  
      .catch(err => {  
            res.status(400).send("unable to update the database");  
      });  
    }  
  });  
});  
// Defined delete | remove | destroy route  
productRoutes.route('/delete/:id').get(function (req, res) {  
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){  
        if(err) res.json(err);  
        else res.json('Successfully removed');  
    });  
});  
module.exports = productRoutes;  