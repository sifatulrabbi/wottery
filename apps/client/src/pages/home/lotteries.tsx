import React from "react";
import {LotteryCard} from "./lottery-card";

export const Lotteries: React.FC = () => {
    return (
        <div className="flex flex-row flex-wrap gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                <LotteryCard key={item} />
            ))}
        </div>
    );
};
