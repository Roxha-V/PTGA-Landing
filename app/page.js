
'use client'
import React from "react";

import NavBar from "./components/Navbar";

import Hero from "./components/Hero"

import ClientCarousel from "./components/carousel";

import { bebasNeue, montserrat } from "./components/Fonts/appFonts";


export default function Home({ }) {
  return (
    <main>
      <style jsx global>{`
        body {
          font-family: ${bebasNeue.name}, ${montserrat.name};
          height: 1200px;
        }
      `}</style>

      <NavBar />
      <Hero />

      <ClientCarousel />

    </main>
  );
}
