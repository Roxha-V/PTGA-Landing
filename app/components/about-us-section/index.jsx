import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function AboutUs() {
  return (
    <>
      <div id="about-us-section">
        <div className="w-full p-8 md:p-6 lg:p-10  ">
          <div className="w-[100%] bg-white  pt-8 pl-8 rounded-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
              <div className="completo-texto flex flex-col items-start w-full align-middle">
                <div className="solo-titulo flex flex-row  pt-4 mb-2 text-center items-center z-[35]">
                  <h2 className=" flex lg:text-6xl md:text-4xl text-2xl text-pretty uppercase  text-left text-slate-700 mb-2">
                    ¿Quienes{" "}
                    <span className="pl-2 lg:pl-5 text-indigo-600">
                      somos?{" "}
                    </span>
                  </h2>
                </div>
                <p
                  className={`${montserrat.className} text-[1.4rem] leading-normal lg:text-[1.3rem] text-slate-700  text-left p-4 break-words `}
                >
                  <img
                    className="rounded-full  bg-gray-100 p-0 md:m-2 lg:m-0 lg:bg-white lg:rounded-none  hidden md:float-right md:flex lg:hidden md:h-[45svw]"
                    src="./img/torrepng.png"
                    alt="imagen torre png"
                  />
                  Somos una{" "}
                  <span className="text-indigo-600 font-semibold">
                    cooperativa especializada
                  </span>{" "}
                  en asesoramiento, investigación, fabricación y servicios de
                  instalación para el desarrollo de tecnología
                  <span className="text-indigo-600 font-semibold">
                    {" "}
                    en telecomunicaciones
                  </span>
                  .<br></br> Contamos con más de{" "}
                  <span className="text-amber-600 font-semibold">
                    una década de experiencia profesional
                  </span>{" "}
                  en el campo, personal técnico especializado y la
                  <span className="text-amber-600 font-semibold">
                    {" "}
                    infraestructura necesaria para brindar servicios integrales
                  </span>{" "}
                  en materia de comunicación audiovisual.<br></br> Nuestra vasta
                  experiencia profesional nos permite ofrecer un conjunto de
                  <span className="text-red-500 font-semibold">
                    {" "}
                    soluciones diseñadas que se ajustan a cada proyecto.
                  </span>
                </p>
              </div>

              <div className=" flex justify-end h-[300px]  lg:h-full  md:hidden lg:flex">
                <img
                  className=" p-0 md:m-2 lg:m-0 lg:bg-white lg:rounded-none"
                  src="./img/torrepng.png"
                  alt="imagen torre png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
