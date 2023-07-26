const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler:
const myEventHandler = function () {
    console.log('Im a function 1 for event handler');
}

// Create an event handler:
const myEventHandler2 = function () {
    console.log('Im a function 2 for event handler');
}

// Assign the event handler to an event:
eventEmitter.on('f1', myEventHandler);
eventEmitter.on('f2', myEventHandler2);

// Fire the 'f1 and f2' event:
eventEmitter.emit('f1');
eventEmitter.emit('f2');
eventEmitter.emit('f2');
eventEmitter.emit('f2');
eventEmitter.emit('f2');