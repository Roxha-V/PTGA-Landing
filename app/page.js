import React from "react";
import HeroComponent from "./components/hero-component";
import AboutUs from "./components/about-us-section/index.jsx";
import Services from "./components/services-section";
import ContactComponent from "./components/contact_section";
import BrochureDownload from "./components/brochure-download";


/* const carousel_items = [
  { key: "cliente-1", id: "0", name: "Glew Net" },
  { key: "cliente-2", id: "1", name: "Trialcom Sistemas" },
  { key: "cliente-3", id: "2", name: "Ministerio de Educación" },
  { key: "cliente-4", id: "3", name: "UNAHUR" },
  { key: "cliente-5", id: "4", name: "Universidad Nacional de Moreno" },
  { key: "cliente-6", id: "5", name: "Universidad Nacional de Quilmes" },
  { key: "cliente-7", id: "6", name: "Dinatech" },
  {
    key: "cliente-8",
    id: "7",
    name: "Organización de Estados Iberoamericanos",
  },
  { key: "cliente-9", id: "8", name: "Nokia" },
  { key: "cliente-10", id: "9", name: "Claro" },
]; */
export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutUs />
      <Services />
      <BrochureDownload />
{/*       <Clients_Carousel data={carousel_items} /> */}
      <ContactComponent />
    </>
  );
}
