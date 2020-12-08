const socketio = require('socket.io');

let io;
exports.setupSocket = (server) => {
  io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(socket.id);
  });
};

exports.sendMessage = (message, value) => {
  io.emit(message, value);
};
