var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actionSchema = new Schema({
   type: String,
   id_user: String,
   created_at: Date,
   updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Action = mongoose.model('Action', actionSchema);

// make this available to our users in our Node applications
module.exports = Action;
