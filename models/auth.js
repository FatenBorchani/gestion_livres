const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastname: { type: String, require: true },
  firstname: { type: String, require: true },
  role: { type: String, require: true, enum: ["Admin","User"] }
});


userSchema.virtual('name').get(function () {
  return `${this.firstname} ${this.lastname}`;
});
userSchema.methods.toPublic = function () {
   const user = this.toObject();
   delete user.password;
   user.name = this.name; 
   return user;
 };
 userSchema.plugin(uniqueValidator);
 module.exports = mongoose.model('User', userSchema);
 