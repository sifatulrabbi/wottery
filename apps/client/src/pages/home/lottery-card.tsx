import React from "react";
import type {ILottery} from "../../interfaces";

interface Props {
    lottery: ILottery;
}

export const LotteryCard: React.FC<Props> = ({lottery}) => {
    return (
        <div className="relative rounded-md flex flex-col justify-start items-start bg-white w-fit p-4 max-w-xs border-[1px] border-slate-200 max-h-fit">
            <span className="absolute top-0 right-0 bg-orange-500 text-white p-1 rounded-md">
                {new Date(lottery.exp_at).getDate() - new Date().getDate()} Days
                left
            </span>
            <img src="" alt="Lottery" height="150" width="280" />
            <h4 className="text-black text-2xl mb-4">{lottery.title}</h4>
            <p className="text-base text-slate-600">{lottery.summary}</p>
            <span className="text-sm italic block my-3">
                Offer ends @ {lottery.exp_at}
            </span>
            <button className="w-full bg-blue-500 p-2 text-white rounded-md transition-all duration-200 ease-out hover:bg-blue-600">
                Purchase{" "}
                <span className="font-bold">{"$" + lottery.price}</span>
            </button>
        </div>
    );
};
