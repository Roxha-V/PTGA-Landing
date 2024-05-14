'use client'

import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';


function Card({ id, title, img, bgColor, service_detail }) {

    //esta funcion cambia de estado de isopen , osea cambia el estado de false a true , se usa despues con onclick. El operador lógico !
    //devuelve true cuando la expresión setAbierta da como resultado false 


    // Recordar : El operador lógico AND (&&) será true para un conjunto de operandos booleanos,solo si todos los operandos son true.
    //         sino sera false.


    // aca se entiende que isOpen es la card cardAbierta pero que en su estado inicial es false (osea que no esta isOpen),
    // mientras que si se usa el operador ! este estado cambia, osea es el opuesto


    return (



        <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto rounded-lg  px-6 sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[15]" style={{ backgroundColor: bgColor }}></span>
            <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full transition-all duration-200 group-hover:bg-[var(--hover)] "
                    style={{
                        '--hover': bgColor
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                </span>
                <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                        <a href="#" className={`text-${bgColor} transition-all duration-300 group-hover:text-white/90`}>{title}
                        </a>

                    </p>
                </div>
                <div
                    className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p>{service_detail}</p>
                </div>

            </div>
        </div >

    );
}



export default Card;
