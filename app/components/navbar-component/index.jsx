'use client'

import React from "react";
// import logo from "app/components/navbar-component/logo.png";


const navbarItems = [
  { "id": "0", "key": "Sobre PTGA" },
  { "id": "1", "key": "Servicios" },
  { "id": "2", "key": "Clientes" },
  { "id": "3", "key": "Contacto" },
  { "id": "4", "key": "Español" }
];

// Extraer componentes con keys. *RECORDAR*: Las keys deben especificarse dentro del array
//  que se está mapeando (map) y no dentro del componente que se está renderizando. 


function NavbarComponent() {

  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-blue-600">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">PTGA (o logo ptga hay que ver)</div>

          <div id="logo" className="flex-1 px-2 mx-2">
            <a href="/">
              {/* <img className="w-22 h-16" src={logo} alt="banner-ptga" /> */}
            </a>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {navbarItems.map((item, index) => {
                if (index === navbarItems.length - 1) {
                  return (
                    <li key={index} className="navbar-item mb-4 hover:bg-gray-200">
                      <details className="text-white text-2xl">
                        <summary>Español</summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                          <li>
                            <a href="#">English</a>
                          </li>

                        </ul>
                      </details>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="navbar-item p-4 hover:bg-gray-200">
                      <a href={`#${item.id}`}>{item.key}</a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* aca va el contenido de la pagina entera*/}






      <div className="drawer-side">  {/* aca arranca la parte del drawer que se muestra en mobile y pantallas chicas ocultando lo anterior */}
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {navbarItems.map((item, index) => {

            if (index === navbarItems.length - 1) {

              return (

                <li key={index} className="navbar-item mb-4 hover:bg-gray-200">
                  <details className="text-white text-2xl">
                    <summary>Español</summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                      <li>
                        <a href="#">English</a>
                      </li>

                    </ul>
                  </details>
                </li>
              );
            } else {
              return (
                <li key={index} className="navbar-item p-4 hover:bg-gray-200">
                  <a href={`#${item.id}`}>{item.key}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavbarComponent;
