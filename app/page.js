import React from "react";
import HeroComponent from "./components/hero-component";
import AboutUs from "./components/about-us-section/index.jsx";
import FloatingBtn from "./components/Floating-btn-component/FloatingBtn";
import Services from "./components/services-section";
import ContactComponent from "./components/contact_section";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutUs />
      <Services />
      <ContactComponent />
      <FloatingBtn />
    </>
  );
}
