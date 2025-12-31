import React from "react";

function HeroComponent() {
  return (
    <>
      <section aria-label="Hero Section">
        <div
          className="hero min-h-[100dvh]"
          style={{ 
            backgroundImage: "url(/img/bannerhero4.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content text-neutral-content w-full flex justify-end items-start">
            <div className="w-9/12 pt-10 sm:ml-auto sm:pr-8 min-[1040px]:w-auto min-[1040px]:mr-32 min-[1040px]:pr-0 min-[1040px]:ml-0">
              <h1 className="box-content mb-5  ml-8 text-right text-4xl md:text-5xl lg:text-7xl font-bold whitespace-nowrap max-[480px]:whitespace-normal min-[1040px]:ml-0">
              Cooperativa PTGA
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroComponent;

// from-blue-400 to-cyan-900
