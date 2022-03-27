import React from "react";
import {Link} from "react-router-dom";
import {v4} from "uuid";

interface Props {
    name: string;
    links: {name: string; path: string}[];
}

export const Submenu: React.FC<Props> = ({name, links}) => {
    const [show, setShow] = React.useState(false);

    function toggleShow() {
        setShow((prev) => !prev);
    }

    return (
        <div className="relative">
            <button
                onClick={toggleShow}
                className="px-3 py-2 hover:bg-slate-100 rounded-md transition-all duration-200 ease-out"
            >
                {name}
            </button>
            <ul
                className={`absolute top-[100%] left-0 overflow-hidden transition-all duration-200 ease-in origin-top bg-white shadow-md flex flex-col rounded-md ${
                    show ? "scale-1" : "scale-0"
                }`}
            >
                {links.map((link) => (
                    <li key={v4()}>
                        <Link
                            to={link.path}
                            className="block px-3 py-2 hover:bg-slate-100"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
