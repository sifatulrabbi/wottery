import React from "react";
import {LotteryCard} from "./lottery-card";
import {useRecoilValue} from "recoil";
import {lotteriesState} from "../../atoms";

export const Lotteries: React.FC = () => {
    const lotteries = useRecoilValue(lotteriesState);

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center items-start">
            {lotteries.map((lottery) => (
                <LotteryCard key={lottery.id} lottery={lottery} />
            ))}
        </div>
    );
};
