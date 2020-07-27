const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Users = new Schema({  
  FirstName: {  
    type: String  
  },   
  LastName: {  
    type: String  
  } , 

Mobile: {  
    type: Number  
  }, 
  Email: {  
    type: String  
  }, 
  Password: {  
    type: String  
  }
 }, {  
    collection: 'Users'  
});  
module.exports = mongoose.model('Users', Users);  