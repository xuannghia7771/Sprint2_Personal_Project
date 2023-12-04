import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

function Footer() {
    return (
        <div>
            <footer className="bg-white pt-16 pb-12 border-t border-gray-200">
                <div className="container grid grid-cols-3">
                    {/*footer text*/}
                    <div className="col-span-1 space-y-8">
                        <img src="" alt="" className="w-28"/>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, necessitatibus?
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-blue-800">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-500">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-600">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                    {/*footer text end*/}
                    <div className="col-span-2 grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-4 gap-52">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Analytics</a>
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">API
                                        Status</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">About</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Blog</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Jobs</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Press</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Claim</a>
                                    <a href="#"
                                       className="text-base text-gray-500 hover:text-gray-900 block">Privacy</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Policy</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Terms</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*footer end*/}

            {/*copyright*/}
            <div className="bg-gray-800 py-4">
                <div className="container flex items-center justify-between">
                    <p className="text-white">
                        &copy; - All Rights Reserved
                    </p>
                </div>
            </div>
            {/*copyright end*/}
        </div>
    );
}

export default Footer;