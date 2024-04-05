import React from "react";
import HeroComponent from "./components/hero-component";
import AboutUs from "./components/about-us-section/index.jsx";

export default function Home() {
  return (
    <main className="min-h-screen justify-between">
      <div>
        <HeroComponent />
        <AboutUs />
      </div>
    </main>
  );
}
