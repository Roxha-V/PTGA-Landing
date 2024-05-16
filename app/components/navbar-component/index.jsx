"use client";

import React from "react";

const navbarItems = [
  { id: "about-ptga", key: "Sobre PTGA" },
  { id: "services", key: "Servicios" },
  { id: "clientes", key: "Clientes" },
  { id: "contacto", key: "Contacto" },
];

//se piensa tambien que el item tienda puede ser insumos - chequear -

// Extraer componentes con keys. *RECORDAR*: Las keys deben especificarse dentro del array
//  que se está mapeando (map) y no dentro del componente que se está renderizando.

function NavbarComponent() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <div className="w-10/12 top-1 navbar bg-indigo-800/75 rounded-full fixed z-50 backdrop-blur-sm border shadow-slate-700 hover:shadow-indigo-500/40">
          <div className="flex-1 px-2 mx-2 ">
            <a href="/">
              <img
                src="./logo-xl-ptga.svg"
                alt="logo-PTGA"
                className="mx-2 w-44 h-12"
              ></img>
            </a>
          </div>
          <div className="flex-none lg:hidden">
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

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {navbarItems.map((item, index) => {
                return (
                  <li key={index} className="navbar-item">
                    <a className="text-white text-xl" href={`#${item.id}`}>
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

      <div className="drawer-side fixed z-[10001]">
        {/* aca arranca la parte del drawer que se muestra en mobile y pantallas chicas ocultando lo anterior */}
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay bg-base-100 rounded-t-none"
        ></label>
        <ul className="menu z-50 p-4 w-80 min-h-full bg-base-200 text-base-content">
          {navbarItems.map((item, index) => {
            return (
              <li key={index} className="navbar-item p-4">
                <a
                  className="border-2 hover:border-indigo-800"
                  href={`#${item.id}`}
                >
                  {item.key}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavbarComponent;
