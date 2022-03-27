import {atom} from "recoil";
import type {ILottery} from "../interfaces";

export const lotteriesState = atom<ILottery[]>({
    key: "lotteries",
    default: [],
});
