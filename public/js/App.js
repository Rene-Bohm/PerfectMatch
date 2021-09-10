var id;
var socket;

function run(id) {
	id = id;

	const socketProtocol =
		window.location.protocol === "https:" ? "wss:" : "ws:";
	const socketUrl =
		socketProtocol +
		"//" +
		window.location.hostname +
		":" +
		window.location.port +
		"/app/" +
		id;
	socket = new WebSocket(socketUrl);

	socket.onopen = () => {
		setInterval(() => {
			socket.send(
				JSON.stringify({
					msg: "Hello World",
				})
			);
		}, 2000);
	};
}
