'use client'

import React from 'react';
import Banner from './banner-ptga.jpg';
import bebasNeue from '../Fonts/appFonts';
import { montserrat } from "../Fonts/appFonts";


function Hero(props) {

    // console.log(props, typeof (props), 'bnr', typeof (Banner), Banner) -- permite ver tipo de dato/elemento

    return (
        <>
            <div className="hero absolute top-0 mt-56 z-20">
                <div className="hero relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[700px]" style={{ backgroundImage: `url(${Banner.src})` }}>
                    <div className="hero-content text-center">
                        <div className="max-w-max">
                            <h1 className={'${bebasNeue .style} px-8 mb-5 text-center text-white text-9xl tracking-[.25em] relative z-30 drop-shadow'}> PTGA</h1>
                            <h2 className={'${montserrat.style} leading-loose mb-5 text-center text-white text-6xl relative z-10 drop-shadow'}>
                                Producción Tecnológica, Gráfica y Audiovisual LTDA
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default Hero;