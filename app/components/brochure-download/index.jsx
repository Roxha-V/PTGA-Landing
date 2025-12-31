"use client";

import React from "react";

function BrochureDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/img/Brochure%20Digital%20PTGA.pdf";
    link.download = "Brochure Digital PTGA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      aria-label="Brochure download section"
      id="brochure"
      className="p-10"
    >
      <div className="w-full h-full bg-white drop-shadow-md pt-8 rounded-md overflow-hidden">
        <div className="w-full">
          <div>
            <h1 className="mb-2 lg:text-5xl md:text-4xl text-3xl text-pretty uppercase p-4 pl-8 relative font-extrabold text-slate-700 text-left">
              Descargá
              {""} Nuestro Brochure
            </h1>
          </div>
          <div className="relative origin-center flex items-center justify-center py-12 px-8">
            <div className="text-center max-w-2xl">
              <p className="lg:text-2xl md:text-xl text-lg text-pretty text-slate-600 mb-8 font-normal leading-8">
                Conocé más sobre nuestros servicios, procesos y cómo podemos
                ser tu socio estratégico en ingeniería de telecomunicaciones.
              </p>
              <button
                onClick={handleDownload}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 drop-shadow-md hover:drop-shadow-xl"
                aria-label="Descargar brochure digital PTGA"
              >
                Descargar Brochure PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrochureDownload;

