import React from "react";
import HeroComponent from "./components/hero-component";
import AboutUs from "./components/about-us-section/index.jsx";
import FloatingBtn from "./components/Floating-btn-component/FloatingBtn";

export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <div>
        <HeroComponent />
        <AboutUs />
        <FloatingBtn />
      </div>
    </main>
  );
}
