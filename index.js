var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});
const topic = 'general';

const Blinkt = require('blinktjs');
const blinkt = new Blinkt();

blinkt.setup();
blinkt.clearAll();

const receiveMsg = (msg) => {
  console.log(msg.data.toString());

  if(msg.data.toString() == "on") {
    blinkt.setAllPixels(0, 0, 255, .5);
    blinkt.sendUpdate();
  }
  else if (msg.data.toString() == "off") {
    blinkt.setAllPixels(0, 0, 0, 0);
    blinkt.sendUpdate();
  }
}

ipfs.pubsub.subscribe(topic, receiveMsg);
