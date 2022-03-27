import React from "react";
import {Lotteries} from "./lotteries";

export const Home: React.FC = () => {
    return (
        <div className="w-full px-[8vw] py-5 mt-[80px]">
            <h2 className="text-4xl">Free Lotteries</h2>
            <hr className="my-4" />
            <Lotteries />
        </div>
    );
};
