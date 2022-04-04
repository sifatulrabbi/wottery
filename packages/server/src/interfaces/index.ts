export interface ILottery {
    id: string;
    title: string;
    summary: string;
    price: number;
    type: "free" | "premium";
    in_at: string;
    exp_at: string;
}

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
