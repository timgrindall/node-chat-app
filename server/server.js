const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'User 2',
		text: 'Got your message',
		createdAt: 'timestamp'
	});

	// socket.on('newMessage', (from, text, createdAt) => {
	// 	console.log('newMessage', from, text, createdAt);
	// });

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
	})

	socket.on('disconnect', () => {
		console.log('User disconnected');
	});
});

// binds port to app
server.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});