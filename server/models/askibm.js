const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create schema and model

const AskIBMSchema = new schema({
  question:String,
  userID:String,
  name:String,
  email:String,
  country:String,
  company:String,
  account_type:String
});

const AskIBM = mongoose.model('askIBM', AskIBMSchema);

module.exports = AskIBM;
