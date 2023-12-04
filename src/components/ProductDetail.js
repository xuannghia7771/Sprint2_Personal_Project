import React from 'react';
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import product1 from "./mutant-iso-surge-banana-cream.jpg";
import product2 from "./mutant-iso-surge-chocolate-fudge.jpg";
import product3 from "./mutant-iso-surge-coconut-cream.jpg";
import product4 from "./mutant-iso-surge-cookie.jpg";
import product5 from "./mutant-iso-surge-mint-chocolate.jpg";
import product6 from "./mutant-iso-surge-peanut-butter-chocolate.jpg";
import product7 from "./mutant-iso-surge-strawberry-milkshake.jpg";
import product8 from "./mutant-iso-surge-vanilla-ice-cream.jpg";
function ProductDetail(props) {
    return (
        <div>
            <Header/>
            <NavBar/>
            {/*breadcrums*/}
            <div>
                <div className="container py-4 flex items-center gap-3">
                    <a href="#" className="text-primary text-base">
                        <FontAwesomeIcon icon={faHouse} />
                    </a>
                    <span className="text-sm text-gray-400">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <p className="text-gray-600 font-medium">Product View</p>
                </div>
            </div>
            {/*breadcrums end*/}

            {/*product view*/}
            <div className="container grid grid-cols-2 gap-6">
                {/*product image*/}
                <div>
                    <img src={product1} alt="loading" className="w-full"/>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <img src={} alt="loading" />
                    </div>
                </div>
            </div>
            {/*product view end*/}
            <Footer/>
        </div>
    );
}

export default ProductDetail;