import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                {/*all category*/}
                <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                    <span className="text-white">
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                    <span className="capitalize ml-2 text-white">All categories</span>

                    <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed hidden group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Whey Protein</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Fat Burned</span>
                        </a>
                        <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <span className="ml-6 text-gray-600 text-sm">Work-out Performance</span>
                        </a>
                        {/*<a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">*/}
                        {/*    <span className="ml-6 text-gray-600 text-sm">Whey</span>*/}
                        {/*</a>*/}
                        {/*<a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">*/}
                        {/*    <span className="ml-6 text-gray-600 text-sm">Whey</span>*/}
                        {/*</a>*/}
                        {/*<a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">*/}
                        {/*    <span className="ml-6 text-gray-600 text-sm">Whey</span>*/}
                        {/*</a>*/}
                    </div>
                </div>
                {/*all category end*/}

                {/*nav link*/}
                <div className="flex items-center justify-between flex-grow pl-12">
                    <div className="flex items-center space-x-6 capitalize">
                        <a href="#" className="text-gray-200 hover:text-white transition">Home</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Shop</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">About Us</a>
                        <a href="#" className="text-gray-200 hover:text-white transition">Contact Us</a>
                    </div>
                    <a href="#" className="text-gray-200 hover:text-white transition">Login/Register</a>
                </div>

            </div>
            {/*navbar end*/}
        </nav>
    );
}

export default NavBar;