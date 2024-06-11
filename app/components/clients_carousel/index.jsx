"use client";

import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Clients_Carousel({ data }) {
  return (
    <section id="clients block">
      <h1 className="text-purple-900 text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
        Confian en Nosotros
      </h1>
      <div class=" place-content-center border-y-indigo-700 border-4 mt-4">
        {/* <div class="bg-gradient-to-r from-blue-400 to-indigo-500 "></div> */}
        <div class="bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm gap-0 text-center rounded-md shadow-lg   ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 0,
              enable: true,
            }}
            speed={1200}
            spaceBetween={0}
            allowTouchMove={true}
            slidesPerView={3}
            className="mySwiper h-56"
            resistance={0}
            modules={[Autoplay]}
          >
            {data.map((item) => (
              <SwiperSlide className="absolute left-4 right-4  border-x-indigo-700 border-4  text-center shadow-lg  text-xl text-indigo-600   ">
                <div className=" flex carousel-center text-5xl">
                  {item.name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients_Carousel;
