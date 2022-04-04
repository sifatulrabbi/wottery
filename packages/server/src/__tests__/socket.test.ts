import {server, io} from "../server";
import {
    ClientToServerEvents,
    ILottery,
    ServerToClientEvents,
} from "../interfaces";
import {io as Client, Socket} from "socket.io-client";

let port: number | unknown,
    client: Socket<ServerToClientEvents, ClientToServerEvents>;

beforeAll((done) => {
    server.listen(() => {
        // @ts-ignore
        port = server.address().port;
        client = Client(`http://localhost:${port}`);
        done();
    });
});

afterAll((done) => {
    server.close();
    client.close();
    done();
});

describe("Testing socket", () => {
    test("Server should send a message", () => {
        client.on("talk", (msg) => {
            expect(msg).toBeTruthy();
            expect(msg).toBe("Hi there new client. How are you?");
        });
    });

    test("client should be able to talk to the server", () => {
        const clientMsg = "Hi server. I am client";
        client.emit("talk", clientMsg);

        io.on("connection", (socket) => {
            socket.on("talk", (msg) => {
                expect(msg).toBe(clientMsg);
            });
        });
    });

    test("client should get new_lottery event", () => {
        const lottery: ILottery = {
            id: "mock_lottery_id",
            title: "Mock Lottery",
            summary: " Mock Lottery summary",
            price: 15,
            in_at: new Date().toISOString(),
            exp_at: new Date().toISOString(),
            type: "free",
        };
        io.emit("new_lottery", lottery);

        client.on("new_lottery", (data) => {
            expect(data).toBe(lottery);
        });
    });
});
