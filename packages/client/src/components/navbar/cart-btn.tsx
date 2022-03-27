import React from "react";
import {FaShoppingCart} from "react-icons/fa";

export const CartBtn: React.FC = () => {
    return (
        <div className="flex justify-center items-center relative">
            <button className="hover:bg-slate-100 rounded-md p-2">
                <FaShoppingCart className="text-2xl" />
            </button>
            <span className="absolute top-0 right-0 rounded-full text-blue-500 font-bold">
                0
            </span>
        </div>
    );
};
