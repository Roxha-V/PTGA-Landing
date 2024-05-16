import React from "react";
import Card from "./services-card";

const cardData = [
  {
    id: 0,
    title: "Instalaciones",
    icon: "",
    img: "",
    bgColor: "#FEA700",
    service_detail:
      "Instalación y mantenimiento de:-Torres de telecomunicaciones. -Equipos y enlaces en altura. -Equipos de estudio. -Transmisores",
    link: "",
  },

  // {
  //     id: 0, title: "Instalaciones", icon: "", img: "", bgColor: "#FEA700", service_detail: {
  //         a: "Instalación y mantenimiento de:", b: "-Torres de telecomunicaciones.", c: "-Equipos y enlaces en altura.", d: "-Equipos de estudio.", e: "Transmisores"
  //     }, link: ""
  // },
  {
    id: 1,
    title: "Desmonte",
    icon: "",
    img: "",
    bgColor: "#2A00BF",
    service_detail:
      "El trabajo profesional de nuestras cuadrillas de técnicos, con capacitación en seguridad laboral para el trabajo en altura, resuelven situaciones de potencial peligro para un inmueble.",
    link: "?",
  },
  {
    id: 2,
    title: "Mantenimiento de plantas trasmisoras FM",
    icon: "",
    img: "",
    bgColor: "#A30DFC",
    service_detail:
      "Nuestros técnicos realizan las tareas de mantenimiento de punta a punta: desde los equipos del estudio hasta la baliza de la torre, garantizando el buen funcionamiento de tu planta transmisora, realizando tareas como:  Cambio de antenas y enlaces. Mantenimiento de torres. Asesoría para la compra equipos de estudio y planta transmisora.    ",
    link: "?",
  },

  {
    id: 3,
    title: "Eficiencia energética",
    icon: "",
    img: "",
    bgColor: "#ED0000",
    service_detail:
      "Nuestra misión es asesorar, reformar, re acondicionar instalaciones energéticas con el enfoque en ahorro y efectividad en el uso que se le de en cada establecimiento. Analizamos las demandas y las necesidades del cliente a fin de realizar el proyecto y buscar las oportunidades de ahorro en las tarifas de electricidad y gas. Nos manejamos en las áreas domiciliarias, comerciales e industriales.",
    link: "?",
  },
  //#5C0092 violeta oscuro
];

function ServiceSection(params) {
  return (
    <div id="services">
      <div>
        <div
          className="z-20 flex justify-center overflow-hidden bg-gray-100 p-6 sm:py-12 
             lg:flex-row items-stretch flex-wrap gap-10 md:flex-col sm:flex-col"
        >
          {cardData.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServiceSection;

// Aque lo que hay es un componente que renderiza una lista de componentes con nombre <Card>.
//Cada <Card> recibe props (propiedades) basados en los elementos item dentro de los objetos que forman parte del array cardData,
//donde cada uno tiene una key única basada en su id.

//{...item} en el contexto de pasar props a un componente en react, como en <Card {...item} key={item.id} />, significa que todas las propiedades del objeto item se están pasando como props individuales al componente <Card>.
