var mongoose = require('mongoose'),
  Brand = require('../model/brand'),
  Q = require('q')
  
exports.getBrandsList = function() {
  var deferred = Q.defer()
  console.log('getBrandsList function')
  Brand.find({}, function(err, result){
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
