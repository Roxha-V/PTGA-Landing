"use client";

import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Clients_Carousel({ data }) {
  return (
    <section id="clients">
      <div className="w-full h-full">
        <div className="w-full  bg-gray-100">
          <div>
            <h1 className="relative p-8 text-3xl font-extrabold text-black text-center">
              Confian en Nosotros
            </h1>
          </div>
          <div>
            <Swiper
              loop={true}
              speed={2000} // ( ej 2000 ms = 2 segundos)
              autoplay={{
                delay: 3000, // tiempo entre transiciones
                disableOnInteraction: true, //inact en interaccion
              }}
              spaceBetween={0}
              //centeredSlides={true}
              pagination={{
                type: "bullets",
                dynamicBullets: "true",
                dynamicMainBullets: "3",
              }}
              modules={[Autoplay, Pagination]}
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
                1000: {
                  slidesPerView: 5,
                },
                1500: {
                  slidesPerView: 6,
                },
                1700: {
                  slidesPerView: 7,
                },
              }}
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.key}
                  className="carousel-item overflow-hidden relative
              "
                >
                  <h2 className="text-xl text-black text-center py-10 decoration-sky-500  ">
                    {item.name}
                  </h2>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients_Carousel;
