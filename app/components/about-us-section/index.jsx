'use client';

import React, { useState } from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
})

function AboutUs() {

    return (
        <>
            <div id="about-us-section" className="w-full block py-10 bg-cyan-900 justify-center">
                <h1 className="font-sans ceraprobold p-10 mb-2 text-5xl text-pretty uppercase leading-8 tracking-widest font-bold text-center text-white">Sobre PTGA</h1>
                <p className={`${montserrat.className} object-contain font-sans px-40 md:text-[1.25rem] md:leading-normal lg:text-[2.25rem] lg:leading-loose text-white text-justify`} >Somos una cooperativa  especializada en asesoramiento, investigación, fabricación y servicios de instalación para el desarrollo de tecnología en telecomunicaciones.
                    Contamos con más de una década de experiencia profesional en el campo, personal técnico especializado y la infraestructura necesaria para brindar servicios integrales en materia de comunicación audiovisual.
                    Nuestra vasta experiencia profesional nos permite ofrecer un conjunto de soluciones diseñadas que se ajustan a cada proyecto. </p>
            </div>

        </>

    )
};

export default AboutUs;