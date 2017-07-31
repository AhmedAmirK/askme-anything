var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
require('dotenv').config();

//Watson-Discovery connection
var discovery = new DiscoveryV1({
  username: process.env.DISCOVERY_USERNAME,
  password: process.env.DISCOVERY_PASSWORD,
  version: 'v1',
  version_date: '2017-06-25'
});


module.exports = discovery;
