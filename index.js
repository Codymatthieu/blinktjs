var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
const topic = 'general';

var Blinkt = require('blinktjs');
var blinkt = new Blinkt();

blinkt.setup();
blinkt.clearAll();

const receiveMsg = (msg) => {
  console.log(msg.data.toString());

  if(msg.data.toString() == "on") {
    blinkt.setAll(0, 0, 255);
    blinkt.draw();
  }
  else if (msg.data.toString() == "off") {
    blinkt.setAll(0, 0, 0);
    blinkt.draw();
  }
}

ipfs.pubsub.subscribe(topic, receiveMsg);
