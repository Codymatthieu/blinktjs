var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}); // leaving out the arguments will default to these values
const topic = 'general';

const Blinkt = require('blinktjs');
const blinkt = new Blinkt();

  // https://github.com/ipfs/interface-ipfs-core/tree/master/API/pubsub#pubsubsubscribe
  const receiveMsg = (msg) => {
    console.log(msg.data.toString());
    // if(isEven(msg.data.toString())){
    if(msg.data.toString() == "on"){
      //blinkt.setAll('white')
//blinkt.setPixel(0, 255, 255, 255, 0.5);
blinkt.setAll(0, 0, 255);
blinkt.draw();
setTimeout(() => {
        console.log('end');
}, 5000););
    } else { }

ipfs.pubsub.subscribe(topic, receiveMsg);

});


