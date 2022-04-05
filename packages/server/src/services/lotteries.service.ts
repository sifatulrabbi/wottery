import {IDone} from "../interfaces";
import {Lottery} from "../models";
import {db} from "../pg";
// import {getDate} from "../utils";

class LotteriesService {
    private readonly tableName = "lotteries";
    async getAll(done: IDone<any[]>): Promise<void> {
        try {
            const lotteries = await db.query("select * from lotteries;");
            if (!lotteries.rows) return done(null, null);
            done(null, lotteries.rows);
        } catch (err) {
            console.error(err);
            done(err);
        }
    }

    async getOne(id: string, done: IDone<any[]>): Promise<void> {
        try {
            const lottery = await db.query(
                `select * from lotteries where id='${id}'`,
            );
            if (!lottery.rows) return done(null, null);
            done(null, lottery.rows);
        } catch (err) {
            console.error(err);
            done(err);
        }
    }

    async createOne(data: any, done: IDone<any[]>): Promise<void> {
        try {
            const lottery = new Lottery(
                data.name,
                data.price,
                data.description,
                data.end_date,
                data.prizes,
            );
            const result = await db.query(`insert into ${
                this.tableName
            } values (
                '${lottery.id}',
                '${lottery.name}',
                '${lottery.price}',
                '${lottery.description}',
                '${lottery.start_date.toISOString()}',
                '${lottery.end_date.toISOString()}',
                '${lottery.prizes.first}',
                '${lottery.prizes.second}',
                '${lottery.prizes.third}'
            );`);
            if (!result.rows) return done(null, null);
            this.getOne(lottery.id, (err, result) => {
                done(null, result);
            });
        } catch (err) {
            console.error(err);
            done(err);
        }
    }

    async updateOne(id: string, data: any, done: IDone<any[]>): Promise<void> {
        try {
            const result = await db.query(`update ${this.tableName}
            set ${data.name ? `name = '${data.name}'` : ""}
            where id = '${id}'`);
            if (!result.rows) return done(null, null);
            this.getOne(id, (err, result) => {
                done(null, result);
            });
        } catch (err) {
            console.error(err);
            done(err);
        }
    }

    async removeOne(id: string, done: IDone<any>): Promise<void> {
        try {
            const result = await db.query(
                `delete from ${this.tableName} where id = '${id}';`,
            );
            if (!result.rows) return done(null, null);
            done(null, {message: "Lottery removed"});
        } catch (err) {
            console.error(err);
            done(err);
        }
    }
}

export const lotteriesService = new LotteriesService();
