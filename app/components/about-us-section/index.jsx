"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function AboutUs() {
  return (
    <>
      <div id="about-us-section">
        <div className="w-full p-8 md:p-6 lg:p-10 bg-gray-100 ">
          <div className="w-[100%] bg-white  md:py-5 md:px-5 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mr-4">
              <div className="completo-texto flex flex-col items-start w-full align-middle">
                <div className="solo-titulo flex flex-row pl-5 pt-4 mb-2 text-center items-center">
                  <h1 className=" lg:text-6xl md:text-4xl text-2xl text-pretty uppercase  text-left text-slate-700 mb-2">
                    ¿Quienes{" "}
                  </h1>
                  <h1 className=" pl-5 lg:text-6xl md:text-4xl text-2xl text-pretty uppercase  text-left text-indigo-600 mb-2">
                    {" "}
                    somos?
                  </h1>
                </div>

                <p
                  className={`${montserrat.className} md:text-[1rem] leading-normal lg:text-[1.3rem] text-slate-700  text-justify p-4`}
                >
                  Somos una{" "}
                  <span className="text-indigo-600">
                    cooperativa especializada
                  </span>{" "}
                  en asesoramiento, investigación, fabricación y servicios de
                  instalación para el desarrollo de tecnología
                  <span className="text-indigo-600">
                    {" "}
                    en telecomunicaciones
                  </span>
                  .<br></br> Contamos con más de{" "}
                  <span className="text-amber-600">
                    una década de experiencia profesional
                  </span>{" "}
                  en el campo, personal técnico especializado y la
                  <span className="text-amber-600">
                    {" "}
                    infraestructura necesaria para brindar servicios integrales
                  </span>{" "}
                  en materia de comunicación audiovisual.<br></br> Nuestra vasta
                  experiencia profesional nos permite ofrecer un conjunto de
                  <span className="text-red-500">
                    {" "}
                    soluciones diseñadas que se ajustan a cada proyecto.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
