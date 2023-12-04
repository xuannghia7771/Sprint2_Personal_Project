import React from 'react';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import product from "./product.jpg";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

function ProductCard(props) {
    return (
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
            {/*product grid*/}
            <div className="grid grid-cols-4 gap-6">
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
                {/*single product*/}
                <div className="bg-white shadow rounded overflow-hidden group">
                    {/*product image*/}
                    <div className="relative">
                        <img src={product} alt="" className="w-full"/>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </a>
                            <a href="#" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                        </div>
                    </div>
                    {/*product image end*/}

                    {/*product content*/}
                    <div className="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nutrabolic hydropure</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                            <p className="text-xl text-primary font-semibold">$45.00</p>
                            <p className="text-sm text-gray-400 line-through">$55.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <a href="#" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
                {/*single product end*/}
            </div>
        </div>
    );
}

export default ProductCard;