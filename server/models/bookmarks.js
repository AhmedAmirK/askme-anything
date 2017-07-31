const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create schema and model

const BookmarksSchema = new schema({
  userID:String,
  data:[{question:String, answer:String}]
});

Bookmark = mongoose.model('bookmark', BookmarksSchema);

module.exports = Bookmark;
