'use client'

import React from 'react';
import Banner from './banner-ptga.jpg';
import { useEffect, useState } from 'react';

function Hero() {

    // console.log(props, typeof (props), 'bnr', typeof (Banner), Banner) -- permite ver tipo de dato/elemento

    // window.addEventListener('scroll', () => {
    //     console.log('esta scrolleando');
    // });

    const [scrollArriba, setScrollArriba] = useState(false);



    useEffect(() => {

        const handleScroll = () => {

            setScrollArriba(window.scrollY === 0)

        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);


        //se define una function que va a cambiar con el estado de scrollArriba

    }, []);


    return (

        <div className="banner-container" style={{ opacity: scrollArriba ? 1 : 0, transition: 'opacity 0.7s' }}>

            <div className="hero absolute top-0 mt-56 z-20">

                <div className="hero-content text-center">
                    <div className="max-w-max drop-shadow-lg">
                        <h1 className={'${bebasNeue .style} px-8 mb-5 text-center text-white text-9xl tracking-[.25em] relative z-30 drop-shadow'}> PTGA</h1>
                        <h2 className={'${montserrat.style} leading-loose mb-5 text-center text-white text-6xl relative z-10 drop-shadow'}>
                            Producción Tecnológica, Gráfica y Audiovisual LTDA
                        </h2>
                    </div>
                </div>
                <div className={scrollArriba ? "hero min-h-screen relative overflow-hidden bg-cover bg-no-repeat h-[400px]" : "hero min-h-screen bg-transparent"} style={{ backgroundImage: scrollArriba ? `src(${Banner})` : {} }}>

                </div>
            </div>
        </div>

    );
}

// const objetoImagen = {} hace falta esto , me pierdo (?)

export default Hero;