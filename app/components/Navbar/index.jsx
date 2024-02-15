'use client'
import React from 'react';
import logo from './ptgaLogo.png';
import { useState, useEffect } from 'react';


function NavBar(props) {
    //     const [scrollTop, setScrollTop] = useState(0);

    //     const handleScroll = () => {

    //     }
    // })

    return (
        <>
            <div className="navbar bg-indigo-500 w-full ">
                <div className='navbar-start size-24 mx-4'>
                    <img src={logo.src} alt="banner-ptga" />
                </div>

                <div className="navbar-center mx-6 items-center justify-between ">
                    <ul className=" menu menu-vertical lg:menu-horizontal rounded-box glass ">
                        <li className="text-white text-2xl"><a href="#">Sobre PTGA</a></li>
                        <li className="text-white text-2xl"><a href="#">Servicios</a></li>
                        <li className="text-white text-2xl"><a href="#">Clientes</a></li>
                        <li className="text-white text-2xl"><a href="#">Contacto</a></li>
                        <li className="text-white text-2xl">
                            <details>
                                <summary>Español</summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className="text-white text-2xl"><a href="#">English</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="navbar bg-indigo-500 w-full ">
                <div className='navbar-start size-24 mx-4'>
                    <img src={logo.src} alt="banner-ptga" />
                </div>

                <div className="navbar-center mx-6 items-center justify-between ">
                    <ul className=" menu menu-vertical lg:menu-horizontal rounded-box glass ">
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






        </>


    );
}

export default NavBar;