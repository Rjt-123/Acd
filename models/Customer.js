
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Person = new Schema({  
    FirstName: {  
    type: String  
  },   
  LastName: {  
    type: String  
  },  
   Mobile: {  
    type: Number

  },
  Email: {  
    type: String  
  },  
  Password: {  
    type: String  
  } 
},{  
    collection: 'Person'  
});  
module.exports = mongoose.model('Person', Person);  