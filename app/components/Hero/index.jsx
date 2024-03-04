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
        <div className="flex flex-col w-full">
            <div className="banner-container" style={{ opacity: scrollArriba ? 1 : 0, transition: 'opacity 0.9s' }}>

                <div className="hero absolute w-full mt-56 z-20">

                    <div className="hero-content text-center">
                        <div className="max-w-max drop-shadow-lg">
                            <h1 className={'${bebasNeue .style} px-8 mb-5 text-center text-white text-9xl tracking-[.25em] relative z-30 drop-shadow'}> PTGA</h1>
                            <h2 className={'${montserrat.style} leading-loose mb-5 text-center text-white text-6xl relative z-10 drop-shadow'}>
                                Producción Tecnológica, Gráfica y Audiovisual LTDA
                            </h2>
                        </div>
                    </div>
                    <div className={scrollArriba ? "hero min-h-screen relative overflow-hidden bg-cover bg-no-repeat h-[400px]" : "hero min-h-screen bg-transparent"} style={{ backgroundImage: scrollArriba ? `src(${Banner})` : {} }}>
                        {scrollArriba ? null : (
                            <div>
                                <h1 className='bebas-nehue '>Sobre PTGA</h1>
                                <p className='montserrat'>

                                    Lorem ipsum dolor sit amet. Vel magni possimus et aliquam consequuntur sed aspernatur unde id voluptatem iusto et delectus accusamus qui rerum obcaecati. 33 perferendis harum non alias officia qui quia tempore eum perferendis omnis? Est architecto accusamus At porro accusantium id vero commodi et quia pariatur hic voluptatum necessitatibus et reiciendis tenetur. Aut impedit earum vel iure earum qui sunt voluptatem.

                                    Et molestias atque ut ipsum ratione sed sequi quaerat 33 harum nostrum sit aliquid tenetur est quia nobis cum error exercitationem. Aut incidunt cumque qui consequatur magni aut velit necessitatibus sit autem quia hic dolorem adipisci. Et laboriosam deserunt vel voluptatem veritatis sit facilis sint non voluptatum maiores. Est explicabo veniam eum aliquid maiores qui quas quisquam cum blanditiis porro non sunt labore ut fuga delectus.

                                    Sed cumque nulla qui autem iusto sed sunt voluptatem a rerum enim. Vel amet dolor rem nihil eligendi et dolorem enim! Qui molestiae quos et porro delectus qui dolores illum eum accusamus possimus qui blanditiis nobis ab voluptatem possimus.

                                </p>

                            </div>)};

                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </div >


    );
}

// const objetoImagen = {} hace falta esto , me pierdo (?)

export default Hero;