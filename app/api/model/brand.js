var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Brand = new Schema({
  name: { type: String, required: true } 

  // password: { type: String, required: true },
  // phone: { type: Number },
  // email: { type: String, required: true, unique: true },
  // verification_token: { type: String, required: true},
  // is_verified: {type: Boolean, default: false}
});


var collection_name="brand"

// Client.pre('save', function(next) {
//   var user = this;
//   if (this.isModified('password') || this.isNew) {
//     bcrypt.genSalt(10, function(err, salt) {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, function(err, hash) {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });

/*Client.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};*/



module.exports = mongoose.model('Brand', Brand,collection_name);