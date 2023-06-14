const EventEmitter = require('events'); //built-in package
const myEmitter = new EventEmitter();

// // function that is called when event occurs
// const welcomeUser = () => {
//     console.log('Hi, welcome to the server');
// }

// // listening for the event
// myEmitter.on('userJoined',welcomeUser);

// // causing event to occur
// myEmitter.emit('userJoined');

// multiple on() functions
const sayHello = () => {
    console.log('Hello User');
}

const greetNewYear = () => {
    console.log('Happy New Year');
}

myEmitter.on('userJoined',sayHello);
myEmitter.on('userJoined',greetNewYear);

myEmitter.emit('userJoined');
