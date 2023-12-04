import React from 'react';
import background from "./banner2.jpg"

function Banner() {
    return (
        <div className="bg-cover bg-no-repeat bg-center py-64 max-h-screen" style={{backgroundImage: `url(${background})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`}}>
        </div>
    );
}

export default Banner;