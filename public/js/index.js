	var socket = io();

		socket.on('connect', () => {
			console.log('Connected to server')
		});

		socket.on('disconnect', () => {
			console.log('Disconnected From server');
		});

		socket.on('newMessage',function(message) {
			console.log('newMessage',message);
		} )

	