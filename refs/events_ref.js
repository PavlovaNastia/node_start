// //The EventEmitter class is defined and exposed by the events module:

// const EventEmitter = require('events')

// class Logger extends EventEmitter {
//     log(message) {
//         this.emit('message', `${message} ${Date.now()}`)
//     }
// }

// const logger = new Logger()

//     logger.on('message', data => {
//         console.log(data)
//     })


//     logger.log('First')
//     logger.log('Second')
//     logger.log('Third')


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

