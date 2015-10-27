var productController = require('../controllers/product');

module.exports = function() {

   var module = {};

   module.find = productController.getAllProduct;
   module.create = productController.registerProduct;

   return module;
}
