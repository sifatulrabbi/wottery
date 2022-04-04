import * as http from "http";
import {app} from "./app";
import {Socket} from "./socket";

export const server = http.createServer(app);
const socket = new Socket(server);

export function startServer() {
    socket.start();

    server.listen(8080, () => {
        console.log(server.address());
    });
}
