"use client";

import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Clients_Carousel({ data }) {
  return (
    <section id="clients">
      <div className="w-full h-full">
        <div className="w-full h-48 bg-gray-900 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div>
            <h1 className="relative p-8 text-purple-900 text-center">
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
              slidesPerView={3}
              spaceBetween={1}
              centeredSlides={true}
              pagination={{
                type: "bullets",
                dynamicBullets: "true",
                dynamicMainBullets: "3",
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.key}
                  className="carousel-item p-2 overflow-hidden relative
              "
                >
                  <h2 className="text-xl text-blue-50 p-10 decoration-sky-500  ">
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
