const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


before(function(done){
  //connect to mongodb
  mongoose.connect('mongodb://localhost/accounts');

  mongoose.connction.once('open', function(){
    console.log('Connected to Mongodb Successfully...');
    done();
  }).on('error', function(){
    console.log('Connection error..!:');
  });
});
