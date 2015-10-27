var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var productSchema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  price : String,
  name: String,
  created_at: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Product = mongoose.model('Product', productSchema);

// make this available to our users in our Node applications
module.exports = Product;
