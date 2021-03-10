var event = require('events');
var eventEmitter = new event.EventEmitter();

var myEvent = function(){
    console.log("My Event");
}

eventEmitter.on("event1", myEvent); // it is like give a name to your event

eventEmitter.emit("event1");