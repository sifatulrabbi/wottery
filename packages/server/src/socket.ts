import type {Server} from "http";
import {Server as SocketServer} from "socket.io";
import {
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData,
} from "./interfaces";

export class Socket {
    readonly io: SocketServer;

    constructor(server: Server) {
        this.io = new SocketServer<
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
    }

    start() {
        this.io.on("connection", (socket) => {
            console.log("New client: %d", socket.id);
            socket.emit("talk", "Hi there new client. How are you?");
            socket.on("talk", (msg) => {
                console.log(msg);
            });
        });
    }
}
