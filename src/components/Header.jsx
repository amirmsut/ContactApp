import React from "react";
const Header = () => {
    return (
        <div className="my-12 text-center">
            <h1 className="text-blue-500 text-3xl font-bold">Contact App</h1>
            <p className="text-slate-700 p-1 m-4">
                <a
                    className="m-1 text-blue-500 bg-slate-200 px-3 py-1 rounded-md hover:text-[#bbdefb] bg-[#304ffe]"
                    href="http://amirmsut.ir"
                >
                    Website
                </a>
                | amirmsut
            </p>
        </div>
    );
};

export default Header;
