import React from "react";
import logo from "./logo.png";

function NavbarComponent() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />{" "}
      {/* aca un checkbox que esta como "oculto" para tooglear de abriero a cerrado */}
      <div className="drawer-content flex flex-col">
        {" "}
        {/* contenido del navbar */}
        <div className="navbar-center mx-6 items-center justify-between "></div>
        <div className="w-full navbar bg-blue-600">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div id="logo" className="flex-1 px-2 mx-2">
            <a href="/">
              <img className="w-22 h-16" src={logo.src} alt="banner-ptga" />
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* contenido abierto xl lg y md(1) */}
              <li className="text-white text-2xl">
                <a href="#">Sobre PTGA</a>
              </li>
              <li className="text-white text-2xl">
                <a href="#">Servicios</a>
              </li>
              <li className="text-white text-2xl">
                <a href="#">Clientes</a>
              </li>
              <li className="text-white text-2xl">
                <a href="#">Contacto</a>
              </li>
              <li className="text-white text-2xl">
                <details>
                  <summary>Español</summary>
                  <ul className="rounded-md p-2 bg-blue-600">
                    <li className="text-white text-2xl">
                      <a href="#">English</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* aca arranca la parte del drawer que se muestra en mobile y pantallas chicas ocultando lo anterior */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* contenido xs sm mobile (2)*/}
          <li className="text-white text-2xl">
            <a href="#">Sobre PTGA</a>
          </li>
          <li className="text-white text-2xl">
            <a href="#">Servicios</a>
          </li>
          <li className="text-white text-2xl">
            <a href="#">Clientes</a>
          </li>
          <li className="text-white text-2xl">
            <a href="#">Contacto</a>
          </li>
          <li className="text-white text-2xl">
            <details>
              <summary>Español</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavbarComponent;
