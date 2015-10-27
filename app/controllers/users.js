var User = require('../models/user');
var formidable = require('formidable');

module.exports = function(){
   var module={};

   module.registerAction = function(data){
      
   };

   module.signUp = function(data,params,callback){
      //var form = new formidable.IncomingForm();

      var user = new User({
         name: data.name,
         username: data.username,
         password: data.password
      });

      user.save(function(err) {
         if (err) throw err;

         callback(null, data);
      });

   };

   module.logInUser= function(req,res){

   };


}
