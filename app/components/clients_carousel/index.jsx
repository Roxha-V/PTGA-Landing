"use client";

import React, { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Clients_Carousel({ data }) {
  return (
    <section
      aria-label="Clients carousel section"
      id="clients"
      className="p-10"
    >
      <div className="w-full h-full bg-white drop-shadow-md pt-8  rounded-md overflow-hidden">
        <div className="w-full ">
          <div>
            <h1 className="relative p-8 mb-2 ml-4 leading-8 text-4xl font-extrabold  text-left tracking-normal  ">
              <span className="underline decoration-indigo-600/40">
                Confian
              </span>
              {""} en Nosotros
            </h1>
          </div>
          <div className="relative origin-center mySwiper">
            <Swiper
              freeMode={true}
              loop={true}
              speed={1600}
              autoplay={{
                delay: 600,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 2,
                },
                639: {
                  slidesPerView: 2,
                },
                865: {
                  slidesPerView: 3,
                },
                1700: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.map((item) => (
                <div className="relative flex-shrink-0">
                  <SwiperSlide
                    key={item.id}
                    className="carousel-item overflow-hidden relative "
                  >
                    <h2 className="text-xl text-indigo-600 text-center px-14 py-10 font-normal leading-8 mb-4">
                      {item.name}
                    </h2>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients_Carousel;
