"use client";

import React, { useEffect, useState } from "react";

function ContactComponent() {
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER; //env variable de número de telefono

  const [formState, setFormState] = useState({
    name: "",
    message: "",
  });

  const handleChange = (value, key) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  // recibir un strig y devolverlo trimedo
  const validadorCampos = (campo) => {
    return campo && campo.trim();
  };

  // validacionCampos tiene que evaluar los valor de name y message (eestados  formState )
  //
  const validacionCampos = () => {
    return (
      validadorCampos(formState.name) && validadorCampos(formState.message)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullMessage = `Hola, mi nombre es ${formState.name}. Me comunico por el siguiente mensaje: ${formState.message} Aguardo respuesta. Muchas gracias !`;

    // verificar si todos los campos están completos antes de proceder
    if (validacionCampos()) {
      window.open(
        `https://wa.me/${contactNumber}?text=${encodeURIComponent(
          fullMessage
        )}`,
        "_blank"
      );
    } else {
      alert("Por favor, completa correctamente todos los campos.");
    }
  };

  return (
    <section
      aria-label="Contact section "
      id="contact"
      className="min-h-screen  py-6 flex flex-col justify-center sm:py-12"
    >
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-900  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className=" text-2xl md:text-4xl lg:text-5xl  text-pretty uppercase p-2 relative font-extrabold text-slate-700 text-left   ">
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
                  <form method="post" onSubmit={handleSubmit}>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      value={formState.name}
                      onChange={(e) => handleChange(e.target.value, "name")}
                      required
                      pattern="[A-Za-z]{1,100}"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="username"
                      type="text"
                      placeholder="¿Cuál es tu nombre ?"
                    />

                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                      placeholder="¿En que te podemos ayudar?"
                      maxLength="700"
                      value={formState.message}
                      onChange={(e) => handleChange(e.target.value, "message")}
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
                  </form>
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
