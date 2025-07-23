const EventEmitter = require('events')
const emitter = new EventEmitter()

function sendMesagge(name, mesagge, emitter) {
  console.log(`${name} prints a message...`)
  emitter.emit('message', name, mesagge)
}

emitter.on('message', (name, mesagge) => {
  console.log(`${name}: ${mesagge}`)
})

sendMesagge('John', 'Hello!', emitter)
sendMesagge('David', 'Did you do your homework 2?', emitter)
sendMesagge('John', 'Yes, I like it. Node.js is the best!', emitter)
