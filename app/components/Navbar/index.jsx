'use client'
import React from 'react';
import logo from './ptgaLogo.png';
import { useEffect, useState } from 'react';

function NavBar(props) {

    const [scrollArriba, setscrollArriba] = useState(0); //valor incial de vriable de estado (?)

    useEffect(() => {
        const handleScroll = event => {
            setscrollArriba(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);


        //se define una function que va a cambiar con el estado de scrollArriba


        //     return () => {
        //         window.removeEventListener('scroll', handleScroll);
        //         console.log("se esta haciendo scroll")
        //     };
    });


    return (

        <div className={scrollArriba > 0 ? "solid-navbar" : "logo-navbar"}>
            <div className='navbar-end size-24 top-0'>
                <img src={logo.src} alt="banner-ptga" />
            </div>

            <div className="navbar-center mx-6 items-center justify-between ">
                <ul className="montserrat menu menu-vertical lg:menu-horizontal rounded-box glass ">
                    <li className="text-white text-2xl"><a href="#">Sobre PTGA</a></li>
                    <li className="text-white text-2xl"><a href="#">Servicios</a></li>
                    <li className="text-white text-2xl"><a href="#">Clientes</a></li>
                    <li className="text-white text-2xl"><a href="#">Contacto</a></li>
                    <li className="text-white text-2xl">
                        <details>
                            <summary>Español</summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a href="#">English</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar