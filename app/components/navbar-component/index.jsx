"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const navbarItems = [
  { id: "about-us-section", key: "Sobre PTGA" },
  { id: "services", key: "Servicios" },
  { id: "clients", key: "Clientes" },
  { id: "contact", key: "Contacto" },
];

//se piensa tambien que el item tienda puede ser insumos - chequear -

// Extraer componentes con keys. *RECORDAR*: Las keys deben especificarse dentro del array
//  que se está mapeando (map) y no dentro del componente que se está renderizando.

function NavbarComponent() {
  const scrollToSection = (id) => {
    const idFollow = document.getElementById(id);
    //Para cambiar el tamaño del offset modificar esta variable. Son px.
    let offsetTop = document
      .getElementById("navigation-bar")
      .getBoundingClientRect().height; // este tamaño es relacionado al tamaño (altura) del navbar menu
    let distanceFromViewport = idFollow.getBoundingClientRect().top;
    let finalPosition = distanceFromViewport + window.scrollY - offsetTop;
    if (idFollow) {
      window.scrollTo({ behavior: "smooth", top: finalPosition });
    } else {
      console.log("no se encontro", id, "en el document");
    }
  };

  //función scrollToSection dentro del componente - función de flecha que acepta un parámetro id (id del elemento a donde se quiere ir)

  return (
    <section
      id="navigation-bar"
      className="fixed top-0 z-40 w-full backdrop-blur-sm	"
    >
      <div className="drawer drawer-end w-10/12	 mx-auto mt-4 mb-2">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <div className={`w-full navbar bg-indigo-600  rounded`}>
            <div className="flex-1 px-2 mx-2 ">
              <a
                onClick={() => {
                  window.scrollTo({ behavior: "smooth", top: 0 });
                }}
              >
                <img
                  src="./logo-xl-ptga.svg"
                  alt="logo-PTGA"
                  className=" h-[9dvh] object-contain cursor-pointer"
                ></img>
              </a>
            </div>

            <div className="flex-none md:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <img
                  src="./hamburguericon.svg"
                  alt="hamburguer-icon"
                  className="w-12 h-12 justify-end px-2"
                ></img>
              </label>
            </div>

            <div className="flex-none hidden md:block">
              <ul className="menu menu-horizontal">
                {navbarItems.map((item, id) => {
                  return (
                    <li key={item.id} className="navbar-item ">
                      <a
                        className="sections text-white text-xl"
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.key}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* aca va el contenido de la pagina entera*/}

        <div className="drawer-side z-40 overflow-x-hidden">
          {" "}
          {/* aca arranca la parte del drawer que se muestra en mobile y pantallas chicas ocultando lo anterior */}
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay bg-base-100 rounded-t-none"
          ></label>
          <ul className="menu  w-80 min-h-full bg-base-200 text-base-content">
            {navbarItems.map((item, index) => {
              return (
                <li key={item.id} className="navbar-item m-4">
                  <a
                    className="border-2 hover:border-indigo-800"
                    onClick={(e) => scrollToSection(item.id)}
                  >
                    {item.key}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NavbarComponent;
