'use client';

import React, { useState } from "react";

import CeraFont from 'next/font/local';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})




// const ceraProMedium = CeraFont({
//     src: 'fonts/CeraPro-Medium.woff',
//     fontFamily: 'CeraPro',
//     fontWeight: 400,
//     fontStyle: 'normal',
// });


// const ceraProBold = CeraFont({
//     src: 'fonts/CeraPro-Bold.woff',
//     fontFamily: 'CeraPro',
//     fontWeight: 700,
//     fontStyle: 'normal',
// });


function HeroComponent() {

  const bannersArreglo = [
    './img/bannerhero1.jpg',
    './img/bannerhero2.jpg',
    './img/bannerhero3.jpg',
    './img/bannerhero4.jpg',
  ];  //aca se podria pasar una api (?) - preguntar walter 

  const arreglo = bannersArreglo.length;

  const [botonActivo, setBotonActivo] = useState(0)

  const botonAnterior = () => {
    setBotonActivo((bannerActual) => (bannerActual === 0 ? arreglo - 1 : bannerActual - 1));
    // aca la funcion determina una condicion donde si banner actual es igual a 0 , entonces 
  };

  const botonSiguiente = () => {
    setBotonActivo((bannerActual) => (bannerActual === arreglo - 1 ? 0 : bannerActual + 1));
    //aca esta mas dificil, lo que se busca es ver si la posicion actual del banner es *el ultimo del arreglo*
    // si esto es asi al banner al que pasa es al primer elemto del arreglo (osea indice 0) [bannerActual === arreglo - 1 ? 0 ]
    // En cambio si la posicion actual del banner no es igual al indice 0 lo que hace es que se le sume una posicion para ir al siguiente banner con el indice incrementado

    //https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/ - pagina ayuda XD -
  };


  return (
    <>
      <div className="relative w-full">   {/*contenedro */}

        {/* aca abajo es para ver o no los puntos que te guian con los buttons - logica: con un z index se posicionan los buttons con space reverse
  para que se estos tengan espacio (reverse ya que vuelve la ronda de btns con la funcionalidad) // se recorre el array de imagenes por indice
  y lo que resuelve es que exista un boton por indice que si dicho index coincide con el indice de la imagen del banner el button se vuelva blanco y si no coinciden que se vuelva gris */}


        <div className="z-0 relative h-56 overflow-hidden md:h-96 bg-indigo-600">

          {bannersArreglo.map((img, indice) => (
            <div
              key={indice}
              className={`carousel-item ${botonActivo === indice ? '' : 'hidden'}`}
            >
              <img src={img} className="absolute block w-full h-full object-fit bg-blend-multiply bg-no-repeat"
              />
            </div>
          ))}

          <div className="w-full h-full absolute bg-fixed flex flex-col items-center justify-center align-middle  z-20">
            <h1 className=" backdrop-blur-sm [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] contrast-100 ceraProM drop-shadow-lg px-2 lg:text-9xl md:text-8xl sm:text-7xl xs:text-6xl mb-5 text-white tracking-[0.5rem] relative "> PTGA </h1>
            <h2 className=" p-2 rounded-sm [text-shadow:2px_2px_4px_rgba(0,0,0,1)] contrast-100 montserratM leading-loose lg:text-4xl md:text-3xl sm:text-2xl text-white
                         relative drop-shadow-md">
              Producción Tecnológica, Gráfica <br />
              y Audiovisual LTDA
            </h2>
          </div>
          font-weight: 600;


          {/* A probar tambein en consulta con ptga
    
    background-color: #d2c4ffcf;
    border-radius: 10px;
    color: black;
    text-align: center; */}


          <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse z-20">
            {bannersArreglo.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${botonActivo === index ? 'bg-white' : 'bg-gray-300'}`}
                onClick={() => { setBotonActivo(index); console.log('ele', _, "ind", index) }}
              ></button>
            ))}
            {/* 
map en si recibe tres argumentos siempre/sintaxis general (elemento- indice y array mismo)  -- La function() callback es llamada en cada elemento del arreglo, y el método map() siempre le pasa el element actual, el index del elemento actual y el objeto array completo.

En este caso se utiliza para generar un conjunto de botones basados en la cantidad de elementos en bannersArreglo (osea el array que le se pasa al metodo map). La función que se pasa a map() recibe dos argumentos: el primer argumento es el elemento actual del arreglo que se está procesando -elem-, y el segundo argumento es el índice de ese elemento en el arreglo.

La sintaxis de la función que se pasa a map() es (element, index) => , donde element es el elemento actual del arreglo y index es su índice. El primer argumento se ignora utilizando _ (guion) como nombre de variable, lo que es una convención común en JavaScript cuando no se necesita utilizar el valor de una variable. Esto se hace porque solo estás interesado en el índice de cada elemento para generar los botones, no en los elementos mismos.

Por lo tanto, {bannersArreglo.map((_, index) => significa que para cada elemento en bannersArreglo, se genera un botón utilizando el índice de ese elemento.*/}

          </div>

          <button
            className="z-20 btn-gosth absolute h-full px-4 cursor-pointer  focus:outline-none "
            onClick={botonAnterior}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10 hover:fill-white">
              <path className="hover:shadow-lg" fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
          </button>


          <button
            className="z-20 btn-gosth absolute h-full px-4 cursor-pointer end-0 focus:outline-none "
            onClick={botonSiguiente}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 hover:fill-white">
              <path className="hover:shadow-lg" fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>

          </button>



          <div className=" mix-blend-overlay absolute h-full  w-full top-0 left-0 bg-gradient-to-r from-violet-900 to-purple-900 opacity-10 z-10 flex align-middle justify-center flex-col "></div>



        </div>
      </div >



    </>




  )

}

export default HeroComponent;

// from-blue-400 to-cyan-900