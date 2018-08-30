
const express = require('express');
const app = express();
const port = process.env.PORT || 4567
const server = app.listen(port);
app.use(express.static('build'));
console.log('this is working');

const socket = require('socket.io');
const io = socket(server);
io.origins('*:*')
io.set('origins', 'CLIENT_URL');

io.sockets.on('connection', newConnection);
function newConnection(socket) {
  console.log(`new connection ${socket.id}`);
  socket.on('mouse', mouseMsg);
  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }

}
