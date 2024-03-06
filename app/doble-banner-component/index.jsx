import React from "react";

import bgBanner from '../doble-banner-component/banner doble img 1.jpg';

function DobleBanner() {
    const a = 2
    const b = 3
    console.log(a * b)

    return (
        <div>
            <div className="p-8 drop-shadow-md w-full bg-transparent h-96">

                <div className="drop-shadow-md w-full h-2/4 bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
                    {/* style={{ backgroundImage: `url(${bgBanner})` }} */}

                </div>
                <div className="banner-texto backdrop-blur-2xl bg-gradient-radial from-teal-600 from-60% to-teal-800 pb-10 drop-shadow-md w-full bg-white h-2/4 ">
                    <h1 className="text-center text-4xl text-wrap align-middle pt-16 tracking-tighter uppercase">Aca un texto importante sobre PTGA para el banner</h1>
                </div>
            </div>
        </div>

    )
}

export default DobleBanner;