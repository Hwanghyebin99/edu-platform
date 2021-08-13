const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('../config')

// Define Schemes
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }
});

// create new User document
userSchema.statics.create = function( id, userName, password) {
  const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64');
  console.log(encrypted);
  const user = new this({
      id:id,
      userName:userName,
      password:encrypted
  })
  // return the Promise
  return user.save()
}

// find one user by using username
userSchema.statics.findOneByUserId = function(id) {
  return this.findOne({
      id
  }).exec()
}

// verify the password of the User documment
userSchema.methods.verify = function(password) {
  const encrypted = crypto.createHmac('sha1', config.secret)
                      .update(password)
                      .digest('base64');
  console.log(encrypted);
  return this.password === encrypted
}

userSchema.methods.assignAdmin = function() {
  this.admin = true
  return this.save()
}

// Create Model & Export
module.exports = mongoose.model('User', userSchema);