const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create schema and model

const AccountsSchema = new Schema({
  name:String,
  email:String,
  account_type:String
});

const Accounts = mongoose.model('accounts', AccountsSchema);

module.exports = Accounts;
