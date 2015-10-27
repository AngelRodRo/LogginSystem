var Product = require('../models/product');
var User = require('../models/user');
var Action = require('../models/action');

module.exports = function(){
   var module={};

   module.registerProduct = function(data,params,callback){
      var product = new Product({
         type: data.type,
         price : data.price,
         name : data.name,
         created_at: '',
         updated_at: ''
      });

      product.save(function(err){
         if(err) throw err;

         var action = new Action({
            type:'R',
            id_user:'0'
         });

         action.save(function(err){
            if(err) throw err;
         });

         callback(null,data);
      });
   };

   module.getAllProduct = function(params,callback){
      console.log('Metodo para obtener todos los productos');
      Product.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        callback(null, users);
     });
  };

   return module;

};
