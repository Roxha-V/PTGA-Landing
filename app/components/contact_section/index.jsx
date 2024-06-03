"use client";
function ContactComponent() {
  return (
    <section
      id="contact-section"
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
    >
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-900  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-extrabold text-black">
                  Hablemos...
                </h1>
                <p className="mt-3 text-rigth">
                  Necesitas asesoramiento para el área de telecomunicaciones y/o
                  instalaciones eléctricas? <br />
                  Queres pedir tu presupuesto?
                  <br />
                  Contactanos!
                </p>
                <hr className="mt-3 border-gray-300"></hr>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    pattern="[A-Za-z]{1,100}"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="username"
                    type="text"
                    placeholder="¿Cuál es tu nombre ?"
                  />

                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Número de Contacto <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="user-number"
                    type="email"
                    placeholder="Número de contacto"
                  />

                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                    placeholder="¿En que te podemos ayudar?"
                    maxLength="700"
                  ></textarea>

                  <div>
                    <button
                      type="submit"
                      className="submit-btn w-full bg-green-500  py-3 px-7 rounded-lg border border-blue-gray-500 
                       text-blue-gray-500 hover:opacity-75 flex justify-center gap-3"
                    >
                      <h1
                        className="relative text-white align-middle select-none  font-bold
                       text-center uppercase text-sm"
                      >
                        Consultar por whatsapp
                      </h1>
                      <a href="whatsapp://send?phone=0000000000">
                        <svg
                          viewBox="0 0 32 32"
                          className="sm:w-12 sm:h-12 md:w-16 md:h-16 w-16 h-16 p-2 bg-green-600 fill-white rounded-full fixed bottom-4 right-4 z-10 shadow-md hover:drop-shadow-2xl"
                        >
                          <path
                            d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </button>
                  </div>
                  <div>
                    <p className="grid grid-cols-1 mt-2 leading-loose md:text-center sm:text-center text-justify  ">
                      👥 12 años de experiencia <br />
                      👷‍♂️ Un equipo especializado <br />
                      🛠 Equipamiento de punta <br />
                      📋 Tu Cotización en 24 hs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
