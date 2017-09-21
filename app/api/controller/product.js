var mongoose = require('mongoose'),
  Product = require('../model/product'),
  Q = require('q')
  
exports.GetProductsForBrandID = function(brand_id) {
  var deferred = Q.defer()
  console.log('GetProductsForBrandID function')
  Product.find({brand: brand_id}, function(err, result){
    if (err) {
      console.log(err)
       deferred.reject(err)
    }
    else {
      // console.log("Find Operations: " + result);
      deferred.resolve(result);
    }
  })
  return deferred.promise;
}
