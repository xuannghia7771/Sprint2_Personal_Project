import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import { ReactSVG } from "react-svg";

function Header(props) {
    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                {/*logo*/}
                <a href="#">
                    <ReactSVG src="icon.svg" />
                </a>
                {/*searchBar*/}
                <div className="w-full max-w-xl relative flex">
                    <span className="absolute left-4 top-3 text-lg text-gray-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input type="text" className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none" placeholder="search"/>
                    <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
                </div>

                {/*icon*/}
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className="text-xs leading-3">Wish List</div>
                        <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                    </a>
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</span>
                    </a>
                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;