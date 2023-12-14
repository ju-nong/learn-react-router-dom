import React from "react";
import { Link, NavLink } from "react-router-dom";

function TheHeader() {
    return (
        <header className="flex px-4 items-center">
            <div className="w-[calc(100vw/4)] leading-[48px]">
                <Link to="/" className="inline-block h-full">
                    ju-nong
                </Link>
            </div>

            <ul className="flex-1 flex gap-x-4 leading-[48px] ">
                <NavLink to="/repositories">Repositories</NavLink>
                <NavLink to="/stars">Stars</NavLink>
            </ul>
        </header>
    );
}

export { TheHeader as default };
