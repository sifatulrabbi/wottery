import {v4} from "uuid";
import type {ILottery} from "../interfaces";

const words =
    "solid warning ton range stable by star queen branch butterfly headquarters trivial suggest charity edition east attention morale consultation operational salvation diameter thinker orchestra inn quest walk reactor management observer bat sofa collect perceive month sip garage situation immune pie late dentist monkey orgy slime hiccup unanimous miracle open illustrate friend restrict turkey marine survival terminal bubble fruit wording network salon economy similar stable youth filter pot imagine federation president mix myth era approval superior smash accept conversation valid affect national lid embryo bloodshed ton surround missile glow gap proportion domination presentation torch pray tenant aquarium experience copy opposition recognize";

class InMemoryDb {
    private lotteries: ILottery[] = [];

    constructor() {
        for (let i = 0; i < 50; i++) {
            const lottery: ILottery = {
                id: v4(),
                title: this.randSentence(),
                summary:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lectus non magna bibendum consectetur",
                type: (Math.random() * 10) % 2 === 0 ? "free" : "premium",
                price: Math.floor(Math.random() * 50) + 1,
                in_at: new Date().toISOString(),
                exp_at: new Date(Date.now() + 323456593).toISOString(),
            };
            this.save(lottery);
        }
    }

    private randSentence(): string {
        const length = 4;
        const wordsArr = words.split(" ");
        const arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(wordsArr[Math.floor(Math.random() * wordsArr.length)]);
        }
        const sentence = arr.join(" ");
        return sentence;
    }

    save(lottery: ILottery): ILottery {
        this.lotteries.push(lottery);
        return lottery;
    }

    delete(id: string): ILottery | null {
        const lottery = this.getOne(id);
        if (!lottery) return null;
        const index = this.lotteries.indexOf(lottery);
        this.lotteries.splice(index, 1);
        return lottery;
    }

    getOne(id: string): ILottery | null {
        const lottery = this.lotteries.find((lottery) => lottery.id === id);
        if (!lottery) return null;
        return lottery;
    }

    getAll(): ILottery[] {
        return this.lotteries;
    }

    update(id: string, data: Partial<ILottery>): ILottery | null {
        const lottery = this.getOne(id);
        if (!lottery) return null;
        const index = this.lotteries.indexOf(lottery);
        this.lotteries.splice(index, 1);
        const newLottery = this.save({...lottery, ...data});
        return newLottery;
    }
}

export const db = new InMemoryDb();
