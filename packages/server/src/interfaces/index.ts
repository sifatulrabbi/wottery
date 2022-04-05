export type IDone<T> = (err: null | Error | unknown, result?: null | T) => void;

export * from "./lotteries.interface";
export * from "./socket.interface";
