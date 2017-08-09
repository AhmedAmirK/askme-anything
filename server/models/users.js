const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create schema and model

const UsersSchema = new schema({
  account_type:String,
  userID:String,
  username:String,
  email:String,
  image:String,
  data:[{question:String, answer:String}]
});

User = mongoose.model('user', UsersSchema);

module.exports = User;
