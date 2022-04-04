import {Pool} from "pg";

export const db = new Pool({
    user: "wottery_admin",
    host: "localhost",
    database: "wottery",
    password: "wottery_admin",
    port: 5432,
});

export async function connectDb() {
    try {
        const conn = await db.connect();
        conn.on("error", (err) => {
            console.log(err);
            process.exit(1);
        });
        console.log("Connected to the psql database");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
