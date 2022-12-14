const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
  rooms.set('hello', 'g');
  res.json(rooms);
});

io.on('connection', (socket) => {
  console.log('user connected', socket.id);
});

server.listen(4000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('server is ok');
});
