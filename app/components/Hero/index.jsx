'use client'

import React from 'react';
import Banner from './banner-ptga.jpg';
import { montserrat } from '../Fonts/appFonts';


function Hero(props) {

    // console.log(props, typeof (props), 'bnr', typeof (Banner), Banner) -- permite ver tipo de dato/elemento

    return (
        <>

            <div className='hero min-h-screen'>
                <div className='hero-content'>
                    <img src={Banner.src} alt="banner-ptga" />
                </div>
                <div className='hero-overlay bg-opacity-20 '>
                    <div className='hero-content text-center absolute w-full h-full text-white-50'>

                        <div className="max-w-md">
                            <h1 className={'${bebasNeue.style} mb-5 text-4xl'}> PTGA</h1>
                            <h2 className={'${montserrat.style} text-sm'}>
                                Producción Tecnológica, Gráfica y Audiovisual LTDA
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-96 object-cover">

                </div>
            </div >










        </>


    );
}

export default Hero;