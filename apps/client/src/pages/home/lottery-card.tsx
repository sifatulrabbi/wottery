import React from "react";

export const LotteryCard: React.FC = () => {
    return (
        <div className="relative rounded-md flex flex-col justify-start items-start bg-white w-fit p-4 max-w-xs border-[1px] border-slate-200">
            <span className="absolute top-0 right-0 bg-orange-500 text-white p-1 rounded-md">
                2 Days left
            </span>
            <img src="" alt="Lottery" height="150" width="280" />
            <h4 className="text-black text-2xl mb-4">
                Get iPhone XII for free
            </h4>
            <p className="text-base text-slate-600">
                Lorem, ipsum dolor sit amet conse ctetur adipis icing elit.
                Vitae minima praesen tium laborum.
            </p>
            <span className="text-sm italic block my-3">
                Offer ends @ 29 March, 2022
            </span>
            <button className="w-full bg-blue-500 p-2 text-white rounded-md transition-all duration-200 ease-out hover:bg-blue-600">
                Purchase <span className="font-bold">$3</span>
            </button>
        </div>
    );
};
