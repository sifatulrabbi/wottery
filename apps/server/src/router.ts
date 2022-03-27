import * as express from "express";
import {db} from "./memory-db";

export const router = express.Router();

router.get("/lotteries", (req, res) => {
    const lotteries = db.getAll();
    res.status(200).json(lotteries);
});

router.get("/lotteries/free", (req, res) => {
    const lotteries = db.getAll();
    const freeLotteries = lotteries.filter(
        (lottery) => lottery.type === "free",
    );
    res.status(200).json(freeLotteries);
});

router.get("/lotteries/premium", (req, res) => {
    const lotteries = db.getAll();
    const premiumLotteries = lotteries.filter(
        (lottery) => lottery.type === "premium",
    );
    res.status(200).json(premiumLotteries);
});
