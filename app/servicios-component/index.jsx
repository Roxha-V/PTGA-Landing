import React from "react";

function Servicios() {
    return (

        <div className="h-full w-screen justify-center" style={{ backgroundImage: "url(public/serviciosbg.jpg)" }}>
            <div className="p-8 ml-4 w-full h-2/3 flex flex-row">

                <div className=" block mt-8 text-justify w-2/6 h-auto mr-8 bg-yellow-700">
                    <h1 className="text-center block text-2xl leading-normal mb-2 font-bold text-white ">Producción Tecnológica, Gráfica y Audiovisual LTDA</h1>
                    <p className=" h-fit m-4 text-justify text-wrap break-normal text-2xl font-sans leading-8 text-white ">
                        Somos una empresa dedicada al asesoramiento, investigación, fabricación y servicios de instalación en telecomunicaciones.
                        Contamos con más de una década de experiencia profesional en el campo, personal técnico especializado,
                        infraestructura y capacidad logística para operar en todo el país.
                        Nos especializamos en el desarrollo, la fabricación e investigación para la producción de equipos de broadcasting y servicios adjuntos.
                        Nuestra vasta experiencia profesional nos permite ofrecer un conjunto de soluciones
                        diseñadas para ajustarse a las necesidades de cada proyecto.
                    </p>
                </div >

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0 float-end ml-4 w-3/6">


                    <div class="transform transition duration-300 ease-in-out hover:scale-100 w-full bg-yellow-500 p-12 flex flex-col justify-center items-center bg-clip-padding bg-opacity-60">
                        <div class="text-center">
                            <p class="text-xl text-white font-bold mb-2">Servicio</p>
                        </div>

                        <div class="mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>

                    </div>

                    <div class="transform transition duration-300 ease-in-out hover:scale-110 w-full bg-blue-700 p-12 flex flex-col justify-center items-center bg-clip-padding bg-opacity-60">
                        <div class="text-center">
                            <p class="text-xl text-white font-bold mb-2">Servicio</p>
                        </div>

                        <div class="mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>

                    </div>

                    <div class="transform transition duration-300 ease-in-out hover:scale-110 w-full bg-red-900 p-12 flex flex-col justify-center items-center bg-clip-padding bg-opacity-60">
                        <div class="text-center">
                            <p class="text-xl text-white font-bold mb-2">Servicio</p>
                        </div>

                        <div class="mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>

                    </div>

                    <div class="transform transition duration-300 ease-in-out hover:scale-110 w-full bg-cyan-800 p-12 flex flex-col justify-center items-center bg-clip-padding bg-opacity-60">
                        <div class="text-center">
                            <p class="text-xl text-white font-bold mb-2">Servicio</p>
                        </div>

                        <div class="mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>

                    </div>

                </div>
            </div>

            {/* ///////////////////////////////////////////card sola////////////////////////////////////////////// */}
            <div className="h-full w-screen justify-center" style={{ backgroundImage: "url(public/serviciosbg.jpg)" }}>
                <div className="min-h-screen flex justify-center items-center">
                    <div class=" p-14 flex flex-col items-center transform transition duration-300 ease-in-out hover:-translate-y-2 w-5/6 bg-yellow-500  backdrop-opacity-10 bg-clip-padding bg-opacity-60 mt-8">
                        <h1 className=" uppercase text-center block text-2xl leading-normal mb-2 font-bold text-white ">Producción Tecnológica</h1>
                        <div className="mb-8 mt-8" >
                            <svg xmlns="http://www.w3.org/2000/svg " width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>
                        <p className="w-4/6 text-center text-wrap break-normal text-2xl font-sans leading-8 text-white mt-8 mb-8">
                            Somos una empresa dedicada al asesoramiento, investigación, fabricación y servicios de instalación en telecomunicaciones.
                            Contamos con más de una década de experiencia profesional en el campo, personal técnico especializado,
                            infraestructura y capacidad logística para operar en todo el país.
                            Nos especializamos en el desarrollo, la fabricación e investigación para la producción de equipos de broadcasting y servicios adjuntos.
                            Nuestra vasta experiencia profesional nos permite ofrecer un conjunto de soluciones
                            diseñadas para ajustarse a las necesidades de cada proyecto.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Servicios