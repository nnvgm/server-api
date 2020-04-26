const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  phone: Number,
});

module.exports = model('users', UserSchema, 'users');
