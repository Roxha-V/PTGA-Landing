"use client";
function ContactComponent() {
  return (
    <>
      <section
        id="contact-section"
        className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
      >
        <div id="container" className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            id="bg-form"
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          ></div>
          <div
            id="form-card"
            className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          >
            <div id="form-container" className="max-w-md mx-auto">
              <div id="form-title">
                <h1 className="text-2xl font-semibold">Hablemos !</h1>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div id="username" className="relative">
                    <label htmlFor="username">Nombre</label>

                    <input
                      name="name"
                      id="username"
                      type="text"
                      placeholder="Ingrese su Nombre"
                      pattern="[A-Za-z]{1,100}"
                      title="El campo no acepta numeros"
                      maxLength="100"
                      required
                    />
                  </div>

                  <div id="phone" className="relative">
                    <label htmlFor="phone">Numero de Contacto:</label>
                    <input
                      type="tel"
                      id="userphone"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                    />
                  </div>

                  <div id="message" classNameName="relative">
                    <label htmlFor="userMessage">Mensaje</label>

                    <textarea
                      classNameName="textarea"
                      name="Message"
                      id="userMessage"
                      placeholder="¿En que te podemos ayudar?"
                      maxLength="500"
                      title="Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número"
                      required
                    ></textarea>
                  </div>

                  <div id="submit-btn" className="relative">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white align-middle select-none font-sans font-bold
                       text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                       disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 
                       text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85]
                        flex items-center gap-3"
                    >
                      <img src="" alt="" class="w-6 h-6" />
                      Enviar por whatsapp{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactComponent;

{
  /* 
// **Existe funcion de whatsapp principal https://faq.whatsapp.com/5913398998672934?helpref=faq_content “clic para chatear” permite comenzar un chat con un numero sin necesidad de tenerlo guardado en la libreta de contactos.
//Para esto se usa **https://wa.me/<número>** donde **<número>** es un número de teléfono completo en formato internacional. Sin ceros, paréntesis o  guiones. Aparentemente solo se debe linkear con un h ref donde le demos click para que nos lleve al chat.
// Por otro lado se puede crear un enlace propio con un msje predefinido al enlace anterior hay que sumarle el parámetro **&text=** más el mensaje en forma de URL. A decir, que los espacios deberán ser remplazados por los **caracteres %20.
//En este caso un ejemplo seria ejemplo :

// <a href="https://api.whatsapp.com/send?phone=5493512280243&text=Hola%20,como%20estas%20?."><svg></svg></a> 


{/* 
  //definir si es necesario el correo del cliente -
                <div>
                  <label for="useremail">Correo Electrónico</label>
                </div>

                  
                
                <input
                  name="email"
                  id="useremail"
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  maxlength="30"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
/> */
}
