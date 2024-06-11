"use client";

import React from "react";

function Card({ id, title, img, bgColor, service_detail }) {
  return (
    <div
      id="touch-card"
      className="group relative cursor-pointer overflow-hidden bg-gray-200/40 pt-10 pb-8  ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto rounded-lg  px-6 sm:px-10"
    >
      <span
        id="card-span"
        className="absolute top-10 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[25] "
        style={{ backgroundColor: bgColor }}
      ></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span
          className=" grid h-20 w-20 place-items-center rounded-full transition-all duration-200 group-hover:bg-[var(--hover)] "
          style={{
            "--hover": bgColor,
          }}
        >
          {img}
        </span>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a
              id="card-title"
              className={`text-${bgColor} transition-all duration-300 group-hover:text-white/90`}
            >
              {title}
            </a>
          </p>
        </div>
        <div
          id="card-parag"
          className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300  text-left text-balance group-hover:text-white/90"
        >
          <p>{service_detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
