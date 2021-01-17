require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const path = require("path");
app.use(express.static(path.join(__dirname, "build")));
console.log(__dirname)
const users = {};

const socketToRoom = {};

io.on("connection", (socket) => {
	socket.on("join room", (roomID) => {
		const ID = socket.id;
		if (users[roomID]) {
			const length = users[roomID].length;
			if (length === 5) {
				socket.emit("room full");
				return;
			}
			users[roomID].push(ID);
		} else {
			users[roomID] = [ID];
		}
		socketToRoom[ID] = roomID;
		const usersInThisRoom = users[roomID].filter((id) => id !== ID);
		socket.emit("yourID", ID);
		socket.emit("all users", usersInThisRoom);
	});
	socket.on("canvas-data", (data) => {
		socket.broadcast.emit("canvas-data", data);
	});
	socket.on("new message", (data) => {
		socket.broadcast.emit("new message", {
			roomID: data.roomID,
			message: data.msg,
		});
	});

	socket.on("sending signal", (payload) => {
		io.to(payload.userToSignal).emit("user joined", {
			signal: payload.signal,
			callerID: payload.callerID,
		});
	});

	socket.on("returning signal", (payload) => {
		io.to(payload.callerID).emit("receiving returned signal", {
			signal: payload.signal,
			id: socket.id,
		});
	});

	socket.on("disconnect1", (roomID,userID) => {
		const usersInThisRoom = users[roomID].filter((id) => id !== userID);
		socket.emit("all users", usersInThisRoom);
	});
});
app.use('/Caller', express.static('./build'));
server.listen(process.env.PORT || 8000, () =>
	console.log("server is running on port 8000")
);
