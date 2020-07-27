const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Cart = new Schema({  
  ProductName: {  
    type: String  
  },   
  ProductPrice: {  
    type: Number  
  }  
},{  
    collection: 'Cart'  
});  
module.exports = mongoose.model('Cart', Cart);  