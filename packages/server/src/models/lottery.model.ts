import {v4} from "uuid";
import {ILottery} from "../interfaces";

export class Lottery implements ILottery {
    readonly id: string;
    name: string;
    price: number;
    description: string;
    start_date: Date;
    end_date: Date;
    prizes: {
        first: string;
        second: string;
        third: string;
    };

    constructor(
        name: string,
        price: number,
        description: string,
        end_date: Date,
        prizes: {first: string; second: string; third: string},
    ) {
        this.id = v4();
        this.name = name;
        this.price = price;
        this.description = description;
        this.start_date = new Date();
        this.end_date = end_date;
        this.prizes = prizes;
    }
}
