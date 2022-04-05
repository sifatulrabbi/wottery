import {ILottery} from "./index";

export interface ClientToServerEvents {
    talk: (msg: string) => void;
}

export interface ServerToClientEvents {
    talk: (msg: string) => void;
    new_lottery: (lottery: ILottery) => void;
}

export interface InterServerEvents {
    ping: (msg: string) => void;
}

export interface SocketData {
    name: string;
    age: number;
}
