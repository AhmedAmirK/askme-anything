const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/accounts');
//mongodb Connection

mongoose.connect('mongodb://askme-anything:askme-anything@ds163612.mlab.com:63612/askme-anything', {
  useMongoClient: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to the database");
});
