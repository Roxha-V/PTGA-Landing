import React from "react";

function HeroComponent() {
  return (
    <>
      <div
        className="hero min-h-[100dvh]"
        style={{ backgroundImage: "url(/img/bannerhero4.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-neutral-content">
          <div className="w-9/12 pt-10 ">
            <h1 className="box-content mb-5 text-center lg:text-left text-4xl md:text-5xl lg:text-7xl font-bold">
              Producción Tecnológica, Gráfica <br />y Audiovisual LTDA
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;

// from-blue-400 to-cyan-900
