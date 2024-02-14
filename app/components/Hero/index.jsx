'use client'
import React from 'react';
// import logo from 'app/components/navbar/ptgaLogo.png';
import Banner from './banner-ptga.jpg';


function Hero(props) {

    // console.log(props, typeof (props), 'bnr', typeof (Banner), Banner) -- permite ver tipo de dato/elemento

    return (
        <>
            <div className="hero min-h-screen w-full">
                <img src={Banner.src} alt="banner-ptga" />
            </div>

        </>


    );
}

export default Hero;