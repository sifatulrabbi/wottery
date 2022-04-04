import * as http from "http";
import {app} from "./api/app";
import {Socket} from "./socket";
import {connectDb} from "./pg";

export const server = http.createServer(app);
const socket = new Socket(server);

export function startServer() {
    socket.start();
    connectDb();
    server.listen(8080, () => {
        console.log(server.address());
    });
}
