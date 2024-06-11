"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function AboutUs() {
  const sectionStyle = {
    backgroundImage: "linear-gradient(-25deg,#120320,#43005F, #5C0092)",
  };

  return (
    <>
      <div id="about-us-section">
        <div className="w-full p-4">
          <div
            style={sectionStyle}
            className="grid grid-cols-2 gap-4 w-full shadow-xl py-10 px-5 rounded-md ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl mx-auto"
          >
            <div className="flex flex-col">
              <div
                className="relative 
              "
              >
                <div className="flex flex-col items-start">
                  <h1 className="ml-10 lg:text-5xl md:text-3xl sm:text-2xl text-pretty uppercase text-left  mb-2">
                    Sobre PTGA
                  </h1>

                  <p
                    className={`${montserrat.className} md:text-[1rem] md:leading-normal lg:text-[1.5rem] text-white text-justify p-4`}
                  >
                    Somos una cooperativa especializada en asesoramiento,
                    investigación, fabricación y servicios de instalación para
                    el desarrollo de tecnología en telecomunicaciones. Contamos
                    con más de una década de experiencia profesional en el
                    campo, personal técnico especializado y la infraestructura
                    necesaria para brindar servicios integrales en materia de
                    comunicación audiovisual. Nuestra vasta experiencia
                    profesional nos permite ofrecer un conjunto de soluciones
                    diseñadas que se ajustan a cada proyecto.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ backgroundImage: "url(public/torrepng.png)" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
