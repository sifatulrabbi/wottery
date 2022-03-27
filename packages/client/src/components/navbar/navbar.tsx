import React from "react";
import {Link} from "react-router-dom";
import {Submenu} from "./submenu";
import {v4} from "uuid";
import {CartBtn} from "./cart-btn";

const links = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {
        name: "Lotteries",
        links: [
            {name: "Free", path: "/lotteries/free"},
            {name: "Premium", path: "/lotteries/premium"},
        ],
    },
];

export const Navbar: React.FC = () => {
    return (
        <div className="bg-white z-50 px-[8vw] py-4 fixed top-0 left-0 right-0 flex flex-row justify-start items-center shadow-md">
            <Link to="/#" replace>
                <span className="text-xl uppercase font-bold">Wottery</span>
            </Link>
            <div className="flex flex-row items-center ml-12 gap-4">
                {links.map((link) =>
                    link.path ? (
                        <Link
                            key={v4()}
                            to={link.path}
                            className="px-3 py-2 hover:bg-slate-100 rounded-md transition-all duration-200 ease-out"
                        >
                            {link.name}
                        </Link>
                    ) : (
                        link.links && <Submenu key={v4()} {...link} />
                    ),
                )}
            </div>
            <div className="flex-grow flex flex-row justify-end gap-4">
                <CartBtn />
                <button className="h-fit px-4 py-2 transition-all duration-200 ease-out bg-blue-500 bg-opacity-10 text-blue-500 rounded-md hover:bg-opacity-20">
                    Sign up
                </button>
                <button className="h-fit px-4 py-2 transition-all duration-200 ease-out bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Login
                </button>
            </div>
        </div>
    );
};
