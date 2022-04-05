import {Router} from "express";
import {lotteriesRouter} from "./lotteries.router";

export const router = Router();

router.use("/lotteries", lotteriesRouter);
