import * as http from "http";
import {app} from "./app";
import {Server} from "socket.io";
import {
    ServerToClientEvents,
    ClientToServerEvents,
    SocketData,
    InterServerEvents,
} from "./interfaces";

export const server = http.createServer(app);
export const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET"],
    },
});

io.on("connection", (socket) => {
    console.log("New client: %d", socket.id);
    socket.emit("talk", "Hi there new client. How are you?");
    socket.on("talk", (msg) => {
        console.log(msg);
    });
});
