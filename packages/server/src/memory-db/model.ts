import {ILottery} from "../interfaces";
import {v4} from "uuid";
import {db} from "./db";

export class Lottery implements ILottery {
    readonly id: string;
    readonly in_at: string;
    readonly title: string;
    readonly summary: string;
    readonly price: number;
    readonly type: "free" | "premium";
    readonly exp_at: string;
    private readonly store: typeof db;

    constructor(
        title: string,
        summary: string,
        price: number,
        type: "free" | "premium",
        exp_at: number,
    ) {
        this.store = db;
        this.id = v4();
        this.in_at = new Date().toISOString();
        this.title = title;
        this.summary = summary;
        this.price = price;
        this.exp_at = new Date(exp_at).toISOString();
        this.type = type;
    }

    save(): ILottery {
        const data: ILottery = {
            id: this.id,
            title: this.title,
            summary: this.summary,
            price: this.price,
            in_at: this.in_at,
            exp_at: this.exp_at,
            type: this.type,
        };
        const lottery = this.store.save(data);
        return lottery;
    }
}
