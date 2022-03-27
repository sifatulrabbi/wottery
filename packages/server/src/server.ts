import * as http from "http";
import {app} from "./app";
import {Server} from "socket.io";

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost"],
        methods: ["POST", "GET"],
    },
});

io.on("connection", (socket) => {
    console.log("New client: %d", socket.id);
});

server.listen(8080, () => {
    console.log("Server is running on port: %d", 8080);
});
